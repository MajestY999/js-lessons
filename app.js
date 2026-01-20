//bind
'use strict'

const audi = {
    make: 'Audi',
    model: 'A3',
    damages: []
};

const carManipulation = {
    addDamage(rate, part){
        this.damages.push({rate,part})
        console.log(`Добавили повреждения на ${this.make} ${this.model}`);
        
    }
}

const addDamageAudi = carManipulation.addDamage.bind(audi);//первым идет контекст а дальше что то еще
addDamageAudi('Крыло', 3);
console.log(audi);

const addDamageAudiRoof = carManipulation.addDamage.bind(audi, 'Крыша');//первым идет контекст а дальше что то еще
addDamageAudiRoof(5)
addDamageAudiRoof(3)
console.log(audi);