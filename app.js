//Break and Continue
const tasks = ['Задача 1', 'Задача 2', 'Задача 3'];


for(let i = 0; i < tasks.length; i++){
    if(tasks[i] === 'Задача 2'){ //здесь мы обозначили что хотим вывести все задачи кроме второй
        continue;
    }
    console.log(tasks[i]);
} 
//Break в отличи в continue наоборот останавливает выполнение кода
console.log('-----------------');
for(let i = 0; i < tasks.length; i++){
    if(tasks[i] === 'Задача 2'){ //здесь мы обозначили что хотим вывести все задачи кроме второй
        break;//выведется только Задача 1
    }
    console.log(tasks[i]);
} 