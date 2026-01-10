//Упражнение кошелек
const wallet = {
    balance: 0,
    operations: [],
    increase: function(sum, reason){
        this.balance += sum
        this.operations.push(`${reason}: true  `)
        return `Поплнен баланс на ${sum}, Причина: ${reason}`
    },
    decrease: function(sum, reason){
        if(this.balance < sum){
            return `Отрицательный баланс или недостаточно денег на счете денег на счете`
        }
        this.balance -= sum
        this.operations.push(`${reason}: true`)
        return `Сумма снятия: ${sum} По причине: ${reason}`
    }  , 
    getOperationLenght: function(){
        return this.operations.length
    }

}

console.log(wallet.increase(100,'Пополнение с помощью банкомата'));

console.log(wallet.increase(100, 'Перевод'));
console.log(wallet.decrease(150, 'Повторное снятие денег'));
console.log(wallet.getOperationLenght());