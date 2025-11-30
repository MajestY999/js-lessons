// Повторение цикла while

for(let i = 1; i < 5; i++){
  console.log(`Вывод - ${i}`);
}

console.log('-------------------------');
// //let i = 1//обьявляем переменную снаружи
// while(i < 5){
//   console.log(`Вывод - ${i}`);
//   i++;
// }

const arr = [1, 4, 8, 7];

for(let i = 0; i < arr.length; i++){
  if(arr[i]> 5){
    break;
  }
  console.log(arr[i]);
}

//Выведется 1 4

let i = 0
while(arr[i] <= 5 && arr.length){
 console.log(arr[i]);
 i++;
}

console.log('-------------------------do while--------------------------');

let j = 0;
do{
  console.log(j);
}
while(j < 0)//Выводиться будет 0 так как тело выполнится 1 раз, а потом проверится условие и окажется ложным

//Цикл for of и fot in

// const arr = [1, 4, 8, 7];
// for(let i = 0; i < arr.length; i++){
//   if(arr[i]> 5){
//     break;
//   }
//   console.log(arr[i]);
// }
//Берем те же данные и перебираем их через for of
for(let element of arr){
  console.log(element);//Выведет все элементы массива 0 1 4 8 7
}
for(let index in arr){
  console.log(index);//Выведет индексы массива 0 1 2 3
}