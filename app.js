//Контекст в методах
'user strict'


const user = {
    firstName: 'Вася',
    lastName: 'Пупкин',
    age: 20,
    getUserInfo: function(){
        console.log(this);//тут будет все верно в виде нашего объекта
        console.log(`${this.firstName}  ${this.lastName}`);
        const canDrink=()=> {
            if(this.age >= 18){
                console.log('Может пить');
            }else{
                console.log('Не может пить');
            }
           
        }
         canDrink()

    },
    getUserInfoArrow: () => {
        console.log(this);//а тут он у нас не работает
        console.log(`${this.firstName}  ${this.lastName}`);//у стрелочных функций this отсутствует
    }
}

user.getUserInfo()
//user.getUserInfoArrow()