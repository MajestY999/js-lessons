//Упражнение - объект в объекте
const company = {
    name: 'ООО Агро',
    getNameCompany: function(){
        return this.name
    },
    empoloyees: [
        {name: 'Света',
           getName: function () {
            return this.name
           }
        }
    ],
    ceo:  {
        name: 'Вася',
        getNameCeo(){
        return this.name
    }
    },
    
    
}


console.log(company.getNameCompany());
console.log(company.empoloyees.map(employ => employ.getName()));
console.log(`Ооснователь: ${company.ceo.getNameCeo()}`);