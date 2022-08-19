// Operator Functions
const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const multiply = function(a, b) {
  return a * b;
};

const divide = function(a, b) {
    return a / b;
};

// Equals key function
const operate = function(operator, firstNum, secondNum) {
    if (operator == 'add') {
        return add(firstNum, secondNum);
    } else if (operator == 'subtract') {
        return subtract(firstNum, secondNum);
    } else if (operator == 'multiply') {
        return multiply(firstNum, secondNum);
    } else if (operator == 'divide') {
        return divide(firstNum, secondNum);
    }
};

const numbers = document.querySelectorAll('.button1');
console.log(numbers);
numbers.forEach((button) => {
    button.addEventListener('click' , (event) => {
        let operand1 = event.target.innerHTML;
        console.log(operand1);

        //Number appears in display
        const display = document.createElement('div');
        display.classList.add('display');
        display.textContent = `${operand1}`;

        let c2 = document.getElementById('container2');
        c2.appendChild(display);
    });
});
