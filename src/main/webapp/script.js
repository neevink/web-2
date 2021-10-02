const ADDRESS_URL = 'http://localhost:8081/lab2-1.0-SNAPSHOT/controller';
const minX = -3, maxX = 3;
const minY = -5, maxY = 3;
const minR = 1, maxR = 5;
let x, y, r;

function isNumeric(val) {
    return !isNaN(parseFloat(val)) && isFinite(val);
}

function isInt(val){
    return /^-?[0-9]{1,10}$/.test(val);
}

function isFloat(val){
    return /^-?[0-9]{0,6}(.|,)[0-9]{0,5}$/.test(val);
}

function validateX() {
    let xField = $('#x');
    let xNum = xField.val().replace(',', '.');
    if (isNumeric(xNum) && isFloat(xNum) && minX <= xNum && xNum <= maxX) {
        x = xNum;
        return true;
    }
    return false;
}

function validateY(yNum) {
    if (isNumeric(yNum) && isInt(yNum) && minY <= yNum && yNum <= maxY) {
        y = yNum;
        return true;
    }
    return false;
}

function validateR() {
    let rNum = $('#r').val();
    if (isNumeric(rNum) && isInt(rNum) && minR <= rNum && rNum <= maxR) {
        r = rNum;
        return true;
    }
    return false;
}

function validateForm(){
    let yNum = $('#y').val();
    msg = '';

    if(!validateX()){
        msg += 'В поле X должно быть число от -3 до 3 с не более чем пятью знаками после запятой\n';
    }
    else{

    }

    if(!validateY(yNum)){
        msg += 'Должно быть выбрано значение поля Y\n';
    }
    else{
        y = yNum;
    }

    if(!validateR()){
        msg += 'Должно быть выбрано значение поля R\n';
    }
    else{

    }

    if(msg !== ''){
        alert(msg);
        return false;
    }
    else{
        // alert('x = ' + x + ', y = ' + y + ',r = ' + r);
        return true;
    }
}

document.getElementById("main-area").onmousedown = function submit(event) {
    const areaSize = 300, radius = 110;
    const selectedRadius = parseFloat($('#r').val());

    let rowX = ((event.offsetX - areaSize/2) / radius * selectedRadius).toFixed(5);
    let rowY = Math.round((areaSize/2 - event.offsetY) / radius * selectedRadius);

    if(rowY < minY){
        rowY = minY;
    }
    else if(rowY > maxY){
        rowY = maxY;
    }

    alert(`${rowX} ${rowY}`);

    $('#x').val(rowX);
    $('#y').val(rowY);

    if(validateForm()){
        let request = $.ajax({
                type: "GET",
                url: "controller",
                data: {
                    "x": x,
                    "y": y,
                    "r": r
                }
            })
            .done((data) => {
                color = data.hit ? "#32CD32" : "#DC143C";

                constantRadius = 110;
                xVal = 150 + data.x / data.r * constantRadius;
                yVal = 150 - data.y / data.r * constantRadius;

                let svgns = "http://www.w3.org/2000/svg";

                let newPoint= document.createElementNS(svgns, 'circle');
                newPoint.setAttributeNS(null, 'cx', xVal);
                newPoint.setAttributeNS(null, 'cy', yVal);
                newPoint.setAttributeNS(null, 'r','4');
                newPoint.setAttributeNS(null, 'fill', color);

                var element = document.getElementById("main-area");

                element.appendChild(newPoint);
            })
            .fail(() => {
                alert( "error" );
            })
            .always(() => {
                alert( "complete" );
            });
    }
}