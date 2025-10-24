//Принцип DRY -- do not repeat yourself

const tasks = ['Задача 1'];

// const addTask  = () => {}

  function Add(task) {
        tasks.push(task)
        
    }

    function Remove(task){
        const index = task.indexOf(task)
        if(index === -1) {
            return;
        }
       return tasks.splice(index, 1)
    }

    function  Priorutirize(task){
      const result = Remove(task);
       if(!result) {
        return;
        }
         tasks.unshift(result[0]);
    }

Add('Задача 2');
Add('Задача 3');
console.log(tasks);
Remove('Задача 2')
console.log(tasks);
Priorutirize('Задача 3')
console.log(tasks);