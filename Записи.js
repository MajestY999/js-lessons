
/* Что такое переменные  */

let name = "Artem"; // let - это ключевое слово обьявления name -- Название переменной, 'Artem' -- Окончание выражения


/* Наименование переменных  */

//Правильно 

/* 
let userName = 'Artyom',
let myClass8 = 8,
let $myVar = 'var',
let  _name = 'Антон'

*/

//Как не правильно 
/* 
let user_name = 'Вася', 
let UserName = 'Вася',
let 8myClass = 8;
let my-Var = 'var',
let const = '1'
*/


let h = 1

console.log(h)

h = 'test'
console.log(h) //тут произошло перепресвоение, но const нельзя перепресвоить 


// Базовые арифметические операторы

const width = 10;
const height = 5;
const space = width * height 

const newWidth = width - 4
const newWidth2 = width + 4
const newWidth3 = newWidth /newWidth2
const volume = 2 **3
console.log(volume)

// Строки (конкатенация)
const city = 'Москва';
const street = 'Новослободская';
console.log(city + ', ' +  street + ' '+5)

/* Операторы присваивания и сравнения */
let age = 18 + 5;  //тут операторы присваивания

age += 2;// age = age + 2 
age -= 3// age = age - 3
age *= 2 //увеличим в 2 раза age = age * 2
age /= 2//Это мы уменьшим на 2 age = age / 2

age++; //увеличение на единицу //age = age +  1
age--; // age = age - 1
console.log(age)

//Операторы сравнения 
const Vasia = 20;
console.log(age > Vasia)
console.log(age >= Vasia)
console.log(age < Vasia)//false
console.log(age <= Vasia)//false
console.log(age == Vasia)//false


//Порядок операторов

const isSuted = 100 - 10 /* это первое  */ > 90 - 5;

console.log(isSuted);

//const isSuted = 100 - (12) 10 >(10) 90 - (12) 5

//Группировка

const j = (6 + 10) / 2; //тут нужны скобки, короче школьная база алгебры или математики
console.log(j);

let H;
let N;

c = b = 100 + 50 + 30
console.log(N)
console.log(H)


//Типы данных 

const user = {
    name: 'Артем',
    age: 19
} //Это Обьект  


//Примитивные виды 

/* 
const age = 18; -- Числа

const surname = 'Иванов'; -- Строки

const isAdmin = true; -- true или false

const isAdmin = undefiend; --не заданное значение 
let data // undefiend

let data = null; Пустое значение 

const admin = Symbol('Admin') Уникальное  неизменное значение

const big = BigInt(999999999) Работа с большими числами

*/


let a = 5;
let b = 5.6

console.log(typeof a) //string or number

e = 'dhwjklk'
console.log(typeof e)

let isAdmin  = false
console.log(typeof isAdmin)// boolean


let c; 
console.log(typeof c)//undefined
c  = 5; 
console.log(typeof c); //number


let d = null;
console.log(d == null); //object лучше null  не использовать так как у него очень странное поведение при определении типа





/* Шаблонные строки (Литеральные строки) */

const projectName = "Сайт магазина";

const price = 2000;
const author = "Василий Пупкин";

const template = author + "заказал " + projectName + " по цене " + price + "$";

const template2 = `${author}  заказал  ${projectName} по цене ${price}$`; //Короче база о ``
console.log(template2);

const template3 = "Проект \n" + "Цена: " + price + "$";
console.log(template3);

const template4  =`Проект
Цена: ${price}$`;

console.log(template4);



//Преобзарование типов (Конвертация типов)

//Пример

const age1 = "18"; //строка

console.log(Number(age) + 5); //получится 185? если будем использовать без Number().  Короче если где-то есть плюс  и где-то ессть мтрока то все выражение он будет их приводить к строкам и будет конкатенация
console.log(age - 3); //но если будет -, *, /. То тогда он понимает что это математическая операция над числами  и он понимает что, если у нас строка то ее нужно ппривести к числовому виду.

const userName = "Вася";
console.log(userName + 5); //Вася5
console.log(Number(userName) + 5); //Будет NaN потому что у нас строки а не числа, да даже не строки а буквы и они никакого отношения не имеют к числам
console.log(typeof NaN);
console.log(String(4) + 7); //Да и также при использовании сначала числа которое в ''например '4'  и  сложении 7, они будут склеиваться так как одно является строкой второе числом, просто говоря будет тоже самое как с именем и  Вася47
console.log(Boolean()); //при пустом ''  значении ('') или  нулю будет ответ false, при любом другом значении  даже -100 будет ответ true.






/* console.log(Boolean(0));// false
console.log(Boolean(''));// false
console.log(Boolean(undefined));// false
console.log(Boolean(null));
console.log(Boolean(Number('nx'))); //Сначала отработка внутренней функции конвертации, пото внешней функции
 */


console.log(String('10') - 5 + Boolean('') + '1');

firstName = 'Иван'

console.log(Boolean(0));



// Булева логика 

/* 
Основные Операторы
Оператор "И" (AND)
Символизируется как "&&".
Результат true, если оба условия истинны (а && б = true, если и а, и б истинны).
Пример: Если а = 5, и это значение попадает в диапазон больше 0.5 и меньше 10, то условие истинно.
Оператор "ИЛИ" (OR)
Обозначается как "||".
Результат true, если хотя бы одно из условий истинно.
Пример: Если а = 100, и заданы условия а > 10 или а < 0, то условие истинно, так как 100 > 10.
Оператор "НЕ" (NOT)
Обозначается символом "!".
Инвертирует истинностное значение (true становится false и наоборот).
Пример: Если а > 10 истинно, то !(а > 10) будет ложно.
Важные Замечания
Операторы булевой логики используются для формирования условных выражений.
Имеет смысл использовать таблицы истинности для лучшего понимания операторов и их результатов, особенно в начале обучения.
*/

// Введение в функции
/* 
function(Ключевое слово) fromMilesToKm(Название функции)  (miles (Аргументы)){
const km =miles / 0.62137;
return km; 
возвращаемое значение;
}
*/

/* 
Всплытие: у обычных функций есть, у анонимных его нет, также у стрелочных его также нету.
Контекст: у обычных есть, у анонимных тоже есть, но у стрелочных его нету.
*/



//Повторение массивов(всех тем по массивам.)
const role1 = 'admin';
const role2 = 'user';
const role3 = 'superuser';

const roles = ['admin', 'user', 'superuser'];
const userinfo = ['Аня', 25]
console.log(roles);

console.log(roles[0]); //admin
console.log(roles[1]);// user
console.log(roles[2]);//superuser
//Как получить последний элемент массива если не знаем длинну массива
console.log(roles.length);// 3 - это длинна нашего массива.
console.log(roles[roles.length - 1]);// super user
console.log(roles.at(-1));// тот же пример как и выше
console.log(roles.at(0));//admin, тут просто выводится элемент массива admin под индексом 0

const usersAge = [2040 - 2022, 10 > 0 ? 5 : 0]; //мы также в массивах можем использовать тернарные операторы.
console.log(usersAge);

const userNames = new Array('Вася', 'Петя', 'Катя');
console.log(userNames);

function square(el){
    return el * el
}

console.log(square([1, 2, 3])); //25, если  мы используем число.square(5), но если мы используем массив, то у нас будет   NaN, но при сложении у нас просто произойдет контакатенация двух массивов: return el + el
   
console.log('----------------------Управление элементами массивов----------------------------');


const users = ['Аня', 'Вика', 'Катя'];
console.log(users);//До 
users[2] = 'Кристина'
console.log(users);//После
//Но изменять еще раз массив, то есть прописывать значения которые мы поменяли потому что у нас значения const           ['Аня', 'Вика', 'Кристина'];
users[3]= 'Никита'
console.log(users); //  ['Аня', 'Вика', 'Кристина', 'Никита'] но если мы пропишем значение массива users[4] то у нас будет пустное значение потом и имя элемента.

const arrLenght = users.push('Иван') //то есть массив возращает (const arrLenght) длинну измененного массива
console.log(users); //['Аня', 'Вика', 'Кристина', 'Никита', 'Иван'] произошло так сказать мутированние масссива
console.log(arrLenght);//5

//добавление в начало массива unshift 
users.unshift('Вася')//  ['Вася', 'Аня', 'Вика', 'Кристина', 'Никита', 'Иван']
console.log(users);
//Удаление элементов массива
const el = users.pop()
console.log(el); //Возвращает последний удаленный элемент Иван. То есть для этого мы и можем использовать константу чтобы через нее узнавать, какой элемент был удален в массиве.
console.log(users);

//Еще один способ удаления элементов массива
const el2 = users.shift();// удалили первый элемент Вася. 
console.log(el2);
console.log(users);

console.log('-------------------------Поиск элементов массивов----------------------------');

//Поиск элементов. 
const roles1 = ['user', 'admin', 'manager'];
console.log(roles1);
const elIndex = roles1.indexOf('admin')//индекс элемента 1
const elIndex2 = roles1.indexOf('superuser')// -1, значение из-за того что этого элемента нет в нашем массиве.
console.log(elIndex);

if (roles1.indexOf('admin') >= 0){
    console.log('Доступ есть');
}

console.log(roles1.includes('admin'));//true


if (roles1.includes('admin')){
    console.log('Доступ есть');// Такая схема часто используется потому что она записывается просто, для проверки наличия какого либо элемента.
}


console.log('-----------------------------Slice, splice, concat, reverse.----------------------');
// Slice, splice, concat, reverse.

const roles2 = ['user', 'admin', 'manager', 'superuser']

const res = roles2.slice(2)//метод slice удалил два элемента под индексом 0 и 1, и у нас осталось всего два элемента начиная со второго индекса: manager, superuser
console.log(roles2);//но также метод slice не модифицирует исходный массив
console.log(res);

const res2  = roles2.slice(0, 2)
console.log(roles2);
console.log(res2);

const res3 = roles2.slice(-1);
console.log(res3);
//const res4 = roles2[roles2.length - 1]
const res4 = roles2.slice(1, -2);
console.log(res4);
console.log(roles2);
// const res5 = roles2.splice(2)//splice возвращает модифицированный массив, делая его меньше.
// console.log(res5);
// console.log(roles2);

// const res6 = roles2.splice(2, 1)//splice возвращает модифицированный массив, делая его меньше.
// console.log(res6);
// console.log(roles2);

// const res7 = roles2.splice(-1);
// console.log(res7);

const res8 = roles2.reverse()//переворачивает весь массив задом на перед.
console.log(roles2);

const newRoles = ['sysAdmin', 'developer']
const res9 = roles2.concat(newRoles)
console.log(res9);





console.log('-----------------------Из строки в массив и обратно------------------------------');

const roles3 = ['user', 'admin', 'manager', 'superuser']


const url = 'url/user/login';
const Res = url.split('/')//тут используем метод строки который может преобразовывать исход url к массиву.
console.log(Res);//(3) ['url', 'user', 'login']

//в обратную сторону.

console.log(roles3.join('-'));//join обьеденяет элементы массива в строку 