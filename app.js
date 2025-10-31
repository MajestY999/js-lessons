//Как записываются функции высшего порядка и работают

function add(a, b){
return a + b
}

function subtract(a, b){
    return a - b 
}

function power  (a,b) {
    return a ** b
}

//Функция высшего порядка
function calculate(a, b, fn){
    console.log(fn.name);
    const res = fn(a, b)
    return res;
}
let res = calculate(3, 5, add)// 8
console.log(res);
res = calculate(3, 5, subtract) // -2 
console.log(res);

res = calculate(3, 5, power)
console.log(res); // 243

function calc1(a, b, c, fn1){
    console.log(fn1.name);
    const  res1  = fn1(a, b, c)
    return res1
}

function sent(a, b, c){

 return (a + b) **c
}

function newsum (a, b, c){
return a + b + c
}
let res1 = calc1(4, 5, 3, sent) // 729
console.log(res1);
res1 = calc1(35, 24, 15, newsum)
console.log(res1);