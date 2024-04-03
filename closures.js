function outerFunction() {
  let outerVariable = "I am from the outer function";
  
  function innerFunction() {
    console.log(outerVariable); // Accessing outerVariable from the outer function
  }
  return innerFunction;
}
// Assigning the inner function returned by outerFunction to a variable
let closureExample = outerFunction();

// When we call closureExample, it still has access to the outerVariable
closureExample(); // Output: "I am from the outer function"
