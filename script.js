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
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log("These numbers are odd - " + (isTwoOdd))
//------> These numbers are odd - true

// Check three: no number larger than 25
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log("The largest number is " + (isOver25))
//-------> The largest number is false


// Check four: all unique numbers
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log("All unique number are " + (isUnique))
//-------> All unique number are true

//The results into a single variable 
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
console.log("The results are as followed " + (isValid))
//-------> The results are as followed true


//Part 2 Practical Math

const distance = 1500;
const budget = 175;
const fuelCost =3;

const num55 = 30;
const num60 = 28;
const num75 = 23;

// How many gallons of fuel you will need for the entire trip 
const gallon1 = (distance) / (num55);
console.log("Going 55 miles an hour it is going to take " + gallon1 + "gallons")
//-------> Going 55 miles an hour it is going to take 50gallons

const gallon2 = (distance) / (num60);
console.log("Going 60 miles an hour it is going to take " + gallon2 + " gallons")
//-------> Going 60 miles an hour it is going to take 53.57142857142857 gallons

const gallon3 = (distance) / (num75);
console.log("Going 75 miles an hour it is going to take " + gallon3 + " gallons")
//-------> Going 75 miles an hour it is going to take 65.21739130434783 gallons

// Will your budget be enough to cover fuel expenses

const budget1 = (fuelCost) * (gallon1);
console.log("It's going to cost " + "$" + budget1 + " going 55 mph")
//------> It's going to cost $150 going 55 mph

const budget2 = (fuelCost) * (gallon2);
console.log("It's going to cost " + "$" + budget2 + " going 60 mph")
//------> It's going to cost $160.71428571428572 going 60 mph

const budget3 = (fuelCost) * (gallon3);
console.log("It's going to cost " + "$" + budget3 + " going 60 mph")
//------> It's going to cost $195.6521739130435 going 60 mph
// This will not fit in the budget

//How long will the trip take in hours

const hour1 = (distance) / (55);
console.log("It will take " + hour1 + " hours going 55 mph")
//-------> It will take 27.272727272727273 hours going 55 mph

const hour2 = (distance) / (60);
console.log("It will take " + hour2 + " hours going 60 mph")
//-------> It will take 25 hours going 60 mph

const hour3 = (distance) / (75);
console.log("It will take " + hour3 + " hours going 75 mph")
//------> It will take 20 hours going 75 mph


