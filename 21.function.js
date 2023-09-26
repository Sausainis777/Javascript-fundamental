const findMax = (...numbers) => {
    try {
        if (numbers.length === 0) {
            throw new Error("No number provided")
        }
        let max = numbers[0]
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] > max) {
                max = numbers[i]
            }
        }
        return max
    } catch (error) {
        console.error(error.message);
    }
}
const maximum = findMax(10, 30, 40, 100, 2)
console.log(maximum)