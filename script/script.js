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
    return a / b;
}

function operate(a, b, operator) {
   let result = operator === '+' ? add(a, b)
             :  operator === '-' ? subtract(a, b)
             :  operator === '*' ? multiply(a, b)
             :  operator === '/' ? divide(a, b)
             : 'error';

    return Math.round(result * 100) / 100;
}

const numberKeys = document.querySelectorAll('.number');
const equals = document.querySelector('.equals');
const display = document.querySelectorAll('#display');
let a = 0;
let b = null;
let inputNumber = [];

equals.addEventListener('click', onEquals);
numberKeys.forEach(key => key.addEventListener('click', getInputNumber));


function getInputNumber(e) {
    inputNumber.push(e.currentTarget.textContent);
    console.log(inputNumber);
}

function onEquals(e) {
    let numberString = inputNumber.toString();
    numberString = removeCommas(numberString);
    console.log(numberString);
    a = parseInt(numberString);
    console.log(a);
}

function removeCommas(string) {
    newString = string.replace(/,/g, '');
    return newString;
}