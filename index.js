function add(array){
    return  array.reduce((prev, current) => {
        return prev + current
    })
}


function subtract(array){
    return  array.reduce((prev, current) => {
        return prev - current
    })
}

function multiply(array){
    return  array.reduce((prev, current) => {
        return prev * current
    })
}

function divide(array){
    return  array.reduce((prev, current) => {
        if(current === 0){
            return "ERROR"
        } else {
            return (prev / current)
        }
        
    })
}

function power(array){
    return  array.reduce((prev, current) => {
        return Math.pow(prev,current)
    })
}

function squareroot(array){
   return Math.sqrt(array)
    
}

function operator(operator, array){
    switch(operator){
        case "+":
            return add(array);
            break;
        case "-":
            return subtract(array);
            break;
        case "x":
            return multiply(array);
            break;
        case "/":
            return divide(array);
            break;
        case "^":
            return  power(array);
            break;
        case "√":
            return squareroot(array);
            break;
        case "!":
        if(array === 0) {
            return 1;
          } else {
            let answer = 1;
            for (let i = array; i > 0; i--){
              answer *= i;
            }
            return answer;
          }
        break;
    }
}

let displayEl = document.getElementById("display")
let answerEl = document.getElementById("answer")
let previousOperator = ""
let numbers = []
let operators = []
let value1 = ""
let value2 =""
let answer = ""
let operatorClicked = true
let operatorValue =""
let uniqueOperatorOn = true


// store numbers using button inputs

function addOperator(sign){
    operators.push(sign)  
}

document.querySelectorAll(".number").forEach(item => {
    item.addEventListener("click", event => {
        if(displayEl.innerHTML !== "ERROR"){
            if(operatorClicked === true && operatorValue){
                addOperator(operatorValue)
                operatorClicked = false;
            }
            value1 += event.target.innerHTML
            answerEl.innerHTML = value1
        }

    
    })
})


function storeUserNumber(){
    displayEl.innerHTML += value1
    value2 = value1
    numbers.push(Number(value2))
    value1 =""
}

function renderAnswer(){
    answer = operator(operators.shift(),numbers)
    if(answer === "ERROR"){
        clear()
        displayEl.innerHTML = "ERROR"
    } else {
        numbers = [answer]
        displayEl.innerHTML = answer
    }

}

// add functionality for all other operators

document.querySelectorAll(".operator").forEach(item => {
    item.addEventListener("click", event => {
        if(displayEl.innerHTML !== "ERROR"){
            uniqueOperatorOn = false;
            storeUserNumber()
            if(operatorClicked && operatorValue){
                operatorValue = event.target.innerHTML;
                displayEl.innerHTML = displayEl.innerHTML.slice(0,-1)
                displayEl.innerHTML += operatorValue
            } else if(operatorClicked) {
                operatorValue = event.target.innerHTML;
                displayEl.innerHTML += operatorValue
            } else {
                renderAnswer()
                answerEl.innerHTML = ""
                operatorValue = event.target.innerHTML;
                displayEl.innerHTML += operatorValue
                operatorClicked = true;
            }    
        }
        
    })
})

// add functionalilty for equals button

document.querySelector("#equals-el").addEventListener("click", event => {
    if(numbers.length > 0){
        storeUserNumber()
        renderAnswer()
        answerEl.innerHTML = answer
        operatorClicked = true;
        operatorValue =""
        uniqueOperatorOn = true
    }
})

// add functionality for √ and ! operators
document.querySelectorAll(".unique-operator").forEach(item => {
    item.addEventListener('click', event => {
    if(displayEl.innerHTML !== "ERROR"){
        if(uniqueOperatorOn){
            if(numbers = []){
                numbers.push(Number(value1))
            }
            console.log(numbers)
            answer = operator(event.target.innerHTML,answerEl.innerHTML)
            answerEl.innerHTML = answer
            displayEl.innerHTML = `${answer}` 
            numbers = []
            value1 = answer
        }
    }
        
    })
})




// add functionality for negatve button
document.querySelector(".negative").addEventListener("click", () => {
    if(displayEl.innerHTML !== "ERROR"){
        answerEl.innerText = answerEl.innerHTML*(-1)
        value1 = answerEl.innerText
        console.log(value1)
    }
    
})

// add functionality for clear button

document.querySelector(".clear-btn").addEventListener('click', () => {
    clear()
})

// add functionality for delete button

document.querySelector(".delete-btn").addEventListener('click', () => {
    if(answerEl.innerHTML.length > 0){
        displayEl.innerHTML = displayEl.innerHTML.slice(0,-1)
        answerEl.innerHTML = answerEl.innerHTML.slice(0,-1)
        value1 = answerEl.innerHTML
    }

})

function clear(){
    numbers = []
    operators = []
    value1 = ""
    answer = ""
    displayEl.innerHTML =""
    answerEl.innerHTML=""
    operatorClicked = true
}


