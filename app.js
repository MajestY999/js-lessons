const users = [
    { 
        name: 'Вася',
         surname: 'Пупкин',
          age: 30,
           skills: ['Разработка', 'DevOps'] 
        },
    { name: 'Катя', 
        age: 18, 
        surname: 'Белова',
         skills: ['Дизайн'] 
        },
];

const userData = users.map(user => {
    return {
        fullName: `${user.name} ${user.surname}`,
        skillsNum: user.skills.length  
    }
})
console.log(userData);

