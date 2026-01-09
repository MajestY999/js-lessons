//Повторение объектов (знакомство с обьектами, Обращение к элементам.)
const userArray = ['Вася', 'Пупкин', 24];

const user = {
    name: 'Вася',
    surnama: 'Пупкин',
    age: 24,
    skills: [
        'Программирование', 
        'Готовка'
    ],
    eduBasic: 'Школа 10',
    eduPro: 'МФТИ'
}
console.log(user.city)
console.log(user.skills[0])//Будет вызван элемент Программирование
console.log(user['skills'])//Будет тоже самое 
const level = 'Pro'
console.log(user['edu' + level])//МФТИ, но такое же обращение через точку не возможно только при образение через квадратные скобки

//const res = prompt('Введите свойство');
//console.log(user[res])//вызываем свойство обьекта
user['city'] = 'Москва';
console.log(user.city)


user.age = 30;
user['age'] = 30
console.log(user)

