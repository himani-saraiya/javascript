// function show() {
//     console.log("hello")
// }

// function geeky(c) {
//     callback()
// }
// geeky(show)

function show(a) {
    console.log("hello" + a)
}

function geeky(c) {
    var a = 101
    c(a)
}
geeky(show)

// var a=[21,22,34,44,59,60];
// var sum=0;
// for (i in a){
//     if (a[i]%2==1){
//         sum=sum+a[i]
//     }
// }console.log(sum)

// var a=[12,22,43,54];
// a.reverse()
// console.log(a)