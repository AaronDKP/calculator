let input1 = '';
let input2 = '';
let operator = '';


const totalInput = function() {
    const numbers = document.getElementsByClassName('number');
    const operators = document.getElementsByClassName('operator');

    for (const num of numbers) {
        num.addEventListener('click', () => {
            operator !== '' ? input2 += num.textContent : input1 += num.textContent;
            console.log(input1 + '' + operator + '' + input2);
        });
    }

    for (const op of operators) {
        op.addEventListener('click', () => {
            operator = op.textContent;
        });
    }

}


console.log(totalInput());
 

const operate = function(input1, operator, input2) {
    switch(operator){
        case '+': add(input1, input2);
            break;
        case '-': subtract(input1, input2);
            break;
        case '*': multiply(input1, input2);
            break;
        case '/': divide(input1, input2);
    }
}

const add = function(input1, input2) {
	return (input1 += input2)
};

const subtract = function(input1, input2) {
	return (input1 -= input2)
};

const multiply = function(input1, input2) {
    return (input1 *= input2);
  };

const divide = function(input1, input2) {
    return (input1 /= input2);
}

