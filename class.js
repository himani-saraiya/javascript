// class person {
//     constructor(name) {
//         this.name = name
//     }
// }
// const a = new person("himani")
// const b = new person("saraiya ")
// console.log(a)
// console.log(b)

class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
}
let person1 = new Person('John');
console.log(person1.name);