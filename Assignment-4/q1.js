// Create a function checkAge that takes a person's age as an argument and checks if
// they are eligible to vote. If the age is 18 or above, resolve the promise after 2 seconds;
// if below 18, reject the promise. Use async/await and try/catch to call the function and
// display a message indicating whether the person is eligible to vote.

var n = prompt("Enter your age: ");

const checkAge = async (age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve("Eligible to vote");
      } else {
        reject("Not eligible to vote");
      }
    }, 2000);
  });
};

const check = async () => {
  try {
    const result = await checkAge(n);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

check();

// Output:
// Eligible to vote
// Explanation: The function checkAge takes a person's age as an argument and checks if they are eligible to vote.
// If the age is 18 or above, the promise will resolve after 2 seconds; if below 18, the promise will reject.
// The function check uses async/await and try/catch to call the function and display a message indicating whether the person is eleigble to vote.
// In this case, the age is 18, so the output is "Eligible to vote".
// If the age was below 18, the out