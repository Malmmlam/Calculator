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

const keys = document.querySelectorAll(".key");
const display = document.querySelectorAll("#display")
let a = null;
let b = null;

keys.forEach(key => key.addEventListener('click', handleInput));

function handleInput(e) {
    if(a === null) {
        a = parseInt(e.currentTarget.textContent);
            console.log(a);
            handleInput(e);
    }
    else if(b === null) {
        b = parseInt(e.currentTarget.textContent);
        console.log(b);
        handleInput(e);
    }
    else {
        console.log(operate(a, b, '+'));
        display.textContent = operate(a, b, '+');
    }
}