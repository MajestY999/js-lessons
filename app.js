//Контекстт исполнения и stack вызова

//Контекст исполнения 
//Копиляция =>  создание глобального контекста -> Выполнение кода верхнего уровня <<---(К нему относится код ) -> Выполнение функции и ожидание callback  

const user = {
    name: 'Вася',
    roles: ['admin']
}

function isUserAdmin(user){
    return user.roles.includes('admin')
}

console.log(isUserAdmin(user));//true  

const createUserWithAge = (user, age) => {
    const newUser = {
        ...user,
         age
    }
    return newUser
}

//Global
//user
//function
//createUserWithAge

//isUserAdmin()
//-

//IsuserAdmin()
// newUSer



//Что внутри контекста 
//Находится 3 важных= элемента

//Окружение переменных
//let const var
//function
//arguments


//Scope Chains --- ссылки на переменные вне текущего контекста

//this (Клучевое слово this, и оно сслыкается на наш основной контекст)

//Stack  Это  Некоторая последовательность при которой вызывается наш код. 

// у нас есть переменные которые умножсами на себя
//Есть функция в которой есть вызво двойного элем.

// а вот const a = 5