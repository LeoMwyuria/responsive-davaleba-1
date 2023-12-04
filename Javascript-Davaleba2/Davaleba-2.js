const products = [
    {
        name: "Product X",
        description: "A high-quality product with many features.",
        price: 100
    },
    {
        name: "Product Y",
        description: "Another great product with a competitive price.",
        price: 75
    },
    {
        name: "Product Z",
        description: "A basic product that gets the job done.",
        price: 50
    }
];
let jami = 0;

for (let i = 0; i < products.length; i++) {
    jami = jami + products[i].price;
}

console.log(jami);