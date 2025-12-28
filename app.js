//упражнение обьект в обьекте. 
const company = {
  name: 'ООО Агро',
  getName(){
    return this.name
  },
  employees: [
    {
      name: 'Света',
      getName(){
        return this.name
      }
    },

  ], 
  ceo:{
    name: 'Вася',
    getnameCeo(){
      return this.name
    }

  },
  // getNameEmpl(){
  //      console.log(this.employees.map(emp => emp.name) )
     
  //   }
  
}
console.log(company.employees.map(employee => employee.getName()));//тут тоже вызываем массив с нашим работником
console.log(`Компания: ${company.getName()}`);
// console.log(company.getNameEmpl());
console.log(` Основатель: ${company.ceo.getnameCeo()}`);//вызываемм ы с помощью контекста ceo так как данные находятся в нем а если его не вызвать то будет просто ошибка  
console.log(company.employees.map(employee => employee.getName()));//это удобнее но для этого перед этим нужно сначала внутри обьекта прописать функцию с вызвом имени а потом пишем метод map в консоль в котором мы создадим массив с именем нашего работника.