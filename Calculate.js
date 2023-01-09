import {operator} from "./mathFunctions.js";
let answer = 0


export default class Calculate {

    constructor([number1, operatorvalue, number2]){
        this.numbers = [Number(number1),Number(number2)]
        this.operatorvalue = operatorvalue
        this.number1 = Number(number1)
    }

    getAnswer() {
        return operator(this.operatorvalue, this.numbers)
    }

    getAnswerSingleNum() {
        console.log(this.operatorvalue)
        console.log(this.number1)
        return operator(this.operatorvalue, this.number1)
    }
}