// Write an arrow function that will check if a given number is palindrome or not. If palindrome
// the function will return true and false otherwise. Call the function and display messages
// accordingly.
function isPalindrome(n){
    let temp = n;
    let rev = 0;
    while(temp>0){
        let digit = temp%10;
        rev = rev*10 + digit;
        temp = parseInt(temp/10);
    }
    if(rev == n){
        return true;
    }
    else{
        return false;
    }
}
let n = 121;
if(isPalindrome(n)){
    console.log(n + " is a palindrome number");
}
else{
    console.log(n + " is not a palindrome number");
}
