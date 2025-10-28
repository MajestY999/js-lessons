// Упражнение — Управление списком пользователей

const users = ['Аня'];

// Добавление пользователя
function addUser(name) {
  users.push(name);
}

// Удаление пользователя
function removeUser(name) {
  const index = users.indexOf(name);
  if (index === -1) return;
  users.splice(index, 1);
}

// Перемещение пользователя в начало (приоритетный)
function prioritizeUser(name) {
  const index = users.indexOf(name);
  if (index === -1) return;
  const chosen = users[index];
  users.splice(index, 1);
  users.unshift(chosen);
}

// Проверка наличия пользователя
function hasUser(name) {
  return users.includes(name);
}

// ================== ТЕСТ ===================

addUser('Вика');
addUser('Катя');
console.log(users); // ['Аня', 'Вика', 'Катя']

removeUser('Вика');
console.log(users); // ['Аня', 'Катя']

prioritizeUser('Катя');
console.log(users); // ['Катя', 'Аня']

console.log(hasUser('Аня')); // true
console.log(hasUser('Петя')); // false




// Циклы в циклах 
// for(let i = 1; i < 5; i++){
//     console.log(`Цикл 1 - ${i}`);
//     for(let j = 1; j < 5; j++){
//         console.log(`Цикл 2 - ${j}`);
//     }
// }

// const tasks = [[1, 'Задача 1', ], [2, 'Задача 2']]

// for(let i = 0;  i< tasks.length; i++ ){
//     for(let j = 0; j < tasks[i].length; j++) {
//         console.log(tasks[i][j]);//Тут можно делать отбращение к элементу массива используя скобки массива.
//     }
// } 

//Цикл while ()
// let i = 1   //Обьявляем переменную снаружи цикла while. Внутри даем значение i < 5
// while(i < 5){
//     console.log(`Вывод - ${i}`);
//     i++// Тут внутри мы обьявляем шаг что наша переменная должна увеличиться на один 
// }

// const arr = [1,4, 8, 7]

// for(let i = 0; i < arr.length; i++){
//     if(arr[i]> 5) {
//         break
//     }
//     console.log(arr[i]); // 1 4
// }

// let i =0
// while(arr[i] <= 5 && i < arr.length){
//     console.log(arr[i]);
//     i++//1 4
// }

// let j = 0;
// do{
//     console.log(j);
//     j++
// }
// while( j < 0 )//Тут будет код выболняться только 1 раз 


//Цикл while
for(let i = 1; i < 5; i++){
    console.log(`Вывод - ${i}`);
}


// let i = 1
// while (i < 5) {
//     console.log(`Вывод - ${i}`);
//     i++;
// }


// Когда использовать цикл while или for   While: 
const arr = [1, 4, 8, 7];

for(let i = 0; i < arr.length; i++){
    if(arr[i] > 5){
        break
    }
console.log(arr[i]); //Выведет 1 и 4
}


let i = 0;
while(arr[i] <= 5 &&  arr.length){
console.log(arr[i]);
i++
}


//Также есть другая контсрукция  do{}while
let j = 1// Прописываем переменную и ее значение снаружи

do{
    console.log(j);
    j++;//Тут шаг переменной 
}while(j < 5)//Также этот цикл будет отрабатываться тут только одинн раз и результат будет ноль так как у нас j не должна быь больше нуля
//если написать j = 1; а значение j < 5 то результат будет идти до 4 и на нем остановится. Ну или просто Цикл продолжает работать, пока j не станет равным 5


//Как работает Цикл do{}while()

do{
  //тело цикла
} while(условие)


  //Пример 
  let n = 0 
  do{
    console.log(n);
    n++;//шаг  то етсь будет с каждой итерацией становиться больше
  }while(i<3)
//     Цикл сначала выведет 0, затем 1, затем 2.
// После вывода 2, i станет равно 3, и условие i < 3 будет ложным, поэтому цикл завершится. 