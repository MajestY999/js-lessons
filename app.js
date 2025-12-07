//Деструктуризация и rest

// const arr  = [1, 3, 4]
// const  [z, y, x] = arr;
// console.log(y);

const  user = {
    name: 'Вася',
    age: 40,
    city: 'Moscow',
}

const {age, ...userWithouAge} = user//Это так сказать удобная деструктуризация

console.log(age);
console.log(userWithouAge);// и это rest оператор

//Спред оператор

const additionalData = {
    skills: ['Разработка', 'Дизайн'],
    creditCard: '2342-2345-2734-2356'
}

user.test  = 'sfdsf'

// user.skills = additionalData.skills //нам не нужно первоначально повторяться с additionalData чтобы было вложение обьекта в обьект
// user.creditCard  = additionalData.creditCard; //Этио не очень уж удобно так что лучше так не писать

// user = {
//     ...user,//Троеточием показываем что мы берем все элементы из наших обьектов и переносим их в один обьект, чохраняя их у нашего пользователя
//     ...additionalData
// }
console.log(user);

//Раскрывает (spread — "распространяет") элементы массива или свойства объекта.
//Собирает ("rest" — "остаток") оставшиеся элементы или свойства в массив/объект.


//spred оператор
//Раскрывает (spread — "распространяет") элементы массива или свойства объекта.
const arr1 = [1, 2];
const arr2 = [3, ... arr1, 4]
console.log(arr2);//[3, 1, 2, 4]

//Rest-оператор
//Собирает ("rest" — "остаток") оставшиеся элементы или свойства в массив/объект.
//Пример с параметрами функции:
function sum(a, ...args){
    //args массив из всех аргументов, кроме первого
    return args.reduce((acc, val)=> acc + val, a)
}

console.log(sum(1, 2, 3));//6

//Пример с деструктуризацией обьекта:
const user2 = {Name: 'Anna', age: 22, city: 'Paris'};
const {Name, ...rest} = user2;
Name = 'Anna', rest = {age: 22, city: 'Paris'}


//Главные отличия

// Spread ("раскладывает") значения, Rest ("собирает") значения.
// Spread используется при создании новых объектов/массивов, или передаче параметров.
// Rest используется в параметрах функции и в левой части деструктуризации для сбора "остатков".