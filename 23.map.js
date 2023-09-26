function calculateSquer (numbers){
    const squerNumbers = numbers.map((number) => number * number)
    return squerNumbers;
}
const numbers = [1, 2, 3, 4, 5]
const squerNumbers = calculateSquer(numbers)
console.log(squerNumbers)