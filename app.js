//Замыкание
'use strict'

function changeBalance(){
  let balance = 0;
  return function(sum){
    balance += sum;
    
    console.log(`Баланс: ${balance}`);
  }
}
//Замыканеи это комбинация функций и лексического окружения, в котором эта функция была определена. 
//Простыми словами: функция помнит, в каком контексте она была создана и может его использовать

const change = changeBalance();//Является не разрывной частью нашей новой функцией и замыкание имеет более сильный приоритет 
change(100)
change(-50)
change(200)
console.dir(change);

const change2 = changeBalance();//Функция начнется с нуля и увеличится на сто как по нашей функции
change2(100);
console.dir(change2);