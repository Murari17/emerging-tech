// Consider an array of car brands:
// carBrands = [ "Toyota", "Ford", "BMW", "Mercedes-Benz", "Honda", "Audi", "Tata", "Tesla",
// "Mahindra", "Volkswagen" ];
// a. Create a function which will take an array and display the array elements. Use this to
// display the array after each following operation.
// b. Add one more car brand to the array
// c. Remove the last car brand from the array.
// d. Check if the array contains “Tata”.
// e. Sort the cars in alphabetical order.
// f. Make shallow copy of the array

function display(arr){
    console.log(arr);
}
let carBrands = [ "Toyota", "Ford", "BMW", "Mercedes-Benz", "Honda", "Audi", "Tata", "Tesla", "Mahindra", "Volkswagen" ];
display(carBrands);

carBrands.push("Koeinseigg");
display(carBrands);

carBrands.pop();
display(carBrands);

if(carBrands.includes("Tata")){
    console.log("true");
}
else{
    console.log("false");
}

carBrands.sort();
display(carBrands);

let cpy = carBrands.slice();
display(cpy);