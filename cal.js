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

const cal = (function(){
    const add = (a,b) => a + b
    const subtract = (a,b) => a - b
    const multiply = (a,b) => a * b
    const divide = (a,b) => {
        if(b === 0){
            return 'Nope'
        }else{
            return a / b
        }//closes if else
    }//closes divide
    return {add, subtract, multiply, divide}
})()

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

function calculate(operation, a, b) {
    switch(operation) {
        case '+':
            return cal.add(a, b)
            break;
        case '-':
            return cal.subtract(a, b)
            break;
        case '*':
            return cal.multiply(a, b)
            break;
        case '/':
            return cal.divide(a, b)
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

