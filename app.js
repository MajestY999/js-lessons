// Введение в функции
function logName(name, surename){
     console.log(`Мое имя Артем ${name} ${surename}`);

}

/* const a = logName();
console.log(typeof a); //undefiend */
logName('Артем', 'Вилисов');

function countDepositSum(depositInUSD, month, rate ){
 const sum = depositInUSD * (1 + rate / 12) ** month
  return sum;
}

const example1 = countDepositSum(1000, 24, 0.12)
console.log(example1);

/* const  example2 = countDepositSum(1000, 48, 0.10) */

console.log(countDepositSum(1000, 48, 0.10)); //тот же результат просто мы не вложим эти данные в доп ячейку с данными как в верхнем примере.


