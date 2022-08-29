// async function fun() {
//     return "himani"
// }
// console.log(fun())
// fun().then((result) => {
//         console.log(result)
//     })
var fun = async function(a, b) {
    console.log(a + b);
    await console.log(a - b)
    console.log(a * b)
}
fun(5, 6)
console.log("hello async")
console.log("hello await")