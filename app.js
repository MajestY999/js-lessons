//Знакомство с массивами.
const role1 = 'admin';
const role2 = 'user';
const role3 = 'superUser';

const roles = [  'admin', 'user', 'superUser' ]; 
const userInfo = ['Аня', 25 ];
console.log(roles);
console.log(roles[0]);// admin
//Как получить последний элемент массива если не знаем сколько их.
console.log(roles.length);//3
console.log(roles[roles.length - 1]); // ну тут база 3 - 1 получаем id последнего элемента 

console.log(roles.at(0)); //admin 
console.log(roles.at(-1));//тоже самое как с roles.length -1. Получим supeUser

const usersAge = [2040 - 2022, 20 - '6', /* тут конкатенация строк. */ 10 > 0 ? 5 : 0] //но тут мы  можем использовать тернарный оператор
console.log(usersAge);

const userNames = new Array('Вася', 'Петя', 'Катя');
console.log(userNames);

function squer(el){
 return el * el;
}

console.log(squer(5)); //console.log(squer([1, 2, 3])); Будет NaN так как у нас работа с массивами а не числами, таким образом нам нельзя так делать