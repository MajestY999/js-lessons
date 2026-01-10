// Упражнение - преобразование  объектов
const users = [
    {
        name: 'Вася',
        surname: 'Пупкин',
        age: 30,
        skills: ['Разработка', 'DevOps']
    },
    {
        name: 'Катя',
        surname: 'Белова',
        age: 30,
        skills: ['Дизайн']
    }
]

const fullNameAndSkillsCount = users.map((user)=>{
   const fullName = user.name + ' ' + user.surname
   const skillsCount = user.skills.length
    return {
        fullName, 
        skillsCount
    }
    
})

console.log(fullNameAndSkillsCount );







