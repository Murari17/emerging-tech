// Create a calculateFactorial function that takes a number and a callback function. The
// calculateFactorial calculates the factorial and the callback function should display the factorial
// value.
function calculate(n, callback){
    let fact = 1;
    for(let i=1; i<=n; i++){
        fact *= i;
    }
    callback(fact);
}
function display(fact){
    console.log("Factorial is: " + fact);
}
calculate(5, display);