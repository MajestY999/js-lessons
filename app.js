//Тернарные операторы

const bmwX3Price = 100000;
const fordFocusPrice = 10000;
const budget = 20000;

let message = budget > bmwX3Price ? "BMW" : budget > fordFocusPrice ? "Ford" : "Велосипед";

if (budget > bmwX3Price) {
  message = "BMW"; //Но у нас не видно этого блока так как он находится во внутренней част блока, то есть он должен находиться снаружи, и только мы можем его присвоить только без использования let
} else if (budget > fordFocusPrice) {
  message = "Ford";
} else {
  message = "Велосипед";
}

console.log(`Я хочу купить ${message}`);

//console.log(`Я могу  купить ${budget >  bmwX3Price ? 'BMW' : 'Велосипед' }`);

/* const bmwX3Price1 = 100000;
const fordFocusPrice1 = 10000;
const budget1 = 20000;
let message1;

if (budget1 > bmwX3Price1)
  message =
    "BMW"; // так тоже будет работать , но это говнисто, то есть код будет дерьмом, потому что не видно нормально разграничения кода
else {
  message1 = "Велосипед";
}

console.log(`Я могу  купить ${budget1 >  bmwX3Price1 ? 'BMW' : 'Велосипед' }`); */

//Пример тернарного оператора

10 > 0 ? console.log("Больше 0") : console.log("Не больше 0"); // Это короче чем код ниже, но работает одинаково.

if (10 > 0) {
  console.log("Больше 0");
} else {
  console.log("Не больше 0");
}

//console.log();

const str = 10 > 0 ? "Больше 0" : "Не больше 0"; //Тут код работает так  что если 10 > 0 выполняется, то переменной str будет  присвоен 'Больше'
//console.log(str); //Больше 0
