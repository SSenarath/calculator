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

console.log(operator("√",8))

let displayEl = document.getElementById("display")
let answerEl = document.getElementById("answer")
let previousOperator = ""
let numbers = []
let operators = []
let value1 = ""
let answer = ""

// store user inputted value

document.querySelectorAll(".number").forEach(item => {
    item.addEventListener("click", event => {
        value1 += event.target.innerHTML
        displayEl.innerHTML += event.target.innerHTML
        console.log(value1)
    })
})

document.querySelectorAll(".operator").forEach(item => {
    item.addEventListener("click", event => {
        displayEl.innerHTML += event.target.innerHTML
        numbers.push(Number(value1)) // push user input value to array
        console.log(numbers)
        value1 = "" // reset value for next user input
        operators.push(event.target.innerHTML)
        if(numbers.length >= 2) {
            previousOperator = operators.shift()
            answer = operator(previousOperator,numbers)
            answerEl.innerHTML = answer
            displayEl.innerHTML = `${answer}${operators[0]}`
            numbers = [answer]
        }
        
    })
})

document.querySelectorAll(".unique-operator").forEach(item => {
    item.addEventListener('click', event => {
        numbers.push(Number(value1))
        answer = operator(event.target.innerHTML,numbers)
        answerEl.innerHTML = answer
        displayEl.innerHTML = `${answer}`
        numbers = []
        value1 = answer
    })
})

document.querySelector("#equals-el").addEventListener("click", event => {
        numbers.push(Number(value1))
        value1 = ""
        previousOperator = operators.shift()
        answer = operator(previousOperator,numbers)
        numbers = []
        value1 = answer
        answerEl.innerHTML = answer
        displayEl.innerHTML = answer
})

document.querySelector(".negative").addEventListener("click", () => {
    value1 = Number(value1)*(-1)
    displayEl.innerHTML = value1
})



let count ="22.2"
console.log(Number(count))