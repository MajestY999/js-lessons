// Callback функции

function add(a, b){
    return a+b;
}

function subtract(a, b){
    return a -b;
}

function power(a, b){
    return a ** b
}

//Функция высшего порядка

function calculate(a, b, fn){
    console.log(fn.name);
    const res = fn (a, b)
    return res   
}

let res = calculate(3, 5, add)//8, add
console.log(res);
res = calculate(3, 5, subtract)//-2, substract
console.log(res);
res = calculate(3, 5, power)//243, power
console.log(res);