'user strict'
//let, var, const, function, arguments
//scope chain
//this
function sumNum(num1, num2){
  console.log(this);//
  console.log(arguments[0]);//то есть мы выведем чему равно значение первого элемента то есть у нас Num1 = 1, так как у нас снизу прописаны аргументы: console.log(sumNum(1, 4, 3, 7))
return num1 + num2;
}
console.log(sumNum(1, 4, 3, 7));//если вызовем еще аргументы вызовем они нен выведутся так как по условию у нас всего 2 аргумента.

const sumNumArr = (num1, num2)=> {
  console.log(this);
  console.log(arguments);
  return num1  + num2
}
console.log(sumNumArr(1,4,3,7));//у нас будет ошибка потому что у нас стрелочная функция и аргументов нет в стрелочной функции.

