function add(numArray) {
    return numArray.reduce((a, b) => a + b);
}

function subtract(numArray) {
    return numArray.reduce((a, b) => a - b);
}

function multiply(numArray) {
    return numArray.reduce((a, b) => a * b);
}

function divide(numArray) {
    return numArray.reduce((a, b) => a / b)
}

function operate(numbers, operator) {
    return operator === '+' ? add(numbers)
        :  operator === '-' ? subtract(numbers)
        :  operator === '*' ? multiply(numbers)
        :  operator === '/' ? divide(numbers)
        : 'error';
}

const displayKeys = document.querySelectorAll('.display-key');
const userEntry = document.querySelector('#user-entry');
const numberKeys = document.querySelectorAll('.number');
const operatorKeys = document.querySelectorAll('.operator');
const answer = document.querySelector('#answer');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');
let numberHolder = '';
let userNumbers = [];
let operators = [];

displayKeys.forEach(key => key.addEventListener('click', updateDisplay));
operatorKeys.forEach(operator => operator.addEventListener('click', operatorClick));
numberKeys.forEach(number => number.addEventListener('click', storeNumbers));
clear.addEventListener('click', clearDisplay);
equals.addEventListener('click', calculate);

function operatorClick(operator) {
    userNumbers.push(parseInt(numberHolder));
    numberHolder = "";
    operators.push(operator.currentTarget.textContent);
    if(userNumbers.length === 2) {
        calculate();
    }
}

function storeNumbers(number) {
    numberHolder += number.currentTarget.textContent;
    numberholder = numberHolder.split('').reverse().join('');
    console.log(numberHolder);
}

function updateDisplay(key) {
        userEntry.textContent += key.currentTarget.textContent;
}

function clearDisplay() {
    userEntry.textContent = "";
    answer.textContent = "";
    userNumbers = [];
    operators = [];
    numberHolder = '';
    userNumbers.forEach(number => console.log(number));
    operators.forEach(operator => console.log(operator));
}

function calculate() {
    if(userNumbers.length < 2) {
        userNumbers.push(parseInt(numberHolder));
        numberHolder = "";
    }
    answer.textContent = operate(userNumbers, operators[0]);
    userNumbers[1] = parseInt(answer.textContent);
    operators.shift();
    userNumbers.shift();
}

