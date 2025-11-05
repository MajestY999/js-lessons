//Метод filter

const operations = [100, -20, 7, -20, 50]
// const positiveOperations = [];

// for (const operation of operations) {
//     if(operation > 0){
//         positiveOperations.push(operation)
//     }
// }
// console.log(positiveOperations);// Отфильтровали все операции только на позитивные.


const positiveOperations = operations.filter(operation => {
    return operation > 0;//Тут мы оставляем те элементы которые верны нашему условию. Тут у нас показывает что только положительные варианты будут отображаться.
})
console.log(positiveOperations);

const positiveRUBOOperations = operations
    .filter(operation => {
    return operation > 0;//Тут мы оставляем те элементы которые верны нашему условию. Тут у нас показывает что только положительные варианты будут отображаться.
    })
    .map(operation => operation  *60) 
    
    
console.log(positiveRUBOOperations);