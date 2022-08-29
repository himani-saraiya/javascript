var val = ['1000', '900', '500', '400', '100', '90', '50', '40', '10', '9', '5', '4', '1']
var symbol = ["M", "CM", "D", "CD", "D", "XD", "L", "XL", "X", "IX", "V", "IV", "I"]
var a = require("readline-sync")
var num = a.questionInt("enter a integer number:")
var roman = ""
var k = 0
var list = []
while (k < val.length) {
    values = Number(val[k])
    list.push(values)
    k = k + 1
} //console.log(list)
for (i = 0; i < list.length; i++) {
    m = Math.floor(num / list[i])
    num = num % list[i]
    for (j = 0; j < m; j++) {
        roman += symbol[i]
    }
    num = num % list[i]
}
console.log(roman)