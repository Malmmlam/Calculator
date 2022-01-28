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