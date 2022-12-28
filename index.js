import {operator} from "./mathFunctions.js";

let displayEl = document.getElementById("display")
let answerEl = document.getElementById("answer")
let messageEl = document.getElementById("message-el")
let storedValues = []
let storedOperators = []
let value1 = ""
let value2 =""
let answer = ""
let operatorClicked = true
let operatorValue =""
let uniqueOperatorOn = true
const message = "Please press 'CLEAR' to continue using calculator"
 

function addOperator(sign){
    storedOperators.push(sign)  
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
        } else {
            messageEl.innerHTML = message
        }

    
    })
})


function storeUserNumber(){
    displayEl.innerHTML += value1
    value2 = value1
    storedValues.push(Number(value2))
    value1 =""
}

function renderAnswer(){
    answer = operator(storedOperators.shift(),storedValues)
    if(answer === "ERROR"){
        clear()
        displayEl.innerHTML = "ERROR"
    } else {
        storedValues = [answer]
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
        } else {
            messageEl.innerHTML = message
        }
        
    })
})

// add functionalilty for equals button

document.querySelector("#equals-el").addEventListener("click", event => {
    if(storedValues.length > 0){
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
            if(storedValues = []){
                storedValues.push(Number(value1))
            }
            answer = operator(event.target.innerHTML,answerEl.innerHTML)
            answerEl.innerHTML = answer
            displayEl.innerHTML = `${answer}` 
            storedValues = []
            value1 = answer
        }
    } else {
        messageEl.innerHTML = message
    }
        
    })
})




// add functionality for negatve button
document.querySelector(".negative").addEventListener("click", () => {
    if(displayEl.innerHTML !== "ERROR"){
        answerEl.innerText = answerEl.innerHTML*(-1)
        value1 = answerEl.innerText
        console.log(value1)
    } else {
        messageEl.innerHTML = message
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
    storedValues = []
    storedOperators = []
    value1 = ""
    answer = ""
    displayEl.innerHTML =""
    answerEl.innerHTML=""
    operatorClicked = true
    messageEl.innerHTML = ""
}


