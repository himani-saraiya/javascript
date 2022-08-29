// const a = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];
// var evens = []
// for (i in a) {
//     if (a[i] % 2 === 0) {
//         if (a[i] <= 8) {
//             evens.push(a[i])
//         }
//     }

// }
// console.log(evens)

// const a = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];
// var l = []
// const map1 = a.filter(x => {
//     if (x % 2 == 0) {
//         if (x <= 8) {
//             l.push(x)
//         }
//     }
// });
// console.log(l)


// const a = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];
// var l = []
// const map1 = a.forEach(x => {
//     if (x % 2 == 0) {
//         if (x <= 8) {
//             l.push(x)
//         }
//     }
// });
// console.log(l)

const a = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];
var l = []
const map1 = a.map(x => {
    if (x % 2 == 0) {
        if (x <= 8) {
            l.push(x)
        }
    }
});
console.log(l)