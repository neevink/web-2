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
    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        log("Прилетел запрос в контроллер");
        if (request.getMethod().equals("DELETE")) {
            log("Запрос на очистку сохранений");
            request.getRequestDispatcher("/clear").forward(request, response);
        }

        HttpSession session = request.getSession();
        session.setAttribute("queryTime", new Date());

        String x = request.getParameter("x");
        String y = request.getParameter("y");
        String r = request.getParameter("r");

        if(x == null || y == null || r == null) {
            request.getRequestDispatcher("/index.jsp").forward(request, response);
        }
        else {
            request.getRequestDispatcher("/check").forward(request, response);
        }
    }
}
