const fullUserName = 'Вася aka Terminator Пупкин';


const userName = fullUserName.slice(0, fullUserName.indexOf(' '))
console.log(userName);
const userSureName = fullUserName.slice(
    fullUserName.lastIndexOf(' ') + 1, 
    fullUserName.length
)
console.log(userSureName);