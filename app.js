const fullUserName = 'Вася aka Terminator Пупкин';//В0а1с2я3 4 a5k6a7 8 T9e0r1m2i3n4a5t6o7r8 9 П0у1п2к3и4н5


const userName = fullUserName.slice(0, fullUserName.indexOf(' '))
console.log(userName);
const userSurname = fullUserName.slice(
    fullUserName.lastIndexOf(' ') + 1,
    fullUserName.length
)
console.log(userSurname);

