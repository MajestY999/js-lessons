//slice, concat, reverse, splice
const  roles = ['user', 'admin', 'manager', 'superuser'];

const res = roles.slice(2);//он берет и отрезает кусок из начала(точнее два элемента)
console.log(roles);
console.log(res);

const res2 = roles.slice(2, 3)//то есть у нас начинается новый массив с manager так как его индекс это 2, но 3 не включается в этот массив так как  в slice правая граница не входит в результат. Всегда.
// Но начало игнорируется так как мы просто игнорируем начало, а точнее все что до нашего начального элемента start
console.log(roles);
console.log(res2);

// const res3 = roles.slice(0, 3)//Тут как раз и видно что мы начальный массив вообще не обрезаем так как он начинает с самого начала, а конец у нас без последнего элемента с индексом 3 superuser 
// console.log(roles);
// console.log(res3);

// const res4 = roles.slice(-1)[0]//берет последний элемент массива и выводит его, он чтобы вывести также как в нижнем варианте текстом нужно написать квадратные скобки и внутри нуль
// console.log(res4);
// const resultArr = roles[roles.length - 1]
// console.log(resultArr);//точно такой же результат

// const res5 = roles.slice(1, -2)//То есть мы берем так что первый и последний элемент не затрагивая 2 средних элемента, и еще  не затрагиваем manager так как он является правой границей и она всегда не входит в результат.
// console.log(res5);
// console.log('----------------------------Splice----------------------------------');

// const res6 = roles.splice(2, 1)// и то есть тут мы взяли опять также что мы берем manager и  superuser, но выводим только менеджера по той же тактике.  
// // разница splice и slice в том что если вывести наш массив после изменений то он быдет обрезан, но это не будет локально то есть не просто внутри slice, а уже навсегда
// console.log(res6);//то етсь у нас slice не модифицирует наш исходный массив, то splice как раз таки это и делает. 
// console.log(roles);
// //array.splice(start, deleteCount) Вот как работае метод splice 

// const res7 = roles.splice(-1)
// console.log(res7);//получим user admin manager,  то есть пропадет последний элемент массива.

console.log(roles)
const res8 = roles.reverse()//Делает переворот массива, послоедний стал первым и наоборот
console.log(res8);
console.log(roles);

const newRoles = ['sysadmin', 'developer']
const res9 = roles.concat(newRoles)
console.log(res9);//Добавились новые данные с 4 индекса. и в общем 6 индексов стало 