let firstNumber = null;
let secondNumber = null;
let operator = null;
const display = document.querySelector('.display');
const buttons = document.querySelector('.button');
console.log(buttons);

buttons.addEventListener('click', (e => {
    display.textContent = 'hi'
    
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


