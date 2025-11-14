//Быстрое создание массивов.

const array = [1,2,3,4,5]

//console.log(new Array(1, 2, 3, 4, 5));//(5) [1, 2, 3, 4, 5]
console.log(new Array(1, 2, 3, 4, 5));
const arr2 = new Array(5)// [empty × 5]
console.log(arr2);//метод map невозможно и нельзя взаимодействовать с пустым массивом.
console.log(arr2.map(el => el + 1));
arr2.fill(1, 0, 3)//app.js:12 (5) [1, 1, 1, empty × 2]
arr2.fill(2,3,5)//(5) [1, 1, 1, 2, 2]
console.log(arr2);//(5) [1, 1, 1, 1, 1]

const arr3 = Array.from({ length: 5}, (cur, i) => i + 1);//будет [1, 2, 3, 4, 5]
console.log(arr3);//(5) [5, 5, 5, 5, 5], если только lenght 5  а также () => 5

let arr = [1, 2, 10, 15];
arr.sort()
console.log(arr);