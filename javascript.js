//Funciones

const add = function(a, b){
    return a + b;
}

const substract = function(a, b){
    return a - b;
}

const multiply = function(a, b){
    return a * b;
}

const divide = function(a, b){
    return a / b;
}


const operate = function(num1, operator, num2){
    if(operator === "+"){
        return add(num1,num2);
    }
    else if(operator === "-"){
        return substract(num1,num2);
    }
    else if(operator === "x"){
        return multiply(num1,num2);
    }
    else if(operator === "÷"){
        return divide(num1,num2);
    }
}

//Operandos

let firstOperand = null;
let currentOperator = null;
let waitingSecondOperand = false;
let secondOperand = null;






//DOM

const displayElement = document.querySelector("#display");

const numberButtons = document.querySelectorAll(".number-button");

numberButtons.forEach(button =>{
button.addEventListener('click', function(event){
    const clickedValue = event.target.textContent;
    
    if(waitingSecondOperand || displayElement.textContent === "0"){
        displayElement.textContent = clickedValue;
        waitingSecondOperand = false;
    }
    else{
        displayElement.textContent += clickedValue;
    }
    
});
});



const operatorButtons = document.querySelectorAll(".operator-button");

operatorButtons.forEach(button =>{
    button.addEventListener('click', function(event){
        const operator = event.target.textContent;
        const inputValue = parseFloat(displayElement.textContent);

        if(firstOperand === null){  //(si no hay ningun numero guardado)
            firstOperand = inputValue; //firstOperand pasa a ser lo que hay en el display
            currentOperator = operator;
            waitingSecondOperand = true;
            displayElement.textContent = "0";
        }
        else{ //por si hemos pulsado otro operador, esto reinicia el primer operando
            firstOperand = inputValue;
            currentOperator = operator;
            waitingSecondOperand = true;
            displayElement.textContent = "0";
        }

        })
});


const equalButton = document.querySelector("#equal-button");

equalButton.addEventListener('click', function(event){
        const inputValue = parseFloat(displayElement.textContent);

        secondOperand = inputValue;
        let result = operate(firstOperand, currentOperator, secondOperand);
        displayElement.textContent = result;
        firstOperand = null;
        currentOperator = null;
        waitingSecondOperand = true;
}
)

const clearButton = document.querySelector("#clear-button");

clearButton.addEventListener('click', function(event){
    displayElement.textContent = "0";
    firstOperand = null;
    currentOperator = null;
    waitingSecondOperand = false;
})


