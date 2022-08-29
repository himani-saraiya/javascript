// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction);

// function myFunction(items) {
//     sum += items;
// }
// console.log(sum)

// var i=1;
// var a=require("readline-sync")
// var b=a.questionInt("enternumber")
// while(i<=b){
//     var j=1
//     while(j<=10){
//     console.log(j,"*",i,"=",j*i)
//     j++
//     }i++
// }
var evens = []
const numbers = [1, 2, 3, 4];
const arr = numbers.forEach(item => {
    if (item % 2 === 0)
        evens.push(item)
});
console.log(evens)