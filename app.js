// Упражнение - Проверка робота

 const quest = Number(prompt("Сколько будет 7  + 15 или сколько будет 7 - 15"));

if ((quest === 22, quest === -8)) {
  console.log(alert(`Я не робот. Ответ: ${quest}`));
} else {
  console.log(alert(`Вы робот, так как ответ не верный.`));
} 

// Пример препоавателя

const res = Number(prompt("Сколько будет 7  + 15 или  - 15?"));
switch (true) {
  case res === "Я не робот":
  case Number(res) === 22:
  case Number(res) === -8:
    console.log("Успех");
    break;
  default:
    console.log("Вы робот!");
}

if (res === "Я не робот") {
  console.log("Успех");
} else {
  const resNum = Number(res);
  switch (resNum) {
    case 22:
    case -8:
      console.log(Успех);
      break;
    default:
      console.log("Вы робот!");
  }
}



