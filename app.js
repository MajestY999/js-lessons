//Упражнение обновление списка задач
const tasks= ['Задача 1']

function addTask (task){
    tasks.push(task)
}

function RemoveTask(task){
  const index = tasks.indexOf(task)
  if (index >= 0) {
    tasks.splice(index, 1)
  }
}

function prioritizeTasks(task){
    index = tasks.indexOf(task)
    const indxAr = tasks[index]
   tasks.splice(index, 1)
    tasks.unshift(indxAr)
}

function hasTasks(task){
return tasks.includes(task)
}

addTask('Задача 2');
addTask('Задача 3');
console.log(tasks);

RemoveTask('Задача 3')
console.log(tasks);

prioritizeTasks('Задача 2')
console.log(tasks);

console.log(hasTasks('Задача 10'));//false
console.log(tasks);
console.log(hasTasks('Задача 1'));//true
