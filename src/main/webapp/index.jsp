<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="ru">
    <head>
        <title>Неевин Кирилл</title>
        <meta charset="utf-8">
        <meta name="author" content="Kirill Neevin">
        <title>Неевин Кирилл</title>
        <link rel="icon" href="<%=request.getContextPath()%>/img/icon.ico">
        <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/style.css">
    </head>
    <body>
    <header id="header">
        Неевин Кирилл P3213, вариант: 521683
    </header>

    <form id="main-form" action="#" method="get" onsubmit="return validateForm()">
        <img id="corgi" src="<%=request.getContextPath()%>/img/corgi.jpg" alt="*тут картинка с корги*">
        <table id="main-table">
            <tr>
                <th>Переменная</th>
                <th>Значение</th>
            </tr>
            <tr>
                <td>
                    <label for="x">X [-3, 3]</label>
                </td>
                <td>
                    <input type="text" name="x" id="x" required>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="y">Y [-5, 3]</label>
                </td>
                <td>
                    <select name="y" id="y" required>
                        <%
                            for(int y = -5; y <= 3; y++){
                                out.println(String.format("<option value=\"%d\">%d</option>", y, y));
                            }
                        %>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="r">R [1, 5]</label>
                </td>
                <td>
                    <select name="r" id="r" required>
                        <%
                            for(int r = 1; r <= 5; r++){
                                out.println(String.format("<option value=\"%d\">%d</option>", r, r));
                            }
                        %>
                    </select>
                </td>
            </tr>
        </table>
        <div class="input-pannel">
            <input type="reset" value="Сбросить">
            <input type="submit" value="отправить">
        </div>
    </form>

    <!-- Лень качать, поэтому буду загружать из инета -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="<%=request.getContextPath()%>/script.js"></script>
    </body>
</html>