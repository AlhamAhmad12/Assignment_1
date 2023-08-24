/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/
// Tests for equality and inequality with strings
var country = "Pakistan";
console.log("is country is equal to 'Pakistan'? I predict True.");
console.log(country === "Pakistan");
console.log("is country is not equal to 'Pakistan'? I predict False.");
console.log(country !== "Pakistan");
// Tests using the lower case function
var name11 = "alham";
console.log("Is name11 in lowercase equal to 'alham'? I predict True.");
console.log(name11.toLowerCase() === "alham");
console.log("Is name11 in lowercase equal to 'Alham'? I predict false.");
console.log(name11.toLowerCase() === "Aham");
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var number22 = 100;
console.log("is number22 is equal to 100? I predict true");
console.log(number22 == 100);
console.log("is number22 is not equal to 100? I predict false");
console.log(number22 !== 100);
//grater than and Less than 
console.log("is number22 is grater than 60? I predict true");
console.log(number22 > 60);
console.log("is number22 is Less than 88? I predict false");
console.log(number22 < 88);
//Grater than and equal to
console.log("is number22 is grater than and equal to 99 ? I predict false");
console.log(number22 >= 99);
//Less than and equal to
console.log("is number22 is Less than and equal to 30? I predict false");
console.log(number22 <= 30);
//Tests using "and" and "or" operators
var laptop = true;
var computer = false;
console.log("Do they have a laptop and a computer? I predict False.");
console.log(laptop && computer);
console.log("Do they have a laptop or a computer? I predict True.");
console.log(laptop || computer);
// Test whether an item is in a array
var array11 = ["BMW", "Audi", "Ferrari", "Honda",];
console.log("is BMW is included in the array? I predict True.");
console.log(array11.includes("BMW"));
// Test whether an item is not in a array
console.log("is Audi is not included in the array ? I predict False");
console.log(!array11.includes("Audi"));
