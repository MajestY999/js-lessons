//Повторение обьектов.

//Знакомство с обьектами.
const userArray = ['Вася', 'Пупкин', 24]
const user = {
 name: 'Вася',
 surname: 'Пупкин',
 age: 24,
 skills:[
    'Программирование',
    'Готовка',
 ],
 eduBasic: 'Школа 10',
 eduPro: 'МФТИ'

};


//Обращение к элементам. //Member acsess notation 
console.log(user.city);
console.log(user.skills[0]);//dotnotaition
console.log(user['skills']);//breakong notation  ['Программирование', 'Готовка'] Это обращение для расчетных свойств. но для верхнего оно не доступно.
const level = 'Pro'
console.log(user['edu' + level]); //eduPro


//const res = prompt('Введите свойство');
//console.log(user[res]);
user['city'] = 'Москва'
console.log(user.city);//

user.age = 30;
user['age'] = 30
console.log(user);


//Сортировка обьектов
// const user = [  
//     { name: 'Вася', age: 30 },  
//     { name: 'Катя', age: 18 },  
//     { name: 'Аня', age: 40 },  
//     { name: 'Петя', age: 25 }
// ];

// user.sort((a,b)=> a.age - b.age)//Сортировка обьектов по возрасту, от самого младшего до самого страшего.
// console.log(user); //От 18 до 40

const users =[
    {
        name: 'Вася',
        surname: 'Пупкин',
        age:30,
        skills:['Разработка','DevOps']
    },
    {
        name: 'Катя',
        surname: 'Белова',
        age: 18,
        skills:['Дизайн']
    }
];

const userData = users.map(Users => {
    return{
        fullName: `${Users.name} ${Users.surname}`,
        skillsLenght: `${Users.skills.length}`
    }
})

console.log(userData);

//Методы обьектов
const newUser = {
    name: 'Вася', 
    surname: 'Пупкин',
    age: 24,
    getFullName: function(){  
    return  this.name + ' ' + this.surname
}
};
console.log(newUser.getFullName())

const arr  = [1, 2]
arr.sort()




const arr10 = [10, 15, 20, 45]

arr10.forEach((el, n)=> {
  console.log(`У вас на счету ${el}`);
})



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Ваш код здесь
   for(let i = 0; i <  numbers.length ;  i++){
if(numbers[i] % 2 === 0){
 console.log(numbers[i]);
}}


//Упражнение кошелек
const wallet = {
  balance: 0,
  operations: [],
  increase: function(sum, reason){
    this.balance += sum
    this.operations.push(`${reason}: true`)
    return `Пополнение на ${sum} 
    По причине:${reason} `
  },
  decrease: function(sum, reason){
    if(this.balance < 0){
        return false
    }
    this.balance -= sum
    this.operations.push(`${reason}: true`)
    return `Снятие на ${sum}
    По причине:${reason}`
  },
  getOperationsLength: function(){
    return wallet.operations.length
  }
}
console.log(wallet.increase(1000, ' Перевод'));
 console.log(wallet.decrease(1000, 'Налоги'));
 console.log(wallet.getOperationsLength());// 2
// console.log(wallet);









