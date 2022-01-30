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
const display = document.querySelector('#display');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');

displayKeys.forEach(key => key.addEventListener('click', updateDisplay));
clear.addEventListener('click', clearDisplay);


function updateDisplay(key) {
    console.log(key.currentTarget.textContent);
    display.textContent += key.currentTarget.textContent;
}

function clearDisplay() {
    display.textContent = "";
}



