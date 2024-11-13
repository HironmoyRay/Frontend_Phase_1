// Write a function isPalindrome that takes in a string and returns true if the string is a
// palindrome (reads the same forwards and backwards) and false otherwise.
// Example Input/Output:
// isPalindrome("racecar") should return true
// isPalindrome("hello") should return false
// isPalindrome("rotator") should return true
// isPalindrome("peep") should return true

function isPalindrome(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  if (str == reverse) return true;
  else return false;
}
console.log(isPalindrome("racecar"));
