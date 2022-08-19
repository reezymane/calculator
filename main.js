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

let operand1 = undefined;
let operand2 = undefined;

let numString = '';
let numString2 = '';

//Stores numbers into variable "numString" and "numString2"
let c2;
const numbers = document.querySelectorAll('.button1');
numbers.forEach((button) => {
    button.addEventListener('click' , (event) => {
        if (x === 0) {
            numText = event.target.innerHTML;
            numString = numString.concat(numText);

            //Number appears in display
            const display = document.createElement('div');
            display.classList.add('display');
            display.textContent = `${numText}`;

            c2 = document.getElementById('container2');
            c2.appendChild(display);
        } else {
            while (c2.firstChild) {
                c2.removeChild(c2.firstChild);
            };
            
            numText = event.target.innerHTML;
            numString2 = numString2.concat(numText);

            //Number appears in display
            const display = document.createElement('div');
            display.classList.add('display');
            display.textContent = `${numText}`;

            c2 = document.getElementById('container2');
            c2.appendChild(display);
        };
    });
});

//Stores operator type into a variable "equation"
let equation = '';
let x = 0;
const oper = document.querySelectorAll('.button2');
oper.forEach((button) => {
    button.addEventListener('click', (event) => {
        let sign = event.target.innerHTML;
        
        if (sign == '+') {
            equation = 'add';
        } else if (sign == '-') {
            equation = 'subtract';
        } else if (sign == "\u00d7") {
            equation = 'multiply';
        } else if (sign == "\u00f7") {
            equation = 'divide';
        };

        //If there's been a previous solution, this makes that solution the first operand
        if (y > 0) {
            numString = solution;
            operand2 = undefined;
            numString2 = '';    
        };

        x++;
    });
});

//Evaluates the equation and displays result
const equals = document.querySelector('#button5');
let solution;
let y = 0;
equals.addEventListener('click', () => {
    operand1 = parseFloat(numString);
    operand2 = parseFloat(numString2);

    if (numString === '' || numString2 === '') {
        void(0);
    } else {
        while (c2.firstChild) {
            c2.removeChild(c2.firstChild);
        };

        const display = document.createElement('div');
        display.classList.add('display');
        solution = operate(equation, operand1, operand2);
        display.textContent = solution;

        c2 = document.getElementById('container2');
        c2.appendChild(display);

        y++;
    };
});
