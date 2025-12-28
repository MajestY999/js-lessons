'use strict';
console.log(name);//пустое значение 

const user = {
  firstName:  'Вася',
  lastName: 'Пупкин',
  age: 20,
  getUserInfo: function(){
    console.log(`${this.firstName}  ${this.lastName}`);

   const  canDrink = () =>{
      if  (this.age >= 18){
        console.log('может пить');
      }
      else{
        console.log('не может пить');
      }
      
    }
    canDrink()//ошибка, потому что она не относится к никакому параметру обьекта, но можем использовать  стрелочную функцию. Но стрелочную функцию нужно использовать только когда у нас есть какой либо метод, то есмть например проверка возраста. НО this не будет работать с обысной функцией если у нас в ней есть метод. 
  },
  getUserInfoArrow: () => {
    console.log(`${this.firstName}  ${this.lastName}`);//тут выведется 2  undefined, из за того что поведения контекста, потому что у него нет this во внешнем окружении а наши записи находятся во внутренним окрушении
  }
}

user.getUserInfo()//Выводит имя  фамилия
user.getUserInfoArrow() // undefined потому что this не работает с стрелочными функциями.