let firstNumber = null;
let secondNumber = null;
let operator = null;
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons');
const clear = document.querySelector('.clearButton');



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

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        display.textContent += button.value;
        if(button.id === 'num' && button.id !=='op' && button.id !== 'equal') {
            firstNumber = Number(display.textContent);
        }
        if(button.id === 'op') {
            operator = button.value;
        }
        if(firstNumber !== null && button.id !== 'op' && button.id !== 'equal') {
            secondNumber = button.value;
        }
    });
});



clear.addEventListener('click', (e) => {
    display.textContent = ' ';
    firstNumber = null;
    secondNumber = null;
    operator = null;
})

