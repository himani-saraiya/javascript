function* fun() {
    // console.log("first")
    // console.log("second")
    yield "first";
    yield "second";
}
let a = fun();
console.log(a.next());
console.log(a.next());
console.log(a.next());