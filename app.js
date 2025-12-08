//Optional chaining
const cities =  {
  msk: {
    temp: {
      celcius: 25
    }
  },
  spb: {

  }
}

const city = 'krd'

if(cities[city] != undefined && cities[city].temp != undefined){
console.log(cities.spb.temp.celcius);
}
  else{
  console.log('Данные отстутствуют');
 }


 //optional chaining опциональные цепи
 
 console.log(cities[cities]?.temp?.celcius);//undefined



 const user = {
  name: 'Alex',
  address: { //вложенный обьект 
    city: 'Moscow',
  }
}

console.log(user.address.city); // 'Moscow'
//console.log(user.profile.city); // ❌ Ошибка! Нельзя обратиться к свойству city у undefined

//С Optional chaining: 
console.log(user.address?.city);  // 'Moscow'
console.log(user.profile?.city);  // undefined, но ошибки нет!



//Глубокая вложенность, но без optional chaining
if (cities.spb && cities.spb.temp && cities.spb.temp.celsius) {
  console.log(cities.spb.temp.celsius);
} else {
  console.log('сервер не вернул температуру');
}

//С optional chaining
console.log(cities.spb?.temp?.celsius); // undefined, если спб или temp не определены

