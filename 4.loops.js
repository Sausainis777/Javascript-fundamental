let userNumber;

while (true){
    userNumber = parseInt(prompt("Enter a number greater than 100:"));
    if (isNaN(userNumber && userNumber > 100)){
        break;
    } else {
        alert ("Invalid input")
    }
}
console.log(`Yor entered: ${userNumber}`)