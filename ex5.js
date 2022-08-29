const arr = [{
        name: "Jay",
        age: 60
    },
    {
        name: "Gloria",
        age: 36
    },
    {
        name: "Manny",
        age: 16
    },
    {
        name: "Joe",
        age: 9
    }
]
var sum = 0
const studentGrades = arr.filter(student => {
    return sum = sum + student.age
});
console.log(sum)