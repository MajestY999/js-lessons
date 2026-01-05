//Из строки в массив и обратно
const roles = ['user', 'admin', 'manager', 'superuser'];

const url = 'aunt/user/login';
const res = url.split('/')//split в переводе означает разбить то есть мы будем делить данные на что то, в нашем случае мы делим наш url на массив из трех элементов
console.log(res);

console.log(roles.join('-'));
