const a = [1, 2, 3, 4];
const c = a.reduce((sc, cu) => {
    return sc + cu
});
console.log(c)

const arr = [1, 2, 3, 4, 5, 6];
let mapped_arr = arr.reduce((prev, curr) => prev + curr);
console.log(mapped_arr)