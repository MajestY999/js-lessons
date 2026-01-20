//Call, apply. как мы можем управлять нашим this
'use strict'

const audi = {
    make: 'Audi',
    model: 'A3',
    year: 2021,
    damages: [],
    addDamage(part, rate){
        console.log(`У авто${this.make} ${this.model} ${this.year} добавлено: повреждение ${part} со степенью ${rate}`);
        this.damages.push({
            part,
            rate
        })
    }
};
// audi.addDamage('Капот', 1)

const bmw = {
    make: 'BMW',
    model: 'X5',
    year: 2022,
    damages: []
}

// bmw.addDamage = audi.addDamage;
// bmw.addDamage('Бампер', 2);
const addDamageFunc = audi.addDamage; //Получим много ошибок так как это не объект а просто переменная которая берет какую либо функцию 
addDamageFunc.call(bmw, 'Бампер', 2)//То есть мы хотим вызваь нашу фнукцию с нашими переменными бампер и 2
addDamageFunc.call(audi, 'Капот', 1)

addDamageFunc.apply(bmw, ['Бампер', 2])//Тут у нас вызывается так что нам нужно применить методна каком либо объекте и нужно указать массив аргумента с нашими данными 
//Разница в том что они будут вызываться по разному один через запятую(но и можно в первом через ...spred оператор) второй через массив.
