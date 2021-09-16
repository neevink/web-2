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
    let yField = $('#x');
    let yNum = yField.val().replace(',', '.');
    if (isNumeric(yNum) && isFloat(yNum) && minX <= yNum && yNum <= maxX) {
        y = yNum;
        return true;
    }
    return false;
}

function validateY() {
    let yField = $('#y');
    let yNum = yField.val().replace(',', '.');
    if (isNumeric(yNum) && isInt(yNum) && minY <= yNum && yNum <= maxY) {
        y = yNum;
        return true;
    }
    return false;
}

function validateR() {
    let rField = $('#r');
    let rNum = rField.val().replace(',', '.');
    if (isNumeric(rNum) && isInt(rNum) && minR <= rNum && rNum <= maxR) {
        r = rNum;
        return true;
    }
    return false;
}

function validateForm(){
    msg = '';
    if(!validateX()){
        msg += 'В поле Y должно быть число от -3 до 3 с не более чем пятью знаками после запятой\n';
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