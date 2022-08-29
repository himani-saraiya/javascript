// var ar = ["eat", "sleep", "repeat", "code"];
// var a = []
// for (var i = 0; i < ar.length; i++) {
//     if (ar[i].length > 5) {
//         a.push(ar[i])
//     }
// }
// console.log(a)

// var ar = ["eat", "sleep", "repeat", "code"];
// var a = []
// const b = ar.filter(x => {
//     if (x.length > 5) {
//         a.push(x)
//     }
// })
// console.log(a)

var ar = ["eat", "sleep", "repeat", "code"];
var a = []
const b = ar.forEach(x => {
    if (x.length > 5) {
        a.push(x)
    }
})
console.log(a)