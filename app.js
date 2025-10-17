// Стрелочные функции
function powerOfTwo(num){
    console.log(num); //логирование
    return num * num;
}
console.log(powerOfTwo(5));

//Стрелочная функция
const poft = num  => {  /* если будет больше 1 значения то уже нужны скобки, но если тольеко 1 значение то можно и скобки убрать. */
    console.log(num); // 6
    return   num * num 
} //опустили ключевое слово function. Также если не достаточно одной строки то можно просто записать  в скобки {} и туда мы сможем добавить все что угодно
console.log(poft(6));

const poFt = num => num * num;  //Обычная стрелочная функция.
console.log(poFt(11));

