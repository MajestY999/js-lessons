// Упражнение — Управление списком пользователей

const users = ['Аня'];

// Добавление пользователя
function addUser(name) {
  users.push(name);
}

// Удаление пользователя
function removeUser(name) {
  const index = users.indexOf(name);
  if (index === -1) return;
  users.splice(index, 1);
}

// Перемещение пользователя в начало (приоритетный)
function prioritizeUser(name) {
  const index = users.indexOf(name);
  if (index === -1) return;
  const chosen = users[index];
  users.splice(index, 1);
  users.unshift(chosen);
}

// Проверка наличия пользователя
function hasUser(name) {
  return users.includes(name);
}

// ================== ТЕСТ ===================

addUser('Вика');
addUser('Катя');
console.log(users); // ['Аня', 'Вика', 'Катя']

removeUser('Вика');
console.log(users); // ['Аня', 'Катя']

prioritizeUser('Катя');
console.log(users); // ['Катя', 'Аня']

console.log(hasUser('Аня')); // true
console.log(hasUser('Петя')); // false
