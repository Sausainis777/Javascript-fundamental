let a = 0, b = 1

for (let i = 2; i < 10; i++){
    const next = a + b;
    console.log(next);
    a = b
    b = next
}