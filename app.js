// Упражнение -- Кредит на макбук

/* 
Нужно проверить может ли он купить новый MacBook за 2000$? 
Он может брать не только свои деньги, но и взять кредит.
Ему дадут 500$, только если ему больше 24-х лет и он имеет работу,
 100$ если ему просто больше 24-х лет и 0 в ином случае. 
Напишите функцию, которая принимает данные пользователя и товара и возвращает true или false.
*/

const creditMoney500 = 500
const creditMoney100 = 100
const PriceMacBook = 2000


function canBuyMacBookAndtakeCredit(age, haveWork)
{  if(age >= 24 && haveWork )
  {
     return creditMoney500
  } 
  else if( age >= 24 && !haveWork){ 
    return creditMoney100
  }
   else { 
    return 0 
  } 
}

function canBuyMac(age, haveWork, money) {
  return money + canBuyMacBookAndtakeCredit(age, haveWork) >= PriceMacBook;
}
console.log(canBuyMac(25, false, 1900)); // Если написать значения  возраст: 25, есть работа или нет: true || false, и денги например 1800, но цена макбука 2000, а у нас только с кредитом например 1900(Короче просто потому что денег у нас будет меньше чем цена мака. вот поэтому фалс,а если бы было бы даже больше например у нас есть 1900 с кредитом будет 2400, короче вот так.), то выведется false, так как у нас денег мне как по функции то есть   return money + canBuyMacBookAndtakeCredit(age, haveWork) >= PriceMacBook, тут понятно что если у нас будет мало денег то будет уже false.  как и с возрастом также.



//Пример преподавателя

function  computeCredit(age, hasJob = false) {
  switch(true){
    case age > 24 && hasJob:
      return 500;
    case age > 24:
      return 100;
      default:
        return 0;
  }
}

function canBuy(productPrice, age, hasJob, money) {
  const creditMoney = computeCredit(age, hasJob);
  return productPrice  <= money + creditMoney
}

console.log(canBuy(2000, 25, true, 1500));
