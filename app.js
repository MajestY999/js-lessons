//Поднятие 
//Это возможность использовать определенные типы переменных до того, как они были обьявлены.

//Цикл переменных
//обьявление: это var a(поднятие)
//присвоение: a = 5
//использование: a + 10

//Что такое TDZ
// function addRole(){
//   user.roles.push(role); //это tdz то етсь где наша role не доступна Temporal Dead Zone
//   let successMessage = 'Ура' // это тоже tdz Temporal Dead Zone
//   const role = 'test'
// }

//Пример поднятия
// console.log(a);ошибка и также будет с изменяемой переменой let 
// console.log(b ); ошибка точнее будет undefined
const  a = 3;
var b = 2;
console.log(b);//но тут все в порядке

function addUser(){
  //console.log('user added');


}

addUser()

const arr1 = ()=> {
  console.log('arr1');
}
arr1()

