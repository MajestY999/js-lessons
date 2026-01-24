'use strict'
//обработка нажатий
// document.querySelector('.button').addEventListener('click', function(e){
//     //console.log(e); //детальная информация что произошло. Обработчик событий в каком-то смысле
//     const input = document.querySelector('.input').value
//     if(!input){
//         return
//     }
//     console.log(input);
//     document.querySelector('.panel').innerText = input;
//     document.querySelector('.input').value = ' '
// })

function changeClick(){
    const input = document.querySelector('.input').value
    if(!input){
        return
    }
    console.log(input);
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = ' '
}

//Как вызвать соббытия чтобы добавить все что было до 