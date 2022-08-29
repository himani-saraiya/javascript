// let prom=new Promise(function(resolve,reject){
//     if (8%2==0){
//         resolve("success");

//     }
//     else{
//         reject("failier");
//     }
// });
// console.log(prom)

var promise = new Promise(function(resolve, reject) {
    const x = "geeksforgeeks";
    const y = "geeksforgeeks"
    if (x === y) {
        resolve();
    } else {
        reject();
    }
});

promise.
then(function() {
    console.log('Success, You are a GEEK');
}).
catch(function() {
    console.log('Some error has occurred');
});