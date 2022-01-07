const prompt = require("prompt-sync")();
T =  parseInt(prompt("enter the no. of seconds = "),10)

let hours = Math.floor(T/3600);
let minutes = Math.floor((T%3600)/60);
let seconds = ((T%3600)%60);

console.log(`hours = ${hours}, minutes = ${minutes} and seconds = ${seconds}`)
// let seconds = T%60;
// console.log(minute);
// console.log(seconds);
// let hours = Math.floor(T/3600);
// console.log(hours)
// if (hours >= 1){
//     minute = minute%hours
// }