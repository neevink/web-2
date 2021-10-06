const minX = -3, maxX = 3;
const minY = -5, maxY = 3;
const minR = 1, maxR = 5;
var x = 0, y = 0, r = 0;

function isNumeric(val) {
    return !isNaN(parseFloat(val)) && isFinite(val);
}

function isInt(val){
    return /^-?[0-9]{1,10}$/.test(val);
}

function isFloat(val){
    return /^-?[0-9]{0,6}(.|,)[0-9]{0,5}$/.test(val);
}

function validateX(xNum) {
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

function validateR(rNum) {
    return !!(isNumeric(rNum) && isInt(rNum) && minR <= rNum && rNum <= maxR);

}

function validateForm(){
    let yNum = $('#y').val();
    let xNum = $('#x').val().replace(',', '.');
    let rNum = $('#r').val();
    msg = '';

    if(!validateX(xNum)){
        msg += 'В поле X должно быть число от -3 до 3 с не более чем пятью знаками после запятой\n';
    }
    if(!validateY(yNum)){
        msg += 'Должно быть выбрано значение поля Y\n';
    }
    if(!validateR(rNum)){
        msg += 'Должно быть выбрано значение поля R\n';
    }

    if(msg !== ''){
        alert(msg);
        return false;
    }
    else{
        y = yNum;
        x = xNum;
        r = rNum;
        //alert('x = ' + x + ', y = ' + y + ',r = ' + r);
        return true;
    }
}

function handleSendButtonClick(event){
    if(validateForm()){
        addNewPoint(x, y, r);
    }
}

document.getElementById("main-area").onmousedown = function(event){
    /* При нажатии по области мы не будем валидировать выбнаны ли какие-то поля, кроме R */
    const areaSize = 300, radius = 110;
    const selectedRadius = parseFloat($('#r').val());

    if(!validateR(selectedRadius)){
        alert('Не выбрано значение R!');
    }

    let rowX = ((event.offsetX - areaSize/2) / radius * selectedRadius).toFixed(3);
    let rowY = ((areaSize/2 - event.offsetY) / radius * selectedRadius).toFixed(3);

    //alert(`${rowX} ${rowY}`);
    addNewPoint(rowX, rowY, selectedRadius);
}

function addNewPoint(x, y, r){
    let request = $.ajax({
        type: 'GET',
        url: 'controller',
        data: {
            'x': x,
            'y': y,
            'r': r
        }
        })
        .done((data) => {
            if(data.errorMessage === undefined){
                // Добавляем точку
                const color = data.hit ? "#32CD32" : "#DC143C";

                const constantRadius = 110;
                const xVal = 150 + data.x / data.r * constantRadius;
                const yVal = 150 - data.y / data.r * constantRadius;

                const svgns = 'http://www.w3.org/2000/svg';
                let newPoint = document.createElementNS(svgns, 'circle');
                newPoint.setAttributeNS(null, 'cx', xVal);
                newPoint.setAttributeNS(null, 'cy', yVal);
                newPoint.setAttributeNS(null, 'r','4');
                newPoint.setAttributeNS(null, 'fill', color);

                document.getElementById('main-area').appendChild(newPoint);

                // Добавляем строчку в таблицу
                let row = document.getElementById('results-table').insertRow(1);
                row.insertCell(0).innerHTML = `${data.hit ? '✅' : '❌'}`
                row.insertCell(0).innerHTML = `${data.r}`
                row.insertCell(0).innerHTML = `${data.y}`
                row.insertCell(0).innerHTML = `${data.x}`
            }
            else{
                alert(data.errorMessage);
            }
        })
        .fail(() => {
            alert('Не удалось подключиться к серверу!');
        });
}