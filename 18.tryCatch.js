const num = 0;

try {
    if (num > 0) {
        console.log("Positive")
    } else if (num < 0) {
        console.log("Negative")
    } else {
        console.log("zero")
    }

} catch (error) {
    console.error(error.message)

}