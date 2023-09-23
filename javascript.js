let input1 = '';
let input2 = '';
let operator = '';

const numbers = document.getElementsByClassName('number');
const operators = document.getElementsByClassName('operator');
const calcDisplay = document.querySelector('#calcDisplay');

    for (const num of numbers) {
        num.addEventListener('click', () => {
            operator == '' ? input1 += num.textContent : input2 += num.textContent;
            calcDisplay.textContent = input1 + ' ' + operator + ' ' + input2;
        });
    }

    for (const op of operators) {
        op.addEventListener('click', () => {
            if (input2 !== '') {
                input1 = `${operate(input1, operator, input2)}`;
                input2 = '';
                operator = '';
            };
            console.log(input1);

            if (input1 !== '') {operator = op.textContent};
            calcDisplay.textContent = input1 + ' ' + operator + ' ' + input2;
        });
    }

const c = document.querySelector('#C');
    c.addEventListener('click', () => {
        input1 = '';
        input2 = '';
        operator = '';
        calcDisplay.textContent = input1 + ' ' + operator + ' ' + input2;
    });

const equals = document.querySelector('#equals');
    equals.addEventListener('click', () => {
        if (operator == '') {calcDisplay.textContent = 'error | missing operator'} 
        else if (input2 == '') {calcDisplay.textContent = 'error | missing argument'}
        else if (operator == '/' && input2 == '0') {calcDisplay.textContent = 'error | try an arts degree'}
        else {
            calcDisplay.textContent = `${operate(input1, operator, input2)}`;
            input1 = '';
            input2 = '';
            operator = '';
        }
    })



const operate = function(input1, operator, input2) {
    switch(operator){
        case '+': return add(input1, input2);
        case '-': return subtract(input1, input2);
        case '*': return multiply(input1, input2);
        case '/': return divide(input1, input2);
    }
}

const add = function(input1, input2) {
	return parseFloat(input1) + parseFloat(input2);
};

const subtract = function(input1, input2) {
	return input1 -= input2;
};

const multiply = function(input1, input2) {
    return input1 *= input2;
  };

const divide = function(input1, input2) {
    return input1 /= input2;
}

