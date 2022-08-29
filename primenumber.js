var a = require("readline-sync")
var b = a.questionInt("enternumber")
var i = 1
var c = 0
while (i <= b) {
    if (b % i == 0) {
        c++
    }
    i++
}
if (c == 2) {
    console.log("prime number")
} else {
    console.log("not prime number")
}
const newArray = [1, 3, 2, 5, 10];