//Выбор и манипуляция с элементами 
'use strict'
// console.log(document);
// addEventListener('load', ()=> {
//     console.log(document);
// })
//console.log(document.querySelector('panel'));//выбор по css селектору какого либо элемента 
const panelText = document.querySelector('.panel').innerText;
console.log(panelText);
document.querySelector('.panel').innerText = 'New text'
document.querySelector('.input').value = 'Text'

