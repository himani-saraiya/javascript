// // // var b=[1,2,3,4]
// // // b.push()
// // // console.log(b)

// // function sun(a,...args){
// //     console.log(a,l)
// // }
// // l=[2,3,4,5]
// // sun(10,...l)


var list=[["g","f","g"],["i","s"],["b","e","s","t"]]
for (i in list){
    var s=""
    for(j in list[i]){
        s=s+list[i][j]
        console.log(s)
    }
}

// var list=[["g","f","g"],["i","s"],["b","e","s","t"]]
// var i=0
// // var s=""
// while (i<list.length){
//     var j=0
//     while(j<list[i]){
//         j++
//     }console.log(list[i][j])
//     i++
// }

// var a = [4, 6, 7, 4, 5, 5, 8]
// var x = []
// for (i = 0; i < a.length; i++) {
//     if(!x.includes(a[i]))
//     x.push(a[i])
//     // console.log(x)

// }console.log(x)