package com.neevin.lab2;

import com.neevin.lab2.helpers.Validator;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.Date;

@WebServlet(name = "ControllerServlet", value = "/controller")
public class ControllerServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        session.setAttribute("queryTime", new Date());
        log("I WAS IN CONTROLLER");
        String xStr = request.getParameter("x");
        String yStr = request.getParameter("y");
        String rStr = request.getParameter("r");

        log(String.format("x = %s, y = %s, r = %s", xStr, yStr, rStr));

        try{
            float x = Float.parseFloat(xStr);
            int y = Integer.parseInt(yStr);
            int r = Integer.parseInt(rStr);

            if(!Validator.validateX(x) || !Validator.validateY(y) || !Validator.validateR(r)){
                request.getRequestDispatcher("/badRequest").forward(request, response);
            }

            // Тут делаем дела с числами
        }
        catch (Exception exc){
            getServletContext().getRequestDispatcher("/badRequest.jsp").forward(request, response);
        }

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
