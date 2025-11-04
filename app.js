// forEach

const score = [5, 10, 0, 15];

// for (const [i, element] of score.entries()) {
//     console.log(`Раунд${i + 1}: ${element}`);
// }

score.forEach(function(element){
    console.log(`Раунд: ${element}`);
})

score.forEach((element, i) =>{ // i - это индекс
    console.log(`Раунд${i + 1}: ${element}`);
});
//(5, 0) => {....}
//(10, 1) => {....}
//Но и остановить с помощью break эту функцию высшего порядка мы не можем.

