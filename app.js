//find и findIndex


const arr = [2, 4, 4, 10]

let elGT5;
// for (const el of arr) {
//     if(el > 5){
//         elGT5 = el;
//         break;
//     }
// }
// console.log(elGT5); //Выведется 10

elGT5  = arr.find(el => el > 5);//Ищет первый попавшийся элемент который удовлетрояет  наше условие.  тут выведет 10
elGT5Index  = arr.findIndex(el => el > 5); //тут 3 потому что в массиве его индекс 3
elGT5Index  = arr.findIndex(el => el < 0);//тут -1 потому что он не был найдет, то есть в массиве не было найдено какого либо элемента меньше нуля.
console.log(elGT5Index);