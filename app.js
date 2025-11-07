//reduce
const operations = [100, -20, 7, -30, 50]

let balance = 0;
for (const operation of operations) {
    balance += operation
}
console.log(balance);// 107

const finalBalance = operations.reduce((acc, operation, i) => {
    //как оно работает
    console.log(`Итерация ${i}, acc: ${acc}, value: ${operation} `);
 return acc += operation// тут теперь мы  быдем выводить чему равен наш acc при возвращении из нашей функции
}, 0) //через запятую вводим наш первоначальный балансm, и тут мы пишем наш первый начальный баланс и с которого  все как раз иначинается а потом с нулевого то есть первого элемента.

console.log(finalBalance); //107 

//0 - acc = 0, value = 100
//1 - acc = 100, value = -20

const minElement = operations.reduce((acc, operation, i) => {
    if(operation > acc){
        return acc
    }else {
        return operation
    }
   
}, 0);
console.log(minElement);//-30, Тут происходит не аккомуляция а возвращение минимально элемента массива