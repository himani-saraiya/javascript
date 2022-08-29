// // arr = new Array(1, 2, 3, 6, 5, 4);
// // var new_arr = arr.filter(function (x){
// //     return x%2==0;
// // });

// // console.log(new_arr)

// var a=[45,65,55,70,90]
// var b=a.filter(ages)
// console.log(b)
// function ages(a){
//     return a<=60;
// }

// const array1 = [1, 4, 9, 16];
// const map1 = array1.filter(x => x % 2 == 0);
// console.log(map1);

const a = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];
var l = []
const map1 = a.filter(x => {
    if (x % 2 == 0) {
        if (x <= 8) {
            l.push(x)
        }
    }
});