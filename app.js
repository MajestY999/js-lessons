//добавление html на лету
'use strict'
function submitForm(){
const input = document.querySelector('.input').value
if(!input){
    return;
}
document.querySelector('.panel').innerText = input;
document.querySelector('.input').value = ' ';
// document.querySelector('.notification').classList.add('notification_active')
document.querySelector('.notification').classList.remove('notification_hidden')

//document.querySelector('.notification').classList.replace('button', 'newButton')
}

function inputChanged(e){
if(e.code == 'Enter'){
    submitForm()
}
}
//JSON

const obj = JSON.parse('{"a" : 1}') //Натация каких либо объектов и если бы наше число было было бы строкой  то и в объекте он тоже строкой была бы. 
console.log(obj);

const str = JSON.stringify(obj)
console.log(str);//тут как раз и по названию понятно что берет объект и преобразует его в строку
