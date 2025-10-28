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

const arr = [1,4, 8, 7]

for(let i = 0; i < arr.length; i++){
    if(arr[i]> 5) {
        break
    }
    console.log(arr[i]); // 1 4
}

let i =0
while(arr[i] <= 5 && i < arr.length){
    console.log(arr[i]);
    i++//1 4
}

let j = 0;
do{
    console.log(j);
    j++
}
while( j < 0 )//Тут будет код выболняться только 1 раз 