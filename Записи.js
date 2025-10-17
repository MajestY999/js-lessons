
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
Всплыти: у обычных функций есть, у анонимных его нет, также у стрелочных его также нету.
Контекст: у обычных есть, у анонимных тоже есть, но у стрелочных его нету.
*/
