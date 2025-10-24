//  Упражнение разбор Url

const url =  ' <https://purpleschool.ru/course/javascript>'

// const getURL = () => {
//     url.split('/')
// }

const  sumUrl = () =>  {
     const [protocol, domain, ...path ] = url.split('/')
     return `${protocol.split('').join('')}//${domain}${path.join("/")}`
}


console.log(sumUrl());




// let array = [1, 2, 3, 4];
// const res = array.push(5);
// console.log(res);



// let arr = ['1', '2', '3'];
// console.log(arr.indexOf(1));
