

const payRateUSD = 80;
const projectHours = 40;
const availableHours = (11 - 2)* 5 ;

//Результат
console.log('Смогу ли я работать ' + (availableHours > projectHours));
console.log('Стоимость работ:' + projectHours * payRateUSD + ' $');

const priceToWork = 80;
const timetoWork = 40
//const freeTimeToWork = (11-2)*5 

console.log('Успею ли я выполнить проект в срок?', freeTimeToWork > timetoWork);
console.log('Сколько мне заплатят за проет:', priceToWork * timetoWork);



const hourPay = 80;
const workHour = 5 
const hoursToProject = 40

const freeTimeToWork = (11 - 2)* 5

console.log('Смогу ли я закрыть проект в срок?', hoursToProject < freeTimeToWork )
console.log('Сколько мне заплатят за проет:', hourPay * hoursToProject);



