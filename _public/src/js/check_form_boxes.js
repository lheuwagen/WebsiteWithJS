function check_vorname() {
    let $element = document.getElementById('input_vorname');
    let $value = $element.value;
    if (checkEmpty($value)) {
        $element.focus();
        return false;
    }

    for (let i = 0; i < $value.length; i++) {
        if (!checkForLetter($value.charAt(i))) {
            setFocus($element);
            return false;
        }
    }

    return true;
}

function check_plz() {
    let $element = document.getElementById('input_plz');
    let $value = $element.value;
    if (checkEmpty($value)) {
        $element.focus();
        return false;
    }
    for (let i = 0; i < $value.length; i++) {
        if (!checkForNumber($value.charAt(i))) {
            setFocus($element);
            return false;
        }
    }
    return true;
}

function check_mail() {
    let $element = document.getElementById('input_mail');
    let $value = $element.value;
    if (checkEmpty($value)) {
        setFocus($element);
        return false;
    }
    for (let i = 0; i < $value.length; i++) {

    }
    return true;
}

function check_submit(){
    if(check_vorname() && check_plz() && check_mail()){
        return true;
    }
    alert("Es sind nicht alle eingaben getaetigt!");
    return false;
}

function checkEmpty($value) {
    if ($value.length < 1) {
        alert("Dieses Feld darf nicht lehr sein!")
        return true;
    }
    return false;
}

function setFocus($element){
    $element.focus();
}

function checkForLetter(pParam) {
    let letters = /^[A-Za-z]+$/;
    if (!pParam.match(letters)) {
        alert("Bitte nur gueltige Namen eingeben!")
        return false
    }
    return true;
}

function checkForNumber(pParam) {
    let numbers = /^[0-9]+$/;
    if (!pParam.match(numbers)) {
        alert("Bitte nur gueltige PLZ eingeben!")
        return false
    }
    return true;
}