let firstNumber = null;
let secondNumber = null;
let operator = null;
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons');
const clear = document.querySelector('.clearButton');



buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        display.textContent += button.value;
        firstNumber = Number(display.textContent);
        
    });
});

clear.addEventListener('click', (e) => {
    display.textContent = ' ';
    firstNumber = null;
})


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


