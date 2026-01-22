//Повторение call, apply
'use strict'

const audi = {
    make: 'Audi',
    model: 'A3',
    year: 2021,
    damages: [],
    addDamage(part, rate){
        console.log(`У авто ${this.make} ${this.model} ${this.year} добавлено повреждение - повреждение ${part} по степенью ${rate}`);
        this.damages.push({
            part, 
            rate
        })
        
    }
}

// audi.addDamage('Капот', 1)

const bmw = {
    make: 'BMW',
    model: 'X5',
    year: 2022,
    damages: []
}

// bmw.addDamage = audi.addDamage;
// bmw.addDamage('Бампер', 2);

const addDamageFunc = audi.addDamage
console.log('Call:');
addDamageFunc.call(bmw,'Бампер', 2)   //он вызывает нашу функцию и говорит на каком контексте и с какми аругментами
addDamageFunc.call(audi, 'Капот', 2)
console.log('Apply:');
addDamageFunc.apply(bmw, ['Бампер', 2])//Нам нужно пременить метод на каком лмбо объекте и вызвать массив аргумента 
addDamageFunc.apply(audi, ['Бампер', 2])
//Но вызвать window тут нельзя