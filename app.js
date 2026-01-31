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
//создание html на лету
const panelText = 'Панель'
const newElement = document.createElement('div');
newElement.setAttribute('user-id', 1);
newElement.classList.add('panel');
newElement.innerText = 'Button';
newElement.innerHTML = `<button class=${panelText}">${panelText}</button>`
document.querySelector('.test').appendChild(newElement);

