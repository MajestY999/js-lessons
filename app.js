//Slice, splice, concat, reverse.
const roles = ['user', 'admin', 'manager', 'superuser'];

const res = roles.slice(2)//Оставил только 2 элемента, то есть оставил кусок
//console.log(roles);
console.log(res);


const res2 = roles.slice(0, 2)//оставил manager, в качестве первого аргумента, он принимает начальный индекс, а в качестве второго элемента конечный индекс
//console.log(roles);
console.log(res2);
//const res2 = roles.slice(0, 2) тут интуитивно понятно, что будут отображаться только два элмента с индексами 0 то есть первый и под индексом 1. Но 3 под индексом 2 не будет.

const res3= roles.slice(-1)[0] //slice (-1) тоже самое как и at или как ниже я напишу.
const res4 = roles[roles.length -1]
console.log(res3);
console.log(res4); // superuser


const res5 = roles.slice(1, -2) //то есть -2 это мы идет с конца с superuser, и до admin и результат будет admin.
console.log(res5);
console.log(roles);//после всех изменений не будет изменен

// const res6 = roles.splice(2)//берет 2 последнийх элемента массива manager, superuser.
// console.log(res6);
// console.log(roles);//и тут получается что наш массив стал короче и осталось там только два элемента user, admin

// const res7 = roles.splice(2, 1)// тут тоже самое мы берем со второго индекса например тольок один элемент то есть manager
// console.log(res7);//manager, superuser
// console.log(roles); //user, admin

// const  res8 = roles.splice(-1)//то есть у нас просто удалиться последний индекс и элемент superuser.
// console.log(res8);
// console.log(roles);

const res9 =  roles.reverse();//произршел переворот элементов первый стал последним, а последний стал первым
console.log(res9);//вместо такой записиconst res9 = roles.reverse();  можно использовать roles.reverse() и все будет тоже самое
// (4) ['user', 'admin', 'manager', 'superuser']
// (4) ['superuser', 'manager', 'admin', 'user']

//Конкатенация массива

const newRoles = ['sysadmin', 'developer'];
const res10 = roles.concat(newRoles)
console.log(res10);//в массив добавилось еще два индекса ['sysadmin', 'developer'];


//Мои примеры

const students = ['Ivanchenko', 'Popkin', 'Pupochkin', 'Geroinov']
const studentsrev = students.reverse()
console.log(studentsrev);

const newStudents = ['Prihodko', 'Dobrev', 'Alexandrov']
const newStudConcat  = students.concat(newStudents)
console.log(newStudConcat);


const deleteStud = newStudConcat.slice(1, -1) //(5) ['Pupochkin', 'Popkin', 'Ivanchenko', 'Prihodko', 'Dobrev']
console.log(deleteStud);