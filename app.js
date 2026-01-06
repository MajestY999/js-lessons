//Упражнение Обновление списка задач 
const tasks = ['Задача 1']
 

function Add(task){
    tasks.push(task)//Встает в конце 
}

function remove(task){
    const index = tasks.indexOf(task)// поиск элемента где он лежит.
    if(index !== -1){
        tasks.splice(index, 1)//выкидываемя элемент из массива "Если мне нужно выкинуть лишний кирпич из стены, мне нужно знать его номер (индекс) и сколько штук выкинуть (1)".
    }
}

function prioritaze(task){
    const index = tasks.indexOf(task)
    if(index !== -1){
        const item = tasks.splice(index, 1)[0]
        tasks.unshift(item)// добавляется в начало
    }
}

Add('Работать')
Add('Учиться')
Add('Пылесосить')
console.log(tasks);
remove('Учиться')
console.log(tasks);
prioritaze('Пылесосить')
console.log(tasks);