function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b === 0) {
        return "NOPE!"
    }
    return a / b;
}

function operate(a, b, operator) {
   let result = operator === '+' ? add(a, b)
             :  operator === '-' ? subtract(a, b)
             :  operator === '*' ? multiply(a, b)
             :  operator === '/' ? divide(a, b)
             : 'error';

    return result;
}

const numberKeys = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const display = document.querySelectorAll('#display');

numberKeys.forEach(key => key.addEventListener('click', getInputDigit));

operators.forEach(operator => operator.addEventListener('click', onOperator));
equals.addEventListener('click', onEquals);

let a = null;
let b = null;
let inputNumber = [];


//functions for converting user input to numbers that can be processed by the operate and mathmatical functions. 
function getInputDigit(e) {
    inputNumber.push(e.currentTarget.textContent);
}

function getInputNumber(variable) {
    let numberString = inputNumber.toString();
    numberString = removeCommas(numberString);
    variable = parseInt(numberString);
    inputNumber = [];
    return variable;
}

function removeCommas(string) {
    newString = string.replace(/,/g, '');
    return newString;
}

function assignValueToVariables() {
    if(a === null) {
        a = getInputNumber(a);
    } else if(b === null) {
        b = getInputNumber(b);
    }
}

function onOperator(e) {
    let operator = e.currentTarget.textContent;
    if(operator === '-' && inputNumber.length === 0) {
        inputNumber.push(operator);
        return;
    } 

    assignValueToVariables();
}


function onEquals() {
    assignValueToVariables();
    let result = operate(a, b, '+');
    console.log(result);
}