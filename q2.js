// let b = 50;
// function codeHoist(){
//     a = 10;
//     // let b = 50;
// }
// codeHoist();
 
// console.log(a); // 10
// console.log(b); // ReferenceError : b is not defined

let a=require("readline-sync");
let b=a.question("enter name")
console.log(b)