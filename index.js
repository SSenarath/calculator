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
        return prev / current
    })
}

function power(array){
    return  array.reduce((prev, current) => {
        return Math.pow(prev,current)
    })
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
            return multiply(array);;
            break;
        case "/":
            return divide(array);;
            break;
        case "^":
            return  power(array);;
            break;
    }
}

let displayEl = document.getElementById("display")
let answerEl = document.getElementById("answer")
let previousOperator = ""
let numbers = []
let operators = []
let value1 = ""
let answer = ""

// get first value

document.querySelectorAll(".number").forEach(item => {
    item.addEventListener("click", event => {
        value1 += event.target.innerHTML
        displayEl.innerHTML += event.target.innerHTML
        console.log(value1)
    })
})

// push first value to array when any operator is pressed

document.querySelectorAll(".operator").forEach(item => {
    item.addEventListener("click", event => {
        displayEl.innerHTML += event.target.innerHTML
        numbers.push(Number(value1))
        value1 = ""
        console.log(numbers)
        operators.push(event.target.innerHTML)
        console.log(operators)
        if(numbers.length >= 2) {
            previousOperator = operators.shift()
            answer = operator(previousOperator,numbers)
            answerEl.innerHTML = answer
            console.log(answer)
            numbers = [answer]
            console.log(numbers)
        }
    })
})

document.querySelector("#equals-el").addEventListener("click", event => {
        numbers.push(Number(value1))
        value1 = ""
        console.log(numbers)
        previousOperator = operators.shift()
        answer = operator(previousOperator,numbers)
        console.log(answer)
        numbers = []
        value1 = answer
        answerEl.innerHTML = answer
})



