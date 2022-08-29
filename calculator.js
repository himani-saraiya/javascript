var b = require("readline-sync");
var a = b.question("*******")
var num1 = b.questionInt("*********");
var num2 = b.questionInt("******");
if (a == "+") {
    console.log(num1 + num2)
} else if (a == "-") {
    console.log(num1 - num2)
} else if (a == "*") {
    console.log(num1 * num2)
} else if (a == "%") {
    console.log(num1 % num2)
} else if (a == "/") {
    console.log(num1 / num2)
} else if (a == "Math.floor()") {
    console.log(Math.floor(num1 / num2))
}