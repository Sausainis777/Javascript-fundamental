const arr = [10, 20, 30, 40, 50]

for (let index in arr) {
    if(arr.hasOwnProperty(index)){
        console.log(`${index}, ${arr[index]}`)
    }
}