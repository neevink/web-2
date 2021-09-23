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

function validateY() {
    let yNum = $('#y').val();
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
    msg = '';
    if(!validateX()){
        msg += 'В поле X должно быть число от -3 до 3 с не более чем пятью знаками после запятой\n';
    }
    if(!validateY()){
        msg += 'Должно быть выбрано значение поля Y\n';
    }
    if(!validateR()){
        msg += 'Должно быть выбрано значение поля R\n';
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

    $('#x').val(rowX);
    $('#y').val(rowY);

    // alert(`${rowX} ${rowY}`);

    if(validateForm()){
        window.location.href = ADDRESS_URL + `?x=${x}&y=${y}&r=${r}`;
    }
}