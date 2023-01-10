import {operator} from "./mathFunctions.js";
let answer = 0
let decimalNum = 0
let wholeNumberLength = 0 
let totalLength = 0


export default class Calculate {

    constructor([number1, operatorvalue, number2]){
        this.numbers = [Number(number1),Number(number2)]
        this.operatorvalue = operatorvalue
        this.number1 = Number(number1)
    }

    getAnswer() {
        let answer = operator(this.operatorvalue, this.numbers)
        if (Number.isInteger(answer)) {
            return answer;
         } else {
            wholeNumberLength = answer.toString().split('.')[0].length
            decimalNum = answer.toString().split('.')[1].length
            totalLength = wholeNumberLength + decimalNum
            if(totalLength > 16) {
                return answer.toFixed(totalLength - wholeNumberLength)
            } else {
                return answer
            }
        }
    }

    getAnswerSingleNum() {
        return operator(this.operatorvalue, this.number1)
    }
}


