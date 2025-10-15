// Логические операторы 
const isAdmin = true; // парава изменения файла
const  canWrite = true; // право писать 
const isUser = true;

console.log(`Системный файл ${isAdmin && canWrite}`); // и 
console.log(`Обычный файл ${isAdmin || canWrite}`);  //или
console.log(`Инвертируем права админа ${!isAdmin}`);

const isEdited = true;
const isSuperAdmin = true;

console.log(`Системный файл  с редактированием ${
    isAdmin && canWrite && (!isEdited || isSuperAdmin)/* стал false */
}`);

let a = 7;
if(a == -8 || a === 22) {
    console.log();
}