const depositMoney = 12000;
yearProcent = 0.07;
bankContribution = 24;
homePrice = 13500;

const bankMoney = depositMoney * (1 + yearProcent / 12) ** bankContribution;

console.log(bankMoney);

if (bankMoney >= homePrice) {
  console.log(
    "Вася может купить дом через 2 года. Ему хватает денег на свой дом"
  );
} else if (bankMoney  < homePrice) {
  console.log("Вася не может купить дом через 2 года. Ему не хватает денег");
}
