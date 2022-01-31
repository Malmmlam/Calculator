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

function operate(num1, num2, operator) {
    return operator === '+' ? add([num1, num2])
        :  operator === '-' ? subtract([num1, num2])
        :  operator === '*' ? multiply([num1, num2])
        :  operator === '/' ? divide([num1, num2])
        : 'error';
}

console.log(operate(10, 2, '/'));

// const key = document.querySelector('.clear');
// key.addEventListener('click', myFunction);

function myFunction() {
    display.textContent = key.textContent;
}

const displayKeys = document.querySelectorAll('.display-key');
const userEntry = document.querySelector('#user-entry');
const answer = document.querySelector('#answer');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');

displayKeys.forEach(key => key.addEventListener('click', updateDisplay));
clear.addEventListener('click', clearDisplay);

equals.addEventListener('click', calculate);


function updateDisplay(key) {
        console.log(key.currentTarget.textContent);
        userEntry.textContent += key.currentTarget.textContent;
}

function clearDisplay() {
    userEntry.textContent = "";
    answer.textContent = "";
}

function calculate() {
    if(userEntry === undefined) {return}
    let userInput = userEntry.textContent.split(' ');
    let divPos = userInput.indexOf('/');
    let multPos = userInput.indexOf('*');
    console.log(divPos);
    console.log(multPos);
    if(divPos !== -1) {
        console.log(divPos);
    }
    if(multPos !== -1) {
        console.log(multPos);
    }
    answer.textContent = operate(userInput[0], userInput[2], userInput[1]);
}

