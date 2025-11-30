//Enhance object literals
//Упражнение кошелек
const wallet = {
  balance: 0,
  operations: [],
  increase: function(sum, reason){
    this.balance += sum
    this.operations.push(`${reason}: true`)
    return `Пополнение на ${sum} 
    По причине:${reason} `
  },
  decrease: function(sum, reason){
    if(this.balance < 0){
        return false
    }
    this.balance -= sum
    this.operations.push(`${reason}: true`)
    return `Снятие на ${sum}
    По причине:${reason}`
  },
  getOperationsLength: function(){
    return wallet.operations.length
  }
}
console.log(wallet.increase(1000, ' Перевод'));
 console.log(wallet.decrease(1000, 'Налоги'));
 console.log(wallet.getOperationsLength());// 2
// console.log(wallet);

const Initialbalance = 7

const wallet2 ={
    balance: Initialbalance,
    operations: [],
}
console.log(wallet2);