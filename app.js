//Ключевое слово this

//this это переменная которая создается внутри контекста исполнения. Она указывает на владельца этой функции.
//this не является статичным и опеределяется только при вызове функции в зависимости от того, как она названа 
// в стрелочной функции он работает this родительского scope то есть не во внешний а только внутри в функции он является undefined
//в методе работает на объекте этого метода

//Пример использования this 
//'use strict'

//console.log(this);//он равен тому ж еокну потому что получает те же данные и чем является приложение

function addNum(num1, num2){
    //console.log(this);//this = undefiend, это он выводит когда ипользуем strict mode 
    return num1 + num2
}

addNum()

const addNum2 = (num1, num2)=> {
    console.log(this);
    return num1 + num2
}

//addNum2()
//Как работает  this с объектами 

const user = {
    name: 'Вася',
    surname: 'Пупкин',
    getFullName: function(){
        console.log(this);
        return this.name + ' ' + this.surname
    }
}
user.getFullName()
//console.log(user.getFullName());
const user2 = {
    name: 'Марина',
    surname: 'Катц'
}

user2.getFullName = user.getFullName;
user2.getFullName()

