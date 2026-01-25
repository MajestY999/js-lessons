//Обработка событий клавиатуры.

function submitForm(){
    const input = document.querySelector('.input').value;
    if(!input){
        return;
    }
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = ' '
}


// function changeClick(){
//     submitForm()
// }

function inputChanged(e){
if(e.code == 'Enter'){
  submitForm()
}
}

// document.querySelector('.input').addEventListener('keydown', (e)=>{  //используем e как сокращение слова event 
//     if(e.code == 'Enter'){
//          submitForm()
//     }
   
// })
