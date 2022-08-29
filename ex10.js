const ar = [{
        name: "Apple"
    },
    {
        name: "Mango"
    },
    {
        name: "Potato"
    },
    {
        name: "Guava"
    },
    {
        name: "Capsicum"
    }
]
var a = {}
for (i in ar) {
    for (j in ar[i]) {
        if (ar[i][j].length > 5) {
            a.name = ar[i][j]
            a.type = "vegetable"
            console.log(a)
        } else {
            a.name = ar[i][j]
            a.type = "fruit"
            console.log(a)
        }

    }

}