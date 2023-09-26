function filterProductsByPrice(products, minPrice, maxPrice) {
    const filteredProducts = products.filter((product) => product.price >= minPrice && product.price <= maxPrice);
    return filteredProducts
}
const products = [
    { name: "Milk", price: 2.5 },
    { name: "Bread", price: 1.7 },
    { name: "Butter", price: 1.2 },
    { name: "Lemonade", price: 3 }
]
const minPrice = 1;
const maxPrice = 2;

const filteredProducts = filterProductsByPrice(products, minPrice, maxPrice);
console.log(filteredProducts)