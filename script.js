const display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';
let result = '';

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.value;

        if (value === 'C') {
            // Clear the display
            currentInput = '';
            firstOperand = '';
            secondOperand = '';
            operator = '';
            display.value = '';
        } else if (value === '=') {
            // Evaluate the expression
            secondOperand = currentInput;
            if (firstOperand && operator && secondOperand) {
                result = calculate(firstOperand, operator, secondOperand);
                display.value = result;
                firstOperand = result;
                currentInput = '';
                operator = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            // Set the operator
            if (firstOperand) {
                operator = value;
                currentInput = '';
            } else {
                firstOperand = currentInput;
                operator = value;
                currentInput = '';
            }
        } else {
            // Append number or decimal point to the display
            currentInput += value;
            display.value = currentInput;
        }
    });
});

function calculate(firstOperand, operator, secondOperand) {
    firstOperand = parseFloat(firstOperand);
    secondOperand = parseFloat(secondOperand);

    switch (operator) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            if (secondOperand !== 0) {
                return firstOperand / secondOperand;
            } else {
                return 'Error';
            }
        default:
            return '';
    }
}
