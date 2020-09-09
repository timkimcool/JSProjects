/*
    TO DO:
        Rounding numbers / too many numbers (make it a text box?)
        Close square root parenthesis
        Refractor code
        Update +/- without class numbers
        Backspace
        Get rid of 1/x
*/
let subDis = document.querySelector('.subDis');
let mainDis = document.querySelector('.mainDis');
let op, num1, num2, done;
let lastEvent; // number or function;
let radMode = true;  // false = degree mode;
let pClosed = 0;  // # of close parenthesis to display
let closeP = document.createElement('span')
closeP.style.color = 'gray';
let Inv = false;
let value = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ')'] 
let variable = ['e', 'π', 's'] // s from Ans

document.querySelectorAll('.numbers').forEach(number => {
    number.addEventListener('click', e => {
        if (done) {subDis.textContent = "";}
        numbers(number.id);
    })
});

document.querySelector('.clear').addEventListener('click', e => {
    backspace();
});

document.querySelectorAll('.functions').forEach(operator => {
    operator.addEventListener('click', e => {
        pClosed++;
        op = operator.id;
        if (termIsValue(getLastGroup())) {
            display(' ' + op + '(');
        } else {
            display(op + '(');
        }
    })
});

document.querySelectorAll('.var').forEach(variable => {
    variable.addEventListener('click', e => {
        // TO DO

    })
});

document.querySelector('.decimal').addEventListener('click', e => {
    decimal();
});

document.querySelector('.equals').addEventListener('click', e => {
    //reset values; evaluate()
    if (op == undefined || num1 == undefined || mainDis.textContent == "" || done == true) {
        return;
    }
    let number = operator(op, parseInt(num1), parseInt(mainDis.textContent));
    subDis.textContent += '=' + number;
    mainDis.textContent = number;
    op = undefined;
    num1 = undefined;
    done = true;
    num2 = number;
});

// Calcultor functions
function numbers(num) {
    // stop entering 0 on blank screen
    if (num === '0' && mainDis.textContent === "0") { return; }

    // stop multiple zeroes after function
    if ((mainDis.textContent[mainDis.textContent.length - 2] == '(' || 
    mainDis.textContent[mainDis.textContent.length - 2] == ')')) { 
        if (getLastChar() === '0') {
            replaceLastChar(num);
        } else if (num !== '0') {
            display(num);
        }
        return;
    }

    // replace 0 if it's first character of number
    if (getLastGroup()[0] === '0') { 
        replaceLastChar(num);
        return;
    }

    mainDis.textContent += num;
}
function backspace() {
    if (getLastChar() == " ") {
        display(mainDis.textContent.substring(0,mainDis.textContent.length - 3), true);
        return;
    }
    if (typeof parseInt(getLastChar()) == 'number') {
        display(mainDis.textContent.substring(0,mainDis.textContent.length - 1), true);
        return;
    }
}

function clear() {
// clear entry -> clear
    pClosed = 0;
    display("", true);
}

function percent() {
    if (typeof parseInt(getLastChar()) == 'number') {
        display("%");
        return;
    }
}

function equals() {

}

function exponent() {
    display("^(");
    pClosed++;
}

function decimal() {
    if (getLastGroup().includes('.')) {
        return;
    }
    if (getLastChar() == ' ') {
        display('0.');
        return;
    }
    display('.');
}

function operate() {

}

function operator(op, num1, num2) {
    switch(op) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "/": 
            return num1 / num2;
        case "*": 
            return num1 * num2;
        case "^":
            return num1**num2;
        case "1/x":
            return 1 / num1;
        case "+/-":
            return -1 * num1;
    }
}


// helper function
function getLastGroup() {
    let array = mainDis.textContent.split(" ");
    return array[array.length - 1];
}

function getLastChar() {
    let cloneDis = mainDis.cloneNode(true);
    if (cloneDis.hasChildNodes()) {
        cloneDis.removeChild(cloneDis.lastChild);
    }
    return cloneDis.textContent[cloneDis.textContent.length-1];
}

function termIsValue() {
    if (getLastChar() in value || getLastChar() in variable) {
        return true;
    }
    return false;
}

function replaceLastChar(str) {
    mainDis.textContent = mainDis.textContent.substring(0,mainDis.textContent.length - 1) + str;
}



function display(str, reset=false) {
    if (pClosed > 0) {
        if (mainDis.hasChildNodes()) {
            mainDis.removeChild(mainDis.lastChild);
        }
    }
    updateMainDis(str, reset);
    if (pClosed > 0) {
        closeP.textContent = "";
        for (let i = 0; i < pClosed; i++) {
            closeP.textContent += ")"
        }
        mainDis.appendChild(closeP);
    }
}

function updateMainDis(str, reset) {
    if (reset) {
        mainDis.textContent = str;
    } else {
        mainDis.textContent += str;
    }
}

// KEYDOWN
window.addEventListener('keydown', keydown);

function keydown(e) {
    if (document.getElementById(e.key)) {
        subDis.textContent += document.getElementById(e.key).textContent
        mainDis.textContent += document.getEmainDislementById(e.key).textContent
    }
};