//повторение метода reduce

const operations = [100, -20, 7, -30, 50];

let balance = 0;
for (const element of operations) {
    balance += element
}
console.log(balance);//107  


const finalBalance  = operations.reduce(
    (acc, operation, i)=> {
        console.log(`Интерация ${i}, acc: ${acc}, operation ${operation}`);  
        return acc += operation
    }, 0)//исходное значение
//0 - acc =  0, value  = 100
//1 - acc = 100, value = -20
console.log(finalBalance);//107

const minElement  = operations.reduce(
(acc, operation, i)=> {
 if(operation > acc){
    return acc
 } else{
    return operation
 }
})

console.log(minElement);//-30

