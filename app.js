//Из строки в массив и обратно

const  roles = ['user', 'admin', 'manager', 'superuser'];

const url = 'auth/user/login'
const res = url.split('/')// то есть мы разбили нашу исходную строку на массив. (3) ['auth', 'user', 'login']. Это метод строки который позволяет преобразовывать исходный url к массиву.
console.log(res);

//в обратную сторону. 
console.log(roles.join('-')) //обьеденение элементов в строку user-admin-manager-superuser 