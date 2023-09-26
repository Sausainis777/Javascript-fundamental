function calculateTotalPrice(cart) {
    let totalPrice = 0;
    cart.forEach(item => {
        totalPrice += item.price
    })
    return totalPrice
}
const shoppingCart = [
    { name: "Product A", price: 10 },
    { name: "Product B", price: 20 },
    { name: "Product C", price: 30 },
    { name: "Product D", price: 40 }
]
const totalPrice = calculateTotalPrice(shoppingCart);
console.log(totalPrice)