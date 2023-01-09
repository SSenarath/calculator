
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

function operator(operatorvalue, array){
    switch(operatorvalue){
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

export {operator};