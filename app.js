//Пример примитивов и обьектов
'use strict'
let user = {
    name: 'Anton',
    id: 1,
    roles: ['admin']
}
// user.name = 'NewUser'

const newUser  = Object.assign({}, user);//Делает присвое не ссылки обькт в пользователя а создает новый обьект.
// console.log(newUser);
const newUser2 = {
  ...user
}
newUser2.name = 'NewUser';
newUser2.roles.push('User')
console.log(user);
console.log(newUser2);

