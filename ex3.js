const ar = [1, 2, 3, 58, 5, 6, 62, 8, 70];
var sum = 0;
for (i in ar) {
    if (ar[i] > 50) {
        sum = sum + ar[i]
    }
}
console.log(sum)