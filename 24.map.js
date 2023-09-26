function extractNames (arr){
    const name = arr.map((obj) => obj.name);
    return name
}
const array = [
    {name: "Petras", age: 30},
    {name: "Julius", age: 20},
]
const name = extractNames(array)
console.log(name)