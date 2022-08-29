// // var a=new Promise(function(resolve,reject){
// //     if (9%2==0){
// //         resolve()
// //     }else{
// //         reject()
// //     }
// // })
// // a.
// //     then(function(){
// //         console.log("success")
// //     }).
// //     catch(function(){
// //         console.log("error")
// //     });

// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//     resolve('Promise resolved')}, 4000); 
// });

// // async function
// async function asyncFunc() {

//     // wait until the promise resolves 
//     let result = await promise; 

//     console.log(result);
//     console.log('hello');
// }

// // calling the async function
// asyncFunc();

var a = { 1: 2, 3: 4 };
for (i in a) {
    console.log(typeof i)
}