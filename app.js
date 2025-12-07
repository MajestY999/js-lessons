//Итерирование по обьекту

const cities = {
    msk:  {
        let: 200,
        temp: 25
    },
    spb:{
        lt: 100,
        temp: 20
    }
}

let sumTemp = 0;
console.log(Object.keys(cities));
let citiesCount = Object.keys(cities).length
// for(const key in cities){//если изменить с of на in мы увидим ключи нашего обьекта
//     sumTemp += cities[key].temp;
// }
// console.log(sumTemp / citiesCount); //Получим 22.5


for(const key of Object.keys(cities)){//если хотим итерироваться по ключам 
   sumTemp += cities[key].temp;
}
console.log(sumTemp / citiesCount); //Получим те же  22.5
