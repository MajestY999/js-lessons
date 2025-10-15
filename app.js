//Операторы с другими типами 
console.log('Вася' || 'Олег'); // Выведется Вася
console.log(false || 'Олег'); //Выведется Олег 
console.log('Вася' || false ); //Выведется Вася
console.log(false || false); // false

console.log('Вася' && 'Олег'); // Олег так как первый элемент true
console.log(false && 'Олег'); //false
console.log('Вася' && false); //false
console.log(false && false); //false

let a;
const userName = a || 'Петя';
console.log(userName);


const isAdmin = true;
const fileName = isAdmin && 'file.mp4'
console.log(fileName);