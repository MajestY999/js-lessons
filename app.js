//flat() и flatMap()
//flat
const prices = [[2,4], [3, 4], [10, /* 20 */ [20, 50]]]
const res = prices.flat(2)// делает массив плоским то есть уберает из массива внутренние массивы, но если внутри внутреннего массива будет массив то там просто останется массив.
const  res2 = prices.flatMap(el => el.concat([1])) // [2, 4, 1, 3, 4, 1, 10, Array(2), 1]
console.log(res);
console.log(res2);
//flatMap()

