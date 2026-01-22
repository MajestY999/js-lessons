//Замыкание
'use strict'

// function changeBalance(){
//   let balance = 0;
//   return function(sum){
//     balance += sum;
    
//     console.log(`Баланс: ${balance}`);
//   }
// }
// //Замыканеи это комбинация функций и лексического окружения, в котором эта функция была определена. 
// //Простыми словами: функция помнит, в каком контексте она была создана и может его использовать

// const change = changeBalance();//Является не разрывной частью нашей новой функцией и замыкание имеет более сильный приоритет 
// change(100)
// change(-50)
// change(200)
// console.dir(change);

// const change2 = changeBalance();//Функция начнется с нуля и увеличится на сто как по нашей функции
// change2(100);
// console.dir(change2);


const userInfo = {
  balance: 0,
  operations: 0, 
  increase(sum){
    this.balance += sum, this.operations++;
  }
}

function user(){
  const userObj ={...userInfo}
  return function(){
    return userObj
  }
}

const user1 = user()

user1().increase(100)
user1().increase(100)
user1().increase(-50)

console.log(user1());

const user2 = user();
user2().increase(100);
user2().increase(200)
user2().increase(-100)
console.log(user2());