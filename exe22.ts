//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

// Create an array of programming languages
const progLanguages= ["Python","Java","Ruby","Go","PHP","TypeScript","Rust","C++"];
  
// invalid index
const invalidIndex = 11;
console.log(invalidIndex);

//Correct the error 
if (invalidIndex < progLanguages.length) {
  console.log("Valid index:", progLanguages[invalidIndex]);
} else {
  console.log("Invalid index, out of bounds.")};