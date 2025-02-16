// Answer the following questions using setTimeout, setInterval and clearInterval.
// a. Create a function delayedGreeting that accepts a name and a delay time (in
// milliseconds). After the specified delay, it should log a greeting message (e.g., "Hello,
// [name]!").
// b. Display a 10 second count down timer in a webpage.


function delayedGreeting(name, delay){
    setTimeout(() => {
        console.log("Hello, " + name + "!");
    }, delay);
}
delayedGreeting('abc', 2000);

function cdwn(){
    let count = 10;
    let id = setInterval(() => {
        console.log(count);
        count--;
        if(count == -1){
            clearInterval(id);
        }
    }, 1000);
} 
cdwn();