//Итерации в массивах(forEach)

const score = [5, 10, 0, 15]

// for (const [i, element] of score.entries()) {
//     console.log(`Раунд:${i + 1} ${element}`);
// }

// score.forEach(    //forEcha это функция высшего порядка в которой участвуют callback функции
//    function(element){
//     console.log(`Раунд: ${element}`);
//    } 
// );


// score.forEach(    //forEcha это функция высшего порядка в которой участвуют callback функции
//   (element) =>{ //тут уже используем стрелочную функцию
//     console.log(`Раунд: ${element}`);
//    });


// const iterator  = (element) => {
//     console.log(`Раунд: ${element}`);
// }//Эта функция работает точно также как и выше 

// score.forEach(iterator)

// score.forEach((element) => {
//     console.log(`Раунд: ${element}`);
// }) //Работает точно также выводит: Раунд: 5 и т.д

score.forEach((element, i) => { //score.forEach  при каждой итерации создает функцию и проводит операцию над массивом.
       console.log(`Раунд:${i + 1} ${element}`);
 }) //Также можем выводить индекс и смотреть что было у нас раньше 
//(5, 0) = {....}
//(10, 1) = {....}
//break нельзя использовать в forEach функции
