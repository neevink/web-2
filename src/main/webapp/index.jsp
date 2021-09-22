<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="ru">
    <head>
        <title>Неевин Кирилл</title>
        <meta charset="utf-8">
        <meta name="author" content="Kirill Neevin">
        <title>Неевин Кирилл</title>
        <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/style.css">
    </head>
    <body>
    <header id="header">
        Неевин Кирилл P3213, вариант: 521683
    </header>

    <div class="area-wrapper">
        <svg class="area">
            <!-- 1 четверть -->
            <polygon fill="#3398fd" fill-opacity="1" points="150,40 260,40 260,150 150,150"></polygon>
            <!-- 3 четверть -->
            <polygon fill="#3398fd" fill-opacity="1" points="150,150 95,150 150,205"></polygon>
            <!-- 4 четверть -->
            <g transform="translate(150,150) rotate(180 0 0)">
                <path d="M0 0 -55 0 A 55 55 0 0 1 0 -55" fill="#3398fd"/>
            </g>

            <!-- Координатные оси -->
            <line stroke="black" x1="0" x2="300" y1="150" y2="150"></line>
            <line stroke="black" x1="150" x2="150" y1="0" y2="300"></line>

            <!-- Стрелки -->
            <polygon fill="black" points="150,1 145,7 155,7" stroke="black"></polygon>
            <polygon fill="black" points="299,150 293,145 293,155" stroke="black"></polygon>

            <!-- Засечки и подписи -->
            <text x="160" y="210">-R/2</text>
            <line x1="148" x2="152" y1="205" y2="205" stroke="black"></line>

            <text x="160" y="265">-R</text>
            <line x1="148" x2="152" y1="260" y2="260" stroke="black"></line>

            <text x="255" y="143">R</text>
            <line x1="260" x2="260" y1="148" y2="152" stroke="black"></line>

            <text x="190" y="143">R/2</text>
            <line x1="205" x2="205" y1="148" y2="152" stroke="black"></line>

            <text x="75" y="143">-R/2</text>
            <line x1="95" x2="95" y1="148" y2="152" stroke="black"></line>

            <text x="30" y="143">-R</text>
            <line x1="40" x2="40" y1="148" y2="152" stroke="black"></line>

            <text x="160" y="45">R</text>
            <line x1="148" x2="152" y1="40" y2="40" stroke="black"></line>

            <text x="160" y="100">R/2</text>
            <line x1="148" x2="152" y1="95" y2="95" stroke="black"></line>
        </svg>
    </div>

    <form id="main-form" action="<%=request.getContextPath()%>/controller" method="get" onsubmit="return validateForm()">
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