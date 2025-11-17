//Преобразование строки. и методы проверки.
const str = 'Вася Пупкина'
console.log(str.includes('а'));
console.log(str.startsWith('В'));
console.log(str.endsWith('н'));
console.log(new String ('Вася Пупкин').includes('а'));//true    

console.log(str.toLowerCase());//полностью маленький текст.
console.log(str.toUpperCase());//капсом 
console.log(str.replace('В', 'Ф'));
console.log(str.replace('П', 'Д'));
console.log(str.replace('а', 'и'));
//console.log(str.replaceAll('a', 'и'));
console.log(str.replace(/a/g, 'и'));

const str2 = ' Вася Пупкина   \n'
console.log(str2.trimStart());
