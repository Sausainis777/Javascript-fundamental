const divided = 10;
const divisor = 2;
let result
if(divisor === 0){
    throw new Error ("Division by 0 is not allowed")
}else{
    const result = divided/divisor
    console.log(result)
}