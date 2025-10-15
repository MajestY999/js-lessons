//Упражнение - проверка прав
/* 
Задача:
Определить, может ли пользователь купить игру в интернет-магазине (например, Steam) на основании четырех условий.
Условия:
Баланс пользователя более 1000 рублей или более 100 бонусов.
Пользователь не забанен в магазине.
Игра не куплена ранее пользователем.
Игра доступна в продаже.
*/

const gameAvailable = true 
const gameNotBuy = true 
const gamerNotBanned = true 
const marketWallet = 100
const userBonus = 50

if ((marketWallet >= 1000 || userBonus >= 100) && gamerNotBanned === true && gameAvailable === true && gameNotBuy === true) {
    console.log('Пользователь может купить игру');
} else {
    console.log('Пользователь не может приобрести игру');
}



