const ob = [{
        name: 'Tanay',
        haveCycle: true
    },
    {
        name: 'Akanksha',
        haveCycle: false
    },
    {
        name: 'Tanvi',
        haveCycle: true
    },
    {
        name: 'Kanak',
        haveCycle: false
    }
];
var l = []
for (i in ob) {
    for (j in ob[i]) {
        // console.log(ob[i][j])
        if (ob[i][j] === true) {
            l.push(ob[i].name)
        }
    }
}
console.log(l)