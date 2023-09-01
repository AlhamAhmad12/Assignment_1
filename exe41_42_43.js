"use strict";
// Exercise 41: Magicians
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
const magicians = ['Apollo', 'Blaine', 'Devant'];
show_magicians(magicians);
// Exercise 42: Great Magicians
function make_great(magicians) {
    return magicians.map((magician) => `the Great ${magician}`);
}
const greatMagicians = make_great(magicians.slice()); // Create a copy of the original array
console.log("\nOriginal array");
show_magicians(magicians);
console.log("\nModified array");
show_magicians(greatMagicians);
// Exercise 43: Unchanged Magicians
const magiciansArray = ['Apollo A', 'Blaine B', 'Devant C'];
console.log("\ncopy of the original array");
const greatMagiciansArray = make_great([...magiciansArray]);
console.log("\nOriginal array: ");
show_magicians(magiciansArray);
console.log("\nModified array:");
show_magicians(greatMagiciansArray);
