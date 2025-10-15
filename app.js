//Операторы нулевого слияния 
let userName = 0;
console.log(userName || 'Default Username'); //Если просто использован оператор let или null, undefiend, или '', то у нас в консоле будет отображаться  Default userName
console.log(userName ?? 'Default Username');


let age = 0
console.log(age || 18);// тут получаем 18 так как он определяет 0 как false и поэтому выводит 18, поэтому лучше использовать ?? так как он работает корректнее чем ||
console.log(age ?? 18);//0 Используем этот оператор так как он работает корректнее
