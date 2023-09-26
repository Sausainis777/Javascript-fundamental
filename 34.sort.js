function sortProductByPrice(product){
    products.sort((a, b) => a.price - b.price);
    return products
}
const products = [
    {name: "product A", price: 20},
    {name: "product B", price: 90},
    {name: "product C", price: 50},
    {name: "product D", price: 70}
]
const sortedProducts = sortProductByPrice(products);
console.log(products)