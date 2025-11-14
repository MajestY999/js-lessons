//sort
const users = ['Вася', 'Маша', 'Катя', 'Аня']
console.log(users);
users.sort();//Отсортировал имена по именам от а до я, то есть по алфавиту.
console.log(users);

const operations = [100, -300, -100, 50, 480]
console.log(operations);
operations.sort();
console.log(operations);// отсортировались как строки.   [-100, -300, 100, 480, 50]


// < 0 - a, b - сохраняем порядок.
// > 0 - b, a - меняем порядок.
// сортировка на увеличение 
operations.sort((a, b)=> {
 if(a > b ){
    return 1;
 }
if(a < b ){
    return -1;
}
})
console.log(operations); // [-300, -100, 50, 100, 480]  тут видно что массив работает так что сначала отрицательные значения потом больше нуля и наибольшее а не в разброс.

//Сортировка по убыванию
operations.sort((a, b)=> {
 if(a < b ){
    return 1;
 }
if(a > b ){
    return -1;
}
})
console.log(operations);//[480, 100, 50, -100, -300] все тоже самое только в разброс.

//Коротка запись той же функции.
operations.sort((a, b) => a - b)
console.log(operations);// [-300, -100, 50, 100, 480] все тоже самое как и в вверхней функции а именно с работой на увеличение



