//Повторение массивов
const role1 = 'admin'
const role2 = 'user'
const role3 = 'superuser'

const roles = ['admin', 'user', 'superuser'];
const userInfo = ['Аня', 25]
console.log(roles);
console.log(roles[0]);
console.log(roles.length);
//Что бы получить последний элемент массива: 
console.log(roles[roles.length - 1]);

console.log(roles.at(0));//Получим admin
//Также мы можем также просто найти последний элемент массива
console.log(roles.at(-1));

const usersAge = [2040 - 2022, 10 > 0 ? 5 : 0 ] 
console.log(usersAge);


const userNames = new Array('Вася', "Петя", "Катя")
console.log(userNames);

function square(el){
    return el * el
}

console.log(square(6));

const arr = [2, 4, 8, 16]

const squareNums =  arr
.map((nums)=>{
return nums * 2
})

console.log(squareNums);

const users = ['Аня', 'Вика', 'Катя'];
console.log(users);
users[2] = 'Кристина'
console.log(users);
console.log(users.length);

//добавление массива
users.push('Никита')//push возращает длинну массива.
console.log(users);
users.unshift('Вася')//Добавили в самое начало имя Вася
console.log(users);

const el = users.pop()//Удаляет последний элемент массива
console.log(el);
console.log(users);

const el2 =users.shift()
console.log(el2);//Вася был удален 
console.log(users);

