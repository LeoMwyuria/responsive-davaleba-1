/* დავალება 3 */
/* გაფილტრეთ მოცემული მასივი ფასის მიხედვით, რომლებიც მეტია 240-ზე */
/* გამოიყენეთ .filter() მეთოდი */
const product= [
    { name: "Laptop", price: 1299 },
    { name: "Phone", price: 499 },
    { name: "Tablet", price: 299 },
    { name: "Watch", price: 199 },
    { name: "Headphones", price: 99 },
];

let z = product.price
let y = []
function meti240ze(z){
    if  (z > 240){
       y.push(product.filter(z))
       console.log(y)

    }
}




