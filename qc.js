// function fun(show) {
//     console.log("hello");

// }

// function g(call) {
//     call()
//     console.log("hello Runu");



// }
// g(fun)
// var i = 0
// do {
//     console.log("hello")
//     i++
// } while (i > 5)
const promise1 = new Promise((resolve, reject) => {
    throw 'Uh-oh!';
});

promise1.catch((erro) => {
    console.error(erro);
});