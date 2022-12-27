let displayEl = document.getElementById("display")
let equalEl = document.getElementById("equals-el")
let anwerEl = document.getElementById("answer")
let equalsBtnClicked = false;
let values = []
let value1=""
let answer = ""
let operatorValues = []


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

// get first value

function getValue(){
    document.querySelectorAll('.number').forEach(item => {
        item.addEventListener("click",(event) => {
            displayEl.innerHTML += `${event.target.innerHTML}`
            value1 += event.target.innerHTML
            console.log(value1)
        })
    })
    
    document.querySelectorAll('.operator').forEach(item =>  {
        item.addEventListener("click",(event) => {
            values.push(Number(value1))
            console.log(values)
        })
    })
}

getValue()



// document.querySelectorAll('.operator').forEach(item => {
//     item.addEventListener("click",(event) => {
//         if(!equalsBtnClicked)  {
//             values.push(Number(value1))
//             value1 =""
//             console.log(values)
//             operatorValues.push(event.target.innerHTML)
//             console.log(operatorValues)
//             displayEl.innerHTML += `${event.target.innerHTML}`

//         } else {
//             value1 =""
//             operatorValues.push(event.target.innerHTML)
//             displayEl.innerHTML += `${event.target.innerHTML}`
//         }

//     })
// })

// document.querySelectorAll('.operator').forEach(item => {
//     item.addEventListener("click",(event) => {
//         if(values.length >= 2) {
//             if(!equalsBtnClicked){
//                 anwerEl.innerHTML = operator(operatorValues[0], values)
//                 operatorValues = [operatorValues[1]]
//                 values = [Number(anwerEl.innerHTML)]
//             }
            
//         }
//     })
// })

// equalEl.addEventListener('click', () => {
//     values.push(Number(value1))
//     console.log(values)
//     anwerEl.innerHTML = operator(operatorValues[0], values)
//     equalsBtnClicked = !equalsBtnClicked

// })

