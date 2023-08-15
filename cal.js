let currentNumber = null;
let previousNumber = null;
let storedNumber = null;
let operator = null;
const currentDisplay = document.querySelector('.currentDisplay');
const previousDisplay = document.querySelector('.previousDisplay');
const numbers = document.querySelectorAll('.numButtons');
const operators = document.querySelectorAll('.opButtons');
const equals = document.querySelector('.equalButton');
const clear = document.querySelector('.clearButton');

numbers.forEach((number) => number.addEventListener('click', (e) => {
    currentDisplay.textContent += number.value;
    currentNumber = Number(currentDisplay.textContent);
}));

operators.forEach((op) => op.addEventListener('click', (e) => {
    operator = op.value;
    previousNumber = currentNumber;
    currentNumber = null;
    currentDisplay.textContent = ' ';
    previousDisplay.textContent += previousNumber + ' ' + op.value;

    
}));

equals.addEventListener('click', (e) => {
    previousDisplay.textContent = previousNumber + ' ' + operator + ' ' + currentNumber;
    let result = calculate(operator, previousNumber, currentNumber);
    previousDisplay.textContent = '=' + ' ' + result;
    currentDisplay.textContent = '';
    storedNumber = result;
    operator = null;

});

operators.forEach((op) => op.addEventListener('click', (e) => {
    if(storedNumber != null) {
        operator = op.value;
        previousNumber = storedNumber;
        previousDisplay.textContent = previousNumber + ' ' + operator;
    }
}))


function add(a, b) {
    return a + b;
};

function subtract(a ,b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b === 0) {
        return 'NOPE'
    }else {
        return a / b;
    };
};

function calculate(operation, a, b) {
    switch(operation) {
        case '+':
            return add(a, b)
            break;
        case '-':
            return subtract(a, b)
            break;
        case '*':
            return multiply(a, b)
            break;
        case '/':
            return divide(a, b)
            break;
    };
};

clear.addEventListener('click', (e) => {
    currentDisplay.textContent = '';
    previousDisplay.textContent = ''
    currentNumber = null;
    previousNumber = null;
    storedNumber = null;
    operator = null;
})

