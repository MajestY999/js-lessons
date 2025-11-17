//Повторение с начала темы: Работа со  строками.
const userName  ='Вася Пупкин'
console.log(userName[0]);//В
console.log(userName[1]);//а
console.log(userName.charAt(2));//с
//Но эмодзи тратят 2 места в массиве и будет появлятся знак с вопросом так как он не может отображаться в консоле.
console.log(userName.length);//11
console.log(userName.indexOf('П'));//5
console.log(userName.lastIndexOf('а'));
console.log(userName.includes('Вася'));
console.log(userName.slice(4));//Остался пробел и фамилия.
console.log(userName.slice(5, 8));