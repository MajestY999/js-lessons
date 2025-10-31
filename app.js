//Возврат функций(Возвращение одной функции из другой) 
/* function power(pow){
 return function(num){
    return num **pow
 }
} */

 const power = (pow) => {
    return function(num){
        return num ** pow
    }
 }

 // const power = pow => num => num**pow Пример препода, работает как мой или как выше в функциях. Это лечге, но для меня пока что мой пример привычнее, так как у меня мало опыта.

const powerOfTwo = power(2)

console.log(powerOfTwo(5));//25
console.log(powerOfTwo(10));//100

const powerOfThree = power(3)
console.log(powerOfThree(5));


console.log(power(5)(4));//Короче все просто тут  у нас будет так что у нас 4 это num, а вот 5 это pow  так как первое в функции power это pow то есть он будет степенью, а num числом, то есть тут м обьявляем что у нас степень будет треться то есть pow = 3 const powerOfThree = power(3), а тут будет число которое мы будет возводить в степень то ечть оно будет основным то есть 5 ** 3 = 125  console.log(powerOfThree(5));

console.log(power(2)(8));


//let sq1 = x => y + x => z + y;
//console.log(sq1(2)(2)(2));  //JavaScript не понимает, где заканчивается первый => и начинается второй.
//Он думает: y + x — это выражение, а дальше => z + y — уже непонятно.
//sq(x)(y)(z) = x + y + z
//let sq = x => y => z => x + y + z;
//console.log(sq(2)(2)(2)); // 6

//Ошибка **не из-за + или ***, а из-за неправильного синтаксиса стрелочных функций.
//Каждая стрелочная функция должна быть правильно замкнута и разделена стрелкой =>.

let sq = x => y => z => x + y + z;
console.log(sq(2)(2)(2)); // 6
// Первый вызов: x = 2
// Второй: y = 2
// Третий: z = 2
// Результат: 2 + 2 + 2 = 6


//num = 1  ---> передаётся внутрь b ---> n = 1

function a(num, b) {
    return b(num);//num = 1  ---> передаётся внутрь b ---> n = 1
}
console.log(a(1, (n) => n + 5));


let cube = x => y => z => x * y * z
console.log(cube(2)(2)(2))//y => z => 2 * y * z;    z => 2 * 2 * z  // x=2, y=2; y => 2 * 2 * 2    cube(2)(2)(2) Итог 8  



const operations = [100, 250, 700, 800, -250, 350]
const myBalance = 250

function getBalance() {
    let balance  = myBalance
    for (const element of operations) {
        balance += element
    }
    console.log(balance);
}
getBalance()