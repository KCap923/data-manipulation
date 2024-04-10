// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Numbers divisible by 5
const divBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) === 0;
console.log("Numbers divisible by 5 is " + (divBy5) )
//------> Numbers divisible by 5 is true

//First number larger than last
const firstLarger = (n1 > n4);
console.log("10 larger than 5 is " + (firstLarger))
//-------> 10 larger than 5 is true true


//Arithmetic chain

//Subtract first number from second
const firstSecond = (n1) - (n2);
console.log("10 minus 15 is " + (firstSecond))
//-------> 10 minus 15 is -5

//Multiply result by third number
const multiplyResult = (n3) * (firstSecond);
console.log("Multiplying -5 by 20 is " + (multiplyResult))
//-------> Multiplying -5 by 20 is -100

//Find remainder 
const remainder = (multiplyResult) / (n4);
console.log("Remainder of -100 by 5 is " + (remainder))
//-------> Remainder of -100 by 5 is -20

//Arithmetic chain PEMDAS 
const chain = ((n1-n4) * n3) % n4;
console.log("The answer is " + (chain))
//------> The answer is 0




// Check one: add up to 50
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log("Do these numbers add up to 50 " + isSum50)  
//-------> Do these numbers add up to 50 true 



// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

