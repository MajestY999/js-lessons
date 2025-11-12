// функция some

const arr = [2, 4, 4, 10, 20]
 
function some(array, element){
    const res = array.find(el => el === element)// el- это элемент который мы ищем и если элемент el === element равен переданному элементу то у нас будет равен результату если он у мнас есть, если его  у нас нет то будет undefaiend
    return res === undefined ? false : true;
}

console.log(some(arr, 2));

console.log(arr.some(el => element === 2));