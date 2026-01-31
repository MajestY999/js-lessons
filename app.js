// function submitForm(){
// const input = document.querySelector('.input').value
// if(!input){
//     return;



// }
// document.querySelector('.panel').innerText = input;
// document.querySelector('.input').value = ' ';
// // document.querySelector('.notification').classList.add('notification_active')
// document.querySelector('.notification').classList.remove('notification_hidden')

// //document.querySelector('.notification').classList.replace('button', 'newButton')
// }

// function inputChanged(e){
// if(e.code == 'Enter'){
//     submitForm()
// }
// }

// // document.querySelector('.button').addEventListener(SubmitForm, function(e){ 
// //     console.log(e);
// // }) //обработчик событий 
console.log(document.querySelectorAll('.one')[0].innerHTML)

console.log(document.querySelectorAll('.one')[1].innerHTML)

console.log(document.querySelector('#two').innerText)//id = two или так

console.log(document.querySelector('[user-id]').innerText)


//console.log(document.getElementById('two').innerHTML);
console.log(document.getElementsByClassName('one'));
console.log(document.querySelector('one'));
console.log(document.querySelector('[user-id=4]'));