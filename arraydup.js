const a = [1, 2, 3, 3, 4, 6, 6, 4, 5]
var i = 0
var b = []
while (i < a.length) {
    if (!b.includes(a[i])) {
        b.push(a[i])

    }
    i++
}
console.log(b)