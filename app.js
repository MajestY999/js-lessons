//Примитивы и обьекты
'use strict'


let firstName = 'Anton'
let firstName2  = firstName
firstName  = 'New'
console.log(firstName);
console.log(firstName2);

const user1= {//object literals
    name: 'Anton'
}
const user2 = user1
user2.name = 'New'

console.log(user1);
console.log(user2);
//Одинаковые названия в виде new потому что это объекты а выше это примитивы


//Примитивы
//Number, String, Boolean, Undefined, Null, Symbol, BugInt

//Объекты
//Object Literals, Arrays, Functions ...


//Разница в том как они хранятся

//Call stack -- это Primitive type

//Heap -- Reference type(объекты и т.д) или просто ссылочные питы. 