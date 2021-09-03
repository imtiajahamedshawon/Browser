console.log('first');
// setInterval(() => {
//     console.log('third');
// },3000);


let seconds = 0;
let timeId = setInterval(() => {
    // seconds++;
    console.log(seconds++);
    if(seconds > 12)
clearInterval(timeId);
},1000)

console.log('second');