//Методы обьектов
const user = {
    name: 'Вася',
    surname: 'Пупкин',
    age: 24,
    getFullName: function(){
        console.log(this);
        return this.name + ' ' + this.surname
    }
};
console.log(user.getFullName());
const arr = [1, 2]
arr.sort();


