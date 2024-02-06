/* 
                     __ 
                  | /   
                  |(___ 
                  )    )
                _/  __/ 
                        
        __                       
       /  |           /          
      (___| ___         ___      
      |\   |___) \  )| |___)|   )
      | \  |__    \/ | |__  |/\/ 

*/

// Instructions: Follow the prompts and make sure to check your answer in the console. Some of the methods I am requiring of you to use, we may not have done in class. That's on purpose, if you need assistance look back  in lessons, and of course Google. :) 

// =================================================
//                     VARIABLES
// =================================================

// 1.) Declare a variable
let var1;
// 2.) Change the value of this variable
var1 = 30;
// 3.) Change the data type of this variable
var1 = String(var1);
// console.log(typeof(var1));
// 4.) Create another variable and the one from above to concatenate
// 5.) Use any of the variables above or create new ones and print using string interpolation
var2 = ` Hi, my name is Barles and I am ${var1} years old`
var3 = var1 + var2;
console.log(var3);8

// ================ Variable Names =================
/* 
    • Case-sentive! Try it out! :O
    • Can contain letters, digits, or the symbols $ and _
    • Can't start with 0-9
    • Can't use reserved keywords in JS such as var, function, return, etc. 
*/

// =================================================
//                      STRINGS
// =================================================

// Look up the following string methods!

// Using charAt(), print the letter i in Susmita
let name1 = "Susmita";
console.log(name1.charAt(4));
// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Ciera
/* Unicode, formally The Unicode Standard, is a text encoding standard maintained by the Unicode Consortium designed to support the use of text written in all of the world's major writing system */
let name2 = "Ciera";
console.log(name2.charCodeAt(2));
// Using fromCharCode() - make it readable for us :). You'll see!
let encoded = name2.charCodeAt(2);
console.log(String.fromCharCode(encoded));
// Take your first and last name and concat()
let fname = 'Charles';
let lname = 'Sprowal';
console.log(fname + ' ' + lname);
// Create a string and make it return true using startsWith()
str4 = "Here is a string"
console.log(str4.startsWith('Here'));

// Now use any variable with endsWith() and return false
console.log(var3.endsWith('z'));

// Finish the following sentence. Use includes() and return true.
let maireg = 'Once upon a time Maireg looked up at the Moon, and turned into a wolf man.'
console.log(maireg.includes('time'));

// Help! I'm looking for my cow! Using indexOf() help Manny find his cow. What's the index of cow?
let mannyHadALittleLambOopsCow = "Manny lives in a farm. Manny was overwhelmed with coding. Manny is stressed out. Manny fed the chickens this morning and watered his plants. He took his cow Betsy on a walk. Manny went home without Betsy. Manny went to bed that night, and realized he left Betsy."
console.log(mannyHadALittleLambOopsCow.indexOf('cow'));

// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien Ty in the String Universe.

let ty = "I am the Alpha Ty. I am the Omega Ty. We do not come in peace." // review this
console.log(ty.lastIndexOf('Ty'));

// Can we use length for strings? I don't know, you tell me.
let noWeCantTeo = "but did you try it out though?"
console.log(noWeCantTeo.length);


// If only it was this easy to replace() my ex. LOL. JK
let replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!"
console.log(replaceGokuWithVegeta.replace('Goku', 'Vegeta')); // figure out optional syntax of this method

// Randi has been forgetful lately. Let's help Randi by using search(), and find their iPhone. 

let randiIsLookingForiPhone = "iphone 1, iPhone 2, IPHONE 3, ifone 4"
console.log(randiIsLookingForiPhone.search('iPhone'));

// I guess we can share this pizza sentence. Use slice() to return "other half of pizza".
let pizzaSentence = "pizza, other half of pizza"
let index_0 = pizzaSentence.indexOf('o');
console.log(pizzaSentence.slice(index_0));


// Now using the pizza sentence, return only pizza (before the comma)
index_pizza = pizzaSentence.indexOf('pizza');
console.log(pizzaSentence.slice(index_pizza, index_pizza + 5));


// Okay, but who decided to go to this expensive restaurant? Brittany, Andrew, and Rockelle decided to split() the bill. Return an array separating Brittany, Andrew, and Rockelle.
let splitTheBill = "Brittany Andrew Rockelle"
console.log(splitTheBill.split(' '));

// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Brittany, Andrew, and Rockelle into pieces. Using splitTheBill, return an array separating all three by single characters. "B, r, i, ..."
console.log(splitTheBill.split(''));

// Use this toLowerCase()
let angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS."
// Michael was angry today. Create a string with words that Michael would yell out. Now lowercase it, to tell Micahel to chill out. 
console.log(angry.toLowerCase());

// toUpperCase()
let coreySaidToPutSomeRespectToHisName = "corey feder"
console.log(coreySaidToPutSomeRespectToHisName.toUpperCase());

// substring()
// on the chopping block...

// Returns "ell"
let basicGreeting = "Hello World"
console.log(basicGreeting.substring(1, 4));

// Returns "JavaScript"
let ohReally = "JavaScript Substring"
console.log(ohReally.substring(0, 11));

// Returns aol.com
let aslDays = "xXteoWuzHereXx@aol.com"
console.log(aslDays.substring(aslDays.indexOf('@'), aslDays.length));

// trim()
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.
var5 = '  some string '
console.log(var5.trim());

// =================================================
//                     BOOLEAN
// =================================================

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Suresh"

console.log(a < b)
console.log(c > b)
console.log(d === d)
console.log(d !== a)
console.log(a < 15)
console.log(a < b < c)
console.log(c > b > a !== d)