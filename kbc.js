var a = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
var i=0
var c=0
var count=0
var counter=0
while (i<a.length){
	if (a[i]>=10000000){
		c=c+1
    }else if (a[i]>=100000){
		count=count+1
    }else{
		counter=counter+1
    }i=i+1
}
console.log(count,"lakhpati")
console.log(c,"crorepati")
console.log(counter,"dilbale")