// Construct an array of 10 numbers and perform the following operations using higher-order
// array methods –
// a. Display the array elements using forEach
// b. Produce a new array by squaring each number of the given array using map
// c. Produce an array with all the even numbers present on the original array using filter
// d. Remove any number from the array using filter
// e. Sort the array in both ascending and descending order using sort and display
// f. Find the average of the array elements
// g. Find the smallest number amongst the array elements.

let arr = [1, 2, 3, 4 ,5, 6, 7, 8, 9, 10];

arr.forEach((element) => {
    console.log(element);
});

let arr2 = arr.map((element) => {
    return element*element;
});
console.log(arr2);

let arr3 = arr.filter((element) => {
    return element%2 == 0;
});
console.log(arr3);

let arr4 = arr.filter((element) =>{
    return element != 3;
});
console.log(arr4);

arr.sort((a, b) => {
    return a-b;
});
console.log(arr);

arr.sort((a, b) => {
    return b-a;
});
console.log(arr);

let sum = arr.reduce((arr, element) => {
    return arr + element;;
});
console.log("avg =" + sum/arr.length);

let min = arr.reduce((min, element) => {
    return Math.min(min, element);
});
console.log("min= " + min);