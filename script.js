// provides access to the browser's debugging console, and can be accessed form any global object
console.log("Hello, World!")

/* 
This is a block comment that lets you write a bunch of comments. The
shortcut for this is Shift + Alt + A
 */

//===================DATA TYPES=====================
console.log(5, 1000, 1.5, -9.0) // integers and floats
console.log("I think mayo is gross");
console.log('this is also a string');
console.log(`third way to write string`); // This is the backtick on the tilde

console.log('This is true', true); // boolean true
console.log('This is true', false); // boolean false

console.log(null); // null

console.log(undefined); // undefined

// An object is a way for us to store information. Apparently, everything in js is an object.

//===============VARIABLE DECLARATIONS====================


// DECLARE VARIABLES
let supply;
let person;

// VARIABLE INITIALIZATION
supply = 'I pity';
person = 'the fool';

// DECLARE AND INITIALIZE VARIABLES
var firstName = 'Charles';
let lastName = 'Sprowal';
const location = `New York`;

console.log(firstName, lastName, location)

// do not user var to declare variables due to scope considerations

// use the let statement. 
let fruit = 'apple';
// console.log(fruit);

// let fruit = "banana"; // error produced because you cannot redeclare something declared with let

fruit = "strawberry";
// console.log(fruit);

// below, content within the curly brackets are 'block scoped', belonging to those brackets, but not outside the brackets
{
    const className = "2024-RTT-03"
}

// console.log(className) // reference error happens here

// TYPEOF
// let myVar = "hello World!";

// console.log(typeof 42);
// console.log(typeof myVar);
// console.log(typeof('Grapes'));

// console.log(3*8);
// console.log(58%9);

let newNumber = 9;
newNumber = newNumber + 1;

console.log(newNumber);

// Be wary of type coersion (research this!!!!!!!!!!!)

newNumber += 5;
console.log('newnumber = ', newNumber);

// Look up the difference between pre and post operators
// Look up the difference between pre and post operators
// Look up offsets in memory, for fun

console.log('\u{1d73e}')

const r = 14;
const s = 72;

console.log(`r + s = ${r + s}`);