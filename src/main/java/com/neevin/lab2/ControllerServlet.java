package com.neevin.lab2;

import com.neevin.lab2.helpers.HitChecker;
import com.neevin.lab2.helpers.Validator;
import com.neevin.lab2.models.HitResultModel;
import com.neevin.lab2.models.ResultsModel;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

@WebServlet(name = "ControllerServlet", value = "/controller")
public class ControllerServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        session.setAttribute("queryTime", new Date());

        String xStr = request.getParameter("x");
        String yStr = request.getParameter("y");
        String rStr = request.getParameter("r");

        log(String.format("x = %s, y = %s, r = %s", xStr, yStr, rStr));

        try{
            float x = Float.parseFloat(xStr);
            int y = Integer.parseInt(yStr);
            int r = Integer.parseInt(rStr);

            if(!Validator.validateX(x) || !Validator.validateY(y) || !Validator.validateR(r)){
                getServletContext().getRequestDispatcher("/badRequest.jsp").forward(request, response);
            }

            ServletContext context = getServletContext();
            ResultsModel results = (ResultsModel) context.getAttribute("results");

            if(results == null){
                results = new ResultsModel();
            }
            HitResultModel hitRes = new HitResultModel(x, y, r, HitChecker.checkHit(x, y, r));
            results.addHit(hitRes);
            context.setAttribute("results", results);

            // Тут делаем дела с числами
            //getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);


            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            PrintWriter out = response.getWriter();
            out.print(String.format("{\"x\": %s, \"y\": %s, \"r\": %s, \"hit\": %s}", hitRes.getX(), hitRes.getY(), hitRes.getR(), hitRes.getHit()));

        }
        catch (Exception exc){
            getServletContext().getRequestDispatcher("/badRequest.jsp").forward(request, response);
        }

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
