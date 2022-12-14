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

// Equals function
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

// Stores numbers into variable "numString" and "numString2"
let c2;
const numbers = document.querySelectorAll('.button1');
numbers.forEach((button) => {
    button.addEventListener('click' , (event) => {
        if (x === 0) {
            numText = event.target.innerHTML;
            numString = numString.concat(numText);

            // Number appears in display
            const display = document.createElement('div');
            display.classList.add('display');
            display.textContent = `${numText}`;

            c2 = document.getElementById('container2');
            c2.appendChild(display);
        } else {
            if (numString2 == '') {
                while (c2.firstChild) {
                    c2.removeChild(c2.firstChild);
                };
            };

            numText = event.target.innerHTML;

            numString2 = numString2.concat(numText);

            const display = document.createElement('div');
            display.classList.add('display');
            display.textContent = `${numText}`;

            c2 = document.getElementById('container2');
            c2.appendChild(display);

            oper.forEach((button) => {
                button.style.setProperty('background-color', 'rgb(250, 179, 92)');
            });
        };
    });
});

const numberZero = document.querySelector('#button3');
numberZero.addEventListener('click' , (event) => {
    if (x === 0) {
        numText = event.target.innerHTML;
        numString = numString.concat(numText);

        // Number appears in display
        const display = document.createElement('div');
        display.classList.add('display');
        display.textContent = `${numText}`;

        c2 = document.getElementById('container2');
        c2.appendChild(display);
    } else {
        if (numString2 == '') {
            while (c2.firstChild) {
                c2.removeChild(c2.firstChild);
            };
        };

        numText = event.target.innerHTML;
        numString2 = numString2.concat(numText);

        const display = document.createElement('div');
        display.classList.add('display');
        display.textContent = `${numText}`;

        c2 = document.getElementById('container2');
        c2.appendChild(display);

        oper.forEach((button) => {
            button.style.setProperty('background-color', 'rgb(250, 179, 92)');
        });
    };
});

const decimal = document.querySelector('#button4');
decimal.addEventListener('click', (event) => {
    if (x === 0) {
        numText = event.target.innerHTML;
        numString = numString.concat(numText);

        decimal.disabled = true;

        // Number appears in display
        const display = document.createElement('div');
        display.classList.add('display');
        display.textContent = `${numText}`;

        c2 = document.getElementById('container2');
        c2.appendChild(display);
    } else {
        if (numString2 == '') {
            while (c2.firstChild) {
                c2.removeChild(c2.firstChild);
            };
        };

        numText = event.target.innerHTML;
        numString2 = numString2.concat(numText);

        decimal.disabled = true;

        const display = document.createElement('div');
        display.classList.add('display');
        display.textContent = `${numText}`;

        c2 = document.getElementById('container2');
        c2.appendChild(display);
    };
});

// Stores operator type into a variable "equation"
let equation = '';
let x = 0;
let z = 0;
let sign;
const oper = document.querySelectorAll('.button2');
oper.forEach((button) => {
    button.addEventListener('click', (event) => {
        sign = event.target.innerHTML;

        button.style.setProperty('background-color', 'rgb(237, 217, 187)');

        if (decimal.disabled === true) {
            decimal.disabled = false;
        };
        
        // If user strings several operations
        if (x > 0 && numString2 != '') {
            operand1 = parseFloat(numString);
            operand2 = parseFloat(numString2);

            if (operand2 === 0 && equation === 'divide') {
                while (c2.firstChild) {
                    c2.removeChild(c2.firstChild);
                };
        
                const display = document.createElement('div');
                display.classList.add('display');
                display.textContent = 'ERROR: Cannot divide by 0!';
                c2 = document.getElementById('container2');
                c2.appendChild(display);
            } else {
            solution = operate(equation, operand1, operand2);

            numString = solution;
            operand2 = undefined;
            numString2 = '';

            z++;
            };
        };
        
        if (sign == '+') {
            equation = 'add';
        } else if (sign == '-') {
            equation = 'subtract';
        } else if (sign == "\u00d7") {
            equation = 'multiply';
        } else if (sign == "\u00f7") {
            equation = 'divide';
        };

        // If there's been a previous solution, this makes that solution the first operand
        if (y > 0) {
            numString = solution;
            operand2 = undefined;
            numString2 = '';    
        };



        x++;
    });
});

// Evaluates the equation and displays result
const equals = document.querySelector('#button5');
let solution;
let y = 0;
equals.addEventListener('click', () => {
    operand1 = parseFloat(numString);
    operand2 = parseFloat(numString2);

    if (decimal.disabled === true) {
        decimal.disabled = false;
    };

    if (numString === '' || numString2 === '') {
        void(0);
    } else if (operand2 === 0 && equation === 'divide') {
        while (c2.firstChild) {
            c2.removeChild(c2.firstChild);
        };

        const display = document.createElement('div');
        display.classList.add('display');
        display.textContent = 'ERROR: Cannot divide by 0!';
        c2 = document.getElementById('container2');
        c2.appendChild(display);
    } else {
        while (c2.firstChild) {
            c2.removeChild(c2.firstChild);
        };

        const display = document.createElement('div');
        display.classList.add('display');
        solution = operate(equation, operand1, operand2);
        if (solution > 0 || solution < 0) {
            solution = solution.toFixed(3).replace(/\.?0+$/, "");
        }
        display.textContent = solution;

        c2 = document.getElementById('container2');
        c2.appendChild(display);

        y++;
    };
});

// Makes the Clear button refresh
const clear = document.querySelector('#button6');
clear.addEventListener('click', () => {
    if (numString != '') {
        while (c2.firstChild) {
            c2.removeChild(c2.firstChild);
        };
    };

    decimal.disabled = false;
    
    operand1 = undefined;
    numString = '';
    operand2 = undefined;
    numString2 = '';
    x = 0;
    y = 0;
    z = 0;

    oper.forEach((button) => {
        button.style.setProperty('background-color', 'rgb(250, 179, 92)');
    });
});

// Backspace button deletes
const back = document.querySelector('#button7');
back.addEventListener('click', () => {
    if (x > 0 || y > 0) {
        void(0);
    } else {
        c2.removeChild(c2.lastChild);
    
        if (numString.charAt(numString.length - 1) === '.' || numString2.charAt(numString2.length - 1) === '.') {
            decimal.disabled = false;
        };
    
        if (x === 0) {
            numString = numString.substring(0 , (numString.length - 1));
        } else {
            numString2 = numString2.substring(0 , (numString2.length - 1));
        };
    };
});
