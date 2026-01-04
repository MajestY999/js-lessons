//Повторение пройденного для более плотного обучения и стать лучше 

//map 

// const operations = [100, -50, 20, -25, 250]

// const result = operations.map((transaction)=> {
//    return  transaction * 60
// })

// console.log(result);

//Повторение reduce 
const operations = [100, -20, 7, -30, 50]

let balance = 0;
for(const operation of   operations){
    balance += operation;
}

console.log(balance);//107

const finalBalance = operations.reduce((acc, value, i)=> {
    console.log(`Итерация${i}, acc:${acc}, operations:${value}`);
return acc += value


}, 0)

console.log(finalBalance);



const minElement = operations.reduce((acc, operation, i)=> {//поиск минимального элемента
   if(operation > acc){
    return acc
   } else{
    return operation
   }


}, 0)

console.log(minElement);//-30 минимальный элемент.

//Упражнение к reduce

//есть массив чисел 
const arr = [1, 4, 4, 10]
const SumEl  = arr.reduce((acc, valueArr)=> {
return acc += valueArr
})

const avg = SumEl/ arr.length

console.log(avg);//результат верный, но тут результат суммы выведен из reduce так как по заданию должен быть внутри reduce 

const avg1 = arr.reduce((acc, el, i) => {
    console.log(`${acc}, ${el}, ${i}`);
if(i != arr.length - 1){
    return acc + el
}else{
    return (acc + el)/arr.length
}

}, 0)
console.log(avg1);//Тот же результат просто  все написано внутри reduce.

console.log(arr.length);

const prices = [100, 500, 250, 150]

const res = prices.reduce((acc, value)=>{
    return acc + (value - 10)
}, 0)

console.log(res);

const result = prices.reduce((acc, value, i)=> {
    if(i === arr.length -1){
        console.log('Все! Это был последний товар!');
    }
    return acc + (value - 10)
}, 0)

console.log(result);