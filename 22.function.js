function concatenateArrays (arr1, arr2){
    const concatenateArray = [...arr1, ...arr2]
    return concatenateArray
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const concatenateArray = concatenateArrays(arr1, arr2)
console.log(concatenateArray)