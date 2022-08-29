// const campus={"camp_name":"Bangalore_campus","establish":2016,"election":"three_months"}
// for(let pro in campus){
// console.log(campus[pro])
// }

var n=require("readline-sync");
const num=n.question("enter number: ");
let i=2
var count=0;
while (i<num) {
       if (num%i===0) {
       count=count+1
       }
       i++;
}
if (count===0) {
       console.log("prime number")
}
else {
   console.log("not prime number")
}
