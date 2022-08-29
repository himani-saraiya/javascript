// function prime(b) {
//     var i = 1
//     var c = 0
//     while (i <= b) {
//         if (b % i == 0) {
//             c++
//         }
//         i++
//     }
//     if (c == 2) {
//         console.log("prime number")
//     } else {
//         console.log("not prime number")
//     }
// }
// prime(11)

const newArray = [1, 3, 2, 5, 10];
const isPrime = num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num !== 1;
};


const myPrimeArray = newArray.filter(element => isPrime(element));
console.log(myPrimeArray);