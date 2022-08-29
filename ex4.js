const arr = [1, 2, 3, 7, 5, 6, 8, 9];
var pr = 1
for (i in arr) {
    if (arr[i] % 2 === 0) {
        pr = pr * arr[i]
    }
}
console.log(pr)