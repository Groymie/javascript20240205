// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// // Check one: add up to 50
// // This is a fairly simple operation using
// // arithmetic operators and a comparison.
// const isSum50 = (n1 + n2 + n3 + n4) == 50;

// // Check two: at least two odd numbers
// // Here, we use modulus to check if something is odd.
// // Since % 2 is 0 if even and 1 if odd, we can use
// // arithmetic to count the total number of odd numbers.
// const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// // Check three: no number larger than 25
// // This time, we use the OR operator to check
// // if ANY of the numbers is larger than 25.
// const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// // Check four: all unique numbers
// // This is long, and there are more efficient
// // ways of handling it with other data structures
// // that we will review later.
// const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// // Here, we put the results into a single variable 
// // for convenience. Note how we negate isOver25 using
// // the ! operator. We could also have tested for 
// // "isUnder25" as an alternative.
// const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// // Finally, log the results.
// console.log(isValid);

// // Here's another example of how this COULD be done,
// // but it SHOULD NOT be done this way. As programmers,
// // we break things into small, manageable pieces so that
// // they can be better understood, scaled, and maintained.
// const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
//   ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
//   !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
//   (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

  // Check if all numbers are divisible by 5
let div5n1 = n1%5 === 0;
let div5n2 = n1%5 === 0;
let div5n3 = n1%5 === 0;
let div5n4 = n1%5 === 0;

console.log(
`n1 is divisible by 5: ${div5n1}
n2 is divisible by 5: ${div5n2}
n3 is divisible by 5: ${div5n3}
n4 is divisible by 5: ${div5n4}`
);

//Check if the first number is larger than the last. Cache the result in a variable
let firstLargerThanLast = n1 > n4;
console.log(`n1 is definitely greater than n4: ${firstLargerThanLast}`);

//Accomplish the following arithmetic chain:
// Sub the first num from the second, mult the result by the third num, find the remainder of diving result by the fourth num
let arithChain = ((n2 - n1)*n3)%n4;
console.log(arithChain);

// Change the way that isOver25 calculates so that we don't need to use the NOT operator in other logic comparisons. Rename the variable as appropriate
isUnder25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;
console.log(isUnder25)

//Word problem
let totalDistance = 1500; //distance in miles
let fuelEff55 = 30; // fuel efficiency at 55 mph, units miles/gallon
let fuelEff60 = 28; // fuel efficiency at 60 mph, units miles/gallon
let fuelEff75 = 23; // fuel efficiency at 75 mph, units miles/gallon

let fuelBudget = 175 // 175 dollars
let fuelCost = 3 // 3 dollars/gallon

// How many gallons of fuel will yo need for the entire trip?
let tripGallons55 = totalDistance * (1/fuelEff55) // Gallons required while traveling at 55mph on average
let tripGallons60 = totalDistance * (1/fuelEff60) // Gallons required while traveling at 60mph on average
let tripGallons75 = totalDistance * (1/fuelEff75) // Gallons required while traveling at 75mph on average


let tripCost55 = tripGallons55*fuelCost
let tripCost60 = tripGallons60*fuelCost;
let tripCost75 = tripGallons75*fuelCost;

console.log(
`At 55mph, the trip will cost ${Number.parseFloat(tripCost55).toFixed(2)} dollars
At 60mph, the trip will cost ${Number.parseFloat(tripCost60).toFixed(2)} dollars
At 75mph, the trip will cost ${Number.parseFloat(tripCost75).toFixed(2)} dollars`
);