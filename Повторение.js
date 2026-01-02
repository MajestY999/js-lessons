//map
// const score = [5, 10, 0, 15 ]

// score.forEach((scoreEl, i) => {
//     console.log(`Раунд ${i + 1}: ${scoreEl}`);
// })

const transactionInUSD = [10, -7, 50, -10, 100];
const transactionInRUB = []

const transactionInRUB2 = transactionInUSD.map((transaction, i)=>  transaction * 60)

console.log(transactionInRUB2);//Кладет данные в новый массив то есть создаем массив transactionInRub2
