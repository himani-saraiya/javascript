// var a=[[1,2],[3,4],[5,6]]
// for(i=0;i<a.length;i++){
//     console.log(i)
// }
// for(i=-1;i>-a.length;i--){
//     console.log(i)
// }async function f() {async function f() {

async function f() {
    console.log('Async function.');
    return Promise.resolve(1);
}

f().then(function(result) {
    console.log(result)
});