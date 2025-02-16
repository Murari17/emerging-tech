// Write an asynchronous function that will generate a random integer number between
// 1 and 100 after 3 seconds. Write another function that will check whether the number
// is prime or not by using a promise. If the number is prime the promise will resolve
// and reject otherwise. Use async/await and try/catch to call both the functions and
// display the generated number and also display if it is even or odd.

const genNum = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> 
        {
            const n = Math.floor(Math.random() * 100) + 1;
            console.log(n);
            resolve(n);
        });
    } , 3000);
}

const prime = async () => {
    try {
        const n = await genNum();
        if (n === 1){
            console.log("not prime");
        }
        else if (n === 2){
            console.log("prime");
        }
        else {
            for (let i = 2; i < n; i++){
                if (n % i === 0){
                    console.log("not prime");
                    return;
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
}

prime();