const tasks = ["Погулять", "Сделать домашку", "Купить хлеб"];
function processTask(task){
    tasks.push(task)
}
processTask('Пойти на учебу')


processTask('Пойти работать за партия!')
console.log(tasks);
function deleteTask(task){
    const index = tasks.indexOf(task)
    if(index !== '-1')
    {
        tasks.splice(index, 1)
    }
}
deleteTask('Погулять')
console.log(tasks);
function prioritize (task){
const index = tasks.indexOf(task);
if(index !== -1){
    const item = tasks.splice(index, 1)[0];
    tasks.unshift(item);
}
}

prioritize('Купить хлеб')
console.log(tasks);