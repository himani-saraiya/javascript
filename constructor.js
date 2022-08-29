// function fun() {
//     this.name = "himani"
//     this.age = 21
//     this.lang = "python,javascript"
// }
// var a = new fun()
// var b = new fun()
// var c = new fun()
// console.log(a)
// console.log(b)
// console.log(c)

function Person(person_name, person_age, person_gender) {
    this.name = person_name
    this.age = person_age
    this.gender = person_gender

    this.greet = function() {
        return ('Hi' + ' ' + this.name);
    }


}
const person1 = new Person('himmi', 21, 'female');
const person2 = new Person('harsh', 23, 'male');
console.log(person1.name);
console.log(person2.name)
console.log(person1);
console.log(person2);