/*
The point is to understand the concept of Execution Context, Hoisting and Scope
1. Scanning
2. Hoisting
3. Execution

These three steps will be stored in Execution Stack and will be popped out after the execution is done
*/

let person = "Ian";

function myName() {
  console.log("\nThis is the function");
  console.log(arguments);
  let greeting = "Hi my name is ";
  return greeting + person;
}

console.log(myName());

// The arguments will not be deleted although the function doesn't have any parameter. It's still be passed but isn't used
console.log(myName("Kasbon"));
