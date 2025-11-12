//Повторение. reduce и т.д

const operations = [100, -20, 7, -30, 50];

let balance = 0;
for (const operation of operations) {
    balance += operation;
}

console.log(balance);// результат 107


//Пробуем reduce
const finalBalance  = operations.reduce((acc, operation, i) => {
    console.log(`Итерация ${i}, acc:${acc}, value:${operation}`);
 return acc += operation;
}, 0) //тут делаем так что у нас все начинетсяс нуля или просто исхрдный начальный баланс равный 0

// 0 - acc = 0, Value = 100
// 1 - acc = 1, Value = 101

console.log(finalBalance); //Выведется  те же 107


const minElement  = operations.reduce((acc, operation) => {
 if(operation > acc) {
    return acc;
 }
 else{
    return operation
 }
}, 0) 

console.log(minElement); //-30

//Упражнение - среднее значение.

const Operations = [1, 4, 4, 10]


const sumArr = Operations.reduce(
    (acc,  arrValue) => {
        return acc += arrValue     
    },0)
    
 
    const  avgElement =   sumArr / Operations.length

    console.log(avgElement);
// find и findIndex

const arr = [2, 4, 4, 10]


let elGT5;
for (const el of arr) {
    if(el > 5) {
 elGT5 = el;
  break
    }
}

console.log(elGT5); // 10

elGT5 = arr.find(el => el > 5);
console.log(elGT5);// 10

elGT5 = arr.findIndex(el => el > 5)
console.log(elGT5);// 3 если поставить меньше нуля то будет -1 то есть отрицательное значение и числа меньше нуля нет в массиве.