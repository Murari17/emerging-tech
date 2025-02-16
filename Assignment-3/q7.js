// Given an array of product objects, where each object contains the name and price of a
// product. Answer the following questions using higher order array methods.
// a. Use forEach loop, object de-structuring, and string literals to display the details in the
// given format – “A laptop costs Rs 50000 and has a rating of 4.7”.
// b. Create a List of Product Names
// c. Create an array of all the Electronics products and display the array
// d. Find the Product with the Highest Price
// e. Find the average rating of all the products
// f. Get Products That Are Priced Below 10000

products = [
    { name: "Smartphone", price: 15000, rating: 4.5, category: ["Electronics", "Mobile", "Gadget"] },
    { name: "Laptop", price: 50000, rating: 4.7, category: ["Electronics", "Computer", "Gadget"] },
    { name: "Headphones", price: 2000, rating: 4.0, category: ["Electronics", "Accessories"] },
    { name: "Shoes", price: 3000, rating: 4.3, category: ["Fashion", "Footwear"] },
    { name: "Watch", price: 3500, rating: 4.2, category: ["Fashion", "Accessories"] },
    { name: "Washing Machine", price: 25000, rating: 4.6, category: ["Home Appliances", "Electronics"] },
    { name: "Refrigerator", price: 35000, rating: 4.4, category: ["Home Appliances", "Electronics"] },
    { name: "Table Lamp", price: 1000, rating: 3.8, category: ["Home Decor", "Furniture"] },
   ];

products.forEach(({name, price, rating}) => {
    console.log(`A ${name} costs Rs ${price} and has a rating of ${rating}`);
});

let productNames = products.map(({name}) => name);
console.log(productNames);

let electronicsProducts = products.filter(({category}) => category.includes("Electronics"));
console.log(electronicsProducts);

let highestPriceProduct = products.reduce((acc, curr) => acc.price > curr.price ? acc : curr);
console.log(highestPriceProduct);

let averageRating = products.reduce((acc, curr) => acc + curr.rating, 0) / products.length;
console.log(averageRating);

let productsBelow10000 = products.filter(({price}) => price < 10000);
console.log(productsBelow10000);