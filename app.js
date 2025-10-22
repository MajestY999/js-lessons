//Упражнение- Обновление списка задач

const tasks = ['Задача 1'];



// const addTask  = () => {}

  function Add(task) {
        tasks.push(task)
        
    }

    function Remove(task){
        const index = task.indexOf(task)
        if(index === 0) {
            return;
        }
        tasks.splice(index, 1)
    }

    function  Priorutirize(task){
      const index = task.indexOf(task);
       if(index === -1) {
            return;
        }
      const OldTask = tasks[index];
       tasks.splice(index, 1);
      tasks.unshift(OldTask);
    }

Add('Задача 2');
Add('Задача 3')
console.log(tasks);
Remove('Задача 2')
console.log(tasks);
Priorutirize('Задача 3')
console.log(tasks);