//Примеры scope chain или контекстами 
'use strict'
let successMessage = 'Успех'
const user = {
  name: 'Вася',
  roles: []
}

function addRole(user, role){
  if(role == 'admin'){
    const message = 'Ошибка'
    console.log(message);
    return user
  }
  user.roles.push(role);
  let successMessage = 'Ура';
  console.log(successMessage);//successMessage машина искала его по всему коду даже если его нет внутри функции

  function logRoles(){
    console.log(user.roles);
  }
  logRoles()//тут потому что есть внутри обьявленна в функции user
  return user;
}
console.log(addRole(user, 'admsin'));
console.log(successMessage);//но если тут прописать тогда просто будет работать текущее сообщение как выше то есть если оно есть внутри то оно будет только с внутренним сообщением