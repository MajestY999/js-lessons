

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





const adminRoles = ['Admin', 'SuperAdmin', 'youngAdmin', 'sysAdmin']

function deleteAdmin(deleteRoles){
     adminRoles.shift(deleteRoles)//Можно тут прописать adminRoles как базу то есть основу, которая имеет массивы, с которой берем данные и можем прописать например эту функцию как добавление. 
}

function addAdmin(Admins){
    adminRoles.push(Admins)
}

deleteAdmin('SuperAdmin')
console.log(adminRoles);
addAdmin('ГигаАдмин')//Тут же теперь мы с помощью элмента push мы делаем так что мы в конец добавляем наш элемент в конец, ии еще используем функцию.
console.log(adminRoles);


function PriorutirizeAdmin(admin){
    const idAdmin = adminRoles.indexOf(admin)
    if(idAdmin === -1)return;
    const AdRole = adminRoles[admin];
    adminRoles.splice(idAdmin, 1)
    adminRoles.unshift(AdRole)
}

PriorutirizeAdmin('Ceo-admin')
console.log(adminRoles);