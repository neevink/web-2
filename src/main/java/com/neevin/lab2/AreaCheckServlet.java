package com.neevin.lab2;

import com.neevin.lab2.helpers.HitChecker;
import com.neevin.lab2.helpers.Validator;
import com.neevin.lab2.models.HitResultModel;
import com.neevin.lab2.models.ResultsModel;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

@WebServlet(name = "AreaCheckServlet", value = "/check")
public class AreaCheckServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

        HttpSession session = request.getSession();
        session.setAttribute("queryTime", new Date());

        String xStr = request.getParameter("x");
        String yStr = request.getParameter("y");
        String rStr = request.getParameter("r");

        log(String.format("x = %s, y = %s, r = %s", xStr, yStr, rStr));

        try{
            float x = Float.parseFloat(xStr);
            float y = Float.parseFloat(yStr);
            float r = Float.parseFloat(rStr);

            if(!Validator.validateX(x) || !Validator.validateY(y) || !Validator.validateR(r)){
                response.setContentType("application/json");
                response.setCharacterEncoding("UTF-8");
                PrintWriter out = response.getWriter();
                out.print("{\"errorMessage\": \"Ошибка валидации, изммените R\"}");
                return;
            }

            ServletContext context = getServletContext();
            ResultsModel results = (ResultsModel) context.getAttribute("results");

            if(results == null){
                results = new ResultsModel();
            }
            HitResultModel hitRes = new HitResultModel(x, y, r, HitChecker.checkHit(x, y, r));
            results.addHit(hitRes);
            context.setAttribute("results", results);

            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            response.getWriter().print(String.format("{\"x\": %s, \"y\": %s, \"r\": %s, \"hit\": %s}", hitRes.getX(), hitRes.getY(), hitRes.getR(), hitRes.getHit()));

        }
        catch (Exception exc){
            //getServletContext().getRequestDispatcher("/badRequest.jsp").forward(request, response);
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            response.getWriter().print("{\"errorMessage\": \"Ошибка во время выполнения сценария\"}");
        }
    }
}
