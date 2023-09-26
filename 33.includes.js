function searchItemInArray(array, item) {
    const isItemFound = array.includes(item)
    return isItemFound;
}
const exampleArray = [1, "apple", { name: "Petras" }, true, "milk"]
const itemToFind = "milk"
const isItemFound = searchItemInArray(exampleArray, itemToFind);
console.log(isItemFound)