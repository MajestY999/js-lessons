//Поиск элемента 
const roles = ['user', 'admin', 'manager'];

//спец методы которые могут искать по самому массиву
//onsole.log(roles.indexOf('admin'));//1
const elIndex = roles.indexOf('admin');
console.log(elIndex);//тоже 1
//indexOf работает так что  он ищет первое вхождение в массиве, если нашел то все отлично
const elIndex2 = roles.indexOf('superuser') //-1 так как этого элемента не существует
console.log(elIndex2);

if (roles.indexOf('admin') >= 0){
    console.log('Доступ есть');
}

console.log(roles.includes('admin'));//includes возвращает true или false
console.log(roles.includes('superuser'));//false

if(roles.includes('admin')){
    console.log('Доступ есть');
}

