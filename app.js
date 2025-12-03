// //Метод map
// const score = [5, 10, 0, 15];
// console.log('цикл forEach');
// score.forEach((scoreEl, i)=>{
//  console.log(`Раунд$: ${scoreEl}`);
// })

const transactionInUSD = [10, -7, 50, -10, 100];
const transactionInRUB =[];
for(const transaction of transactionInUSD){
    transactionInRUB.push(transaction * 60)
}

console.log(transactionInUSD);
console.log(transactionInRUB);

const transactionInRUB2 =  transactionInUSD
.map((transaction)=>{//метод map создает новый массив в transactioninRUB2 и там происходят переводы
        return  transaction * 60
    });
console.log(transactionInRUB2);
console.log(transactionInUSD);