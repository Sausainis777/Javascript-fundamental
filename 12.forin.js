const obj = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 50
}
let sum = 0
for(let key in obj){
    if(obj.hasOwnProperty(key)){
        sum+= obj[key]
    }
}
console.log(sum)