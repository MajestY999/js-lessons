//Возврат функций(Возвращение одной функции из другой) 
function power(pow){
 return function(num){
    return num **pow
 }
}

const powerOfTwo = power(2)

console.log(powerOfTwo(5));//25
console.log(powerOfTwo(10));//100

const powerOfThree = power(3)
console.log(powerOfThree(5));


console.log(power(5)(4));//Короче все просто тут  у нас будет так что у нас 4 это num, а вот 5 это pow  так как первое в функции power это pow то есть он будет степенью, а num числом, то есть тут м обьявляем что у нас степень будет треться то есть pow = 3 const powerOfThree = power(3), а тут будет число которое мы будет возводить в степень то ечть оно будет основным то есть 5 ** 3 = 125  console.log(powerOfThree(5));
