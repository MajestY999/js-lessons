//Пример работы scope chain
'use strict'

let successMessage = 'Успех';
const user = {
    name: 'Вася',
    roles: []
}
function addRole(user, role){
    if(role == 'admin'){
        const message = 'Ошибка'
        console.log(message);
        return user
    }
    user.roles.push(role)
    console.log(successMessage);
// let successMessage = 'Ура' тут так сказать я объявляю новую переменную 
// console.log(successMessage);
    function logRoles(){
        console.log(user.roles);
    }
    logRoles()
    return user
}

console.log(addRole(user, 'admsin'));
console.log(successMessage);//Тут будет ура