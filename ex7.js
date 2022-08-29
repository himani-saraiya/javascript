const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'e'],
    ['e', 'd', 'f'],
];
var l = []
for (i in input) {
    for (j in input[i]) {
        l.push(input[i][j])
    }
}
console.log(l)