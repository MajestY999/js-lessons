//Обращение к элементам.
const user ={
        name: 'Вася',
        surname: 'Пупкин',
        age: 24,
        skills: [
            'Программирование',
            'Готовка'
        ],
        uduBasic: 'Школа 10',
        eduPro: 'МФТИ'
};

console.log(user);
console.log(user.skills[0]);//Можно использовать порядок операторов.
console.log(user['skills']); //(2) ['Программирование', 'Готовка']
const level = 'Pro'
console.log(user['edu' + level]); //МФТИ

// const res = prompt('Введите свойство');
// console.log(user[res]);
user.cuty = 'Москва'
user['city'] = 'Москва'
console.log(user);

user.age = 30
user['age'] = 30
console.log(user);
