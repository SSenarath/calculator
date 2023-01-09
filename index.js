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
const message = "Please press 'CLEAR' to continue using calculator";

numberBtns.forEach((item) => {
  item.addEventListener("click", (event) => {
    if(stopCalculator === false) {
        if (operator) {
            pair.push(operator);
            display.innerHTML += event.target.innerHTML;
            num += String(event.target.innerHTML);
            console.log(num)
            operatorClicked = false;
          } else if (!operator) {
            //only runs for the first number inputted
            display.innerHTML += event.target.innerHTML;
            num += event.target.innerHTML;
            operatorClicked = false;
          }
    }
  });
});

document.querySelectorAll(".unique-operator").forEach((item) => {
  item.addEventListener("click", (event) => {
    operator = event.target.innerHTML;
    pair.push(num);
    pair.push(operator);
    pair.push("");
    answer = new Calculate(pair);
  });
});

operatorBtns.forEach((item) => {
  item.addEventListener("click", (event) => {
    if(stopCalculator === false) {
        if ((event.target.innerHTML === "!" | "√") && uniqueOperatorClicked === false) {
            operator = event.target.innerHTML;
            display.innerHTML += operator;
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
        } else if ((event.target.innerHTML === "!" | "√") && uniqueOperatorClicked === true) {
            operator = event.target.innerHTML;
            display.innerHTML = `${displayAnswer.innerHTML}${operator}`;
            pair.push(operator);
            pair.push("");
            answer = new Calculate(pair);
            answer = answer.getAnswerSingleNum();
            displayAnswer.innerHTML = answer;
            pair = [answer];
            if (answer === Infinity | answer === "ERROR") {
                messagEl.innerHTML = message;
                stopCalculator = true;
            }
        } else if(event.target.innerHTML !== "!" || "√") {

        uniqueOperatorClicked = false;

        if (operatorClicked === false) {
            pair.push(num);
            num = "";

        }

        if (equalClicked === true) {
            pair = [answer];
            display.innerHTML = answer;
            equalClicked = false;
            operator = "";
        }

        if (!operator) {
            operator = event.target.innerHTML;
            display.innerHTML += operator;
            operatorClicked = true;

        } else if (operator && pair.length === 3) {
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
        } else {
            display.innerHTML = display.innerHTML.slice(0, -1);
            operator = event.target.innerHTML;
            display.innerHTML += operator;
            operatorClicked = true;
        }
        }
    }
  });
});

equal.addEventListener("click", (event) => {
    if(stopCalculator === false) {
        if (!equalClicked) {
            pair.push(num);
            answer = new Calculate(pair);
            answer = answer.getAnswer();
            displayAnswer.innerHTML = answer;
            equalClicked = true;
            if (answer === Infinity | answer === "ERROR") {
                messagEl.innerHTML = message;
                stopCalculator = true;
            }
        }
    }
});

document.querySelector(".clear-btn").addEventListener("click", () => {
    console.log('clicked')
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
  display.innerHTML = '';
  displayAnswer.innerHTML = '';
  messagEl.innerHTML = '';
}
