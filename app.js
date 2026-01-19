//Argument
'use strict'

function sumNum(num1, num2){
    console.log(this);
    console.log(arguments);
    return num1 + num2
}

console.log(sumNum(1, 4));


const sumNumArr = (num1, num2)=> {
 return num1 + num2
}

console.log(sumNumArr(1, 4));