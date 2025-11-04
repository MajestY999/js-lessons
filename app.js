//Функция map

// const score = [5, 10, 0, 15]

// score.forEach((scoreEl, i, ) => { //так же внутри этой функции можно вывести целиком главный массив с которым мы работаем 
//     console.log(`Раунд ${i  + 1}: ${scoreEl}`); 
// }) 
// // (5, 0) => {...}
// // (10, 0) => {...}


const transactionInUSD = [10, -7, 50, -10, 100];

const  transactionInRUB = [];
for (const transaction of transactionInUSD) {
    transactionInRUB.push(transaction * 60)

}

// console.log(transactionInUSD);
// console.log(transactionInRUB);

// const transactionInRUB2 = transactionInUSD.map((transaction, i) =>{
// return transaction * 60; //Здесь мы должны что-то вернуть
// })

//Короткий вариант

// const  transactionInRUB2 = transactionInUSD.map((transaction) =>  transaction * 60)
const  transactionInRUB2 = transactionInUSD.
map((transaction, i) =>  {
    console.log(i);// 0 1 2 3 4
    return transaction * 60
})
console.log(transactionInUSD);
console.log(transactionInRUB2);