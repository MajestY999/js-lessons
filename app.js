//Условия в функциях 
function canAccessWebSite(age){
  if(age < 18){ 
    return 'Нет';//false
  }  { //можно убрать else и все будет точно также как и с ней.
    return 'Да'; //true
  }
}
console.log(canAccessWebSite(18));
//Ниже пример использования и повторения тернарных операторов.
const canAccessWebSite2 = age => age < 18 ?/* знак означает: тогда */ 'Нет'  /* или Да если первое условие не подходит */: 'Да';
console.log(canAccessWebSite2(18));



