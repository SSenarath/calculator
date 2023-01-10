import Calculate from "./Calculate.js";

let numberBtns = document.querySelectorAll(".number");
let operatorBtns = document.querySelectorAll(".operator");
let display = document.querySelector("#display");
let equal = document.querySelector("#equals");
let displayAnswer = document.getElementById("answer");
let messagEl = document.getElementById("message-el");
let answer = "";
let pair = [];
let num = "";
let operator = "";
let operatorClicked = false;
let equalClicked = false;
let uniqueOperatorClicked = false;
let stopCalculator = false;
let decimalUsed = false;
const message = "Please press 'CLEAR' to continue using calculator";

numberBtns.forEach((item) => {
  item.addEventListener("click", (event) => {
    if(stopCalculator === false) {
        if(event.target.innerHTML === "."){
            decimalUsed = true
            document.getElementById('decimal').disabled = true;
        }
        messagEl.innerHTML = ``
        if (operator) {
            pair.push(operator);
            displayAnswer.innerHTML += event.target.innerHTML;
            num += String(event.target.innerHTML);
            operatorClicked = false;
            operator =''
            
            
          } else if (!operator) {
            //only runs for the first number inputted
            displayAnswer.innerHTML += event.target.innerHTML;
            num += event.target.innerHTML;
            operatorClicked = false;
            
          }
    }
  });
});



operatorBtns.forEach((item) => {
  item.addEventListener("click", (event) => {
    if(stopCalculator === false && (displayAnswer.innerHTML !== "" || display.innerHTML !== "")) {
        if ((event.target.innerHTML === "!" || event.target.innerHTML === "√") && uniqueOperatorClicked === false) {
            operator = event.target.innerHTML;
            if(!Number.isInteger((Number(displayAnswer.innerHTML)) || !Number.isInteger(Number(display.innerHTML))) && operator === "!"){
                stopCalculator = true;
                messagEl.innerHTML = `This calculator cannot calculate factorials of decimals, please press CLEAR and restart`;
            }
           
            
            console.log(`hi`)
            operatorClicked = true
 
            if (equalClicked === true && stopCalculator === false) {
                console.log('first')
                pair = [answer]
                display.innerHTML =''
                equalClicked = false;
                display.innerHTML += `${answer}${operator}`
                pair.push(operator);
                pair.push("");
                answer = new Calculate(pair);
                answer = answer.getAnswerSingleNum();
                displayAnswer.innerHTML = answer;
                pair = [answer];
                uniqueOperatorClicked = true;
                if (answer === Infinity | answer === "ERROR") {
                messagEl.innerHTML = message;
                stopCalculator = true;
                }
            
            }else if (display.innerHTML === '' && stopCalculator === false) {
                console.log('third')
                display.innerHTML += `${num}${operator}`;
                pair.push(num);
                pair.push(operator);
                pair.push("");
                answer = new Calculate(pair);
                answer = answer.getAnswerSingleNum();
                displayAnswer.innerHTML = answer;
                pair = [answer];
                uniqueOperatorClicked = true;
                if (answer === Infinity | answer === "ERROR") {
                    messagEl.innerHTML = message;
                    stopCalculator = true;
                }

            } 
            else if(operatorClicked === true && stopCalculator === false){
                console.log('second')
                pair.push(num);
                answer = new Calculate(pair);
                answer = answer.getAnswer();
                display.innerHTML = `${answer}${operator}`
                num = "";
                decimalUsed = false
                document.getElementById('decimal').disabled = false
                if (answer === Infinity | answer === "ERROR") {
                    messagEl.innerHTML = message;
                    stopCalculator = true;
                }
                console.log(answer)
                console.log(operator)
                pair = [answer,operator, ""]
                answer = new Calculate(pair);
                answer = answer.getAnswerSingleNum();
                displayAnswer.innerHTML = answer
                pair = [answer]
                uniqueOperatorClicked = true

            }
            
            
        } else if ((event.target.innerHTML === "!" | event.target.innerHTML === "√") && uniqueOperatorClicked === true) {
            operator = event.target.innerHTML;
            if(!Number.isInteger(Number(display.innerHTML)) && operator === "!"){
                stopCalculator = true;
                messagEl.innerHTML = `This calculator cannot calculate factorials of decimals, please press CLEAR and restart`;
            }
            if(stopCalculator === false){
                display.innerHTML = `${displayAnswer.innerHTML}${operator}`;
                pair.push(operator);
                pair.push("");
                console.log(pair)
                answer = new Calculate(pair);
                answer = answer.getAnswerSingleNum();
                console.log(answer)
                displayAnswer.innerHTML = answer;
                pair = [answer];
                if (answer === Infinity | answer === "ERROR") {
                    messagEl.innerHTML = message;
                    stopCalculator = true;
                }
            }
          
        } else if(event.target.innerHTML !== "!" || event.target.innerHTML !== "√") {

        uniqueOperatorClicked = false;

        if (operatorClicked === false) {
            display.innerHTML = num
            displayAnswer.innerHTML = ''
            pair.push(num);
            num = "";
            document.getElementById('decimal').disabled = false

        }


        if (equalClicked === true) {
            pair = [answer];
            display.innerHTML = answer;
            equalClicked = false;
            operator = "";
        }


        if(!operator && pair.length === 3) {
            decimalUsed = false
            answer = new Calculate(pair);
            answer = answer.getAnswer();
            display.innerHTML = answer;
            pair = [answer];
            operator = event.target.innerHTML;
            display.innerHTML += operator;
            operatorClicked = true;
            if (answer === Infinity | answer === "ERROR") {
                messagEl.innerHTML = message;
                stopCalculator = true;
            }
        } else if (!operator) {
            operator = event.target.innerHTML;
            display.innerHTML += operator;
            operatorClicked = true;

        } else {
            display.innerHTML = display.innerHTML.slice(0, -1);
            operator = event.target.innerHTML;
            display.innerHTML += operator;
            operatorClicked = true;
        }
        }
    } else if (messagEl.innerHTML === `This calculator cannot calculate factorials of decimals, please press CLEAR and restart`) {
        
    } else {
        messagEl.innerHTML = `Please enter a number before selecting an operator`;
    }
  });
});

equal.addEventListener("click", (event) => {
    if(stopCalculator === false) {
        if (!equalClicked) {
            if(pair.length < 2) {
                messagEl.innerHTML = `Please enter more arguments`
            } else {
            decimalUsed = false
            pair.push(num);
            display.innerHTML += num
            answer = new Calculate(pair);
            answer = answer.getAnswer();
            displayAnswer.innerHTML = answer;
            equalClicked = true;
            if (answer === Infinity | answer === "ERROR") {
                messagEl.innerHTML = message;
                stopCalculator = true;
            }
            }
    }}
});

document.querySelector(".clear-btn").addEventListener("click", () => {
    clear();
});

function clear() {
  answer = "";
  pair = [];
  num = "";
  operator = "";
  operatorClicked = false;
  equalClicked = false;
  uniqueOperatorClicked = false;
  stopCalculator = false;
  decimalUsed = false;
  document.getElementById('decimal').disabled = false
  display.innerHTML = '';
  displayAnswer.innerHTML = '';
  messagEl.innerHTML = '';
}
