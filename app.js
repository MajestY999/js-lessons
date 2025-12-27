// Scope — область, где можно "видеть" и использовать переменные/функции.
// Scope бывает: глобальным, функциональным (локальным), блочным.
// Scope не связан ни с массивами, ни с объектами напрямую.

//Пример использования this 
'use strict'
function addNum(num1, num2){
  console.log(this);
}
addNum(); //из за strict режима он пуст. но без него появиться окно window

const  addNum2 = (num1, num2) => {
  console.log(this);
  return num1 = num2
}

const user ={ 
  name: 'Вася',
  surname: 'Пупкин',
  getFullName: function(){
    console.log(this);
    return this.name + ' ' + this.surname;
  }
}

user.getFullName()

const user2 = {
  name: 'Марина',
  surname: 'Катц',
}

user2.getFullName = user.getFullName
user2.getFullName()

const getFullName = user2.getFullName()
getFullName()//будет ошибка