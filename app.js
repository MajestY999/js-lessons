//Поиск элемента масисва
const roles = ['user', 'admin', 'manager']

console.log(roles.indexOf('admin'));//если элемент есть в массиве то будет 1 даже если их два в массиве.
const elIndex = roles.indexOf('superuser');//Данный элемент отстутствует получается будет -1, точно также как с true/false
console.log(elIndex);

if(roles.indexOf('admin')>= 0 ){
 console.log('Доступ есть');
}else{
    console.log('Нет доступа');
}

console.log(roles.includes('admin'));//true
console.log(roles.includes('superuser'));//false
if(roles.includes('admin') ){//С этим вариантом удобнее
 console.log('Доступ есть');
}else{
    console.log('Нет доступа');
}