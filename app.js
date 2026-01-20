//EOL для методов

const b = 1

const a = {
    b,
    getB: function(){
      return this.b  
    },
    getBAlt(){//Так будет удобнее и лучше так как все разработчики так и пишут.
        return this.b
    }
}
console.log(a.getBAlt());//1 тот же результат что  и с getB