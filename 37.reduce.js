function calculateTotalScore(score) {
    const totalScore = score.reduce((accumuliattor, currentValue) => {
        const newTotal = accumuliattor + currentValue;
        return newTotal;
    }, 0)
    return totalScore;
}
const scores = [85, 89, 79, 100]
const total = calculateTotalScore(scores)
console.log(total)