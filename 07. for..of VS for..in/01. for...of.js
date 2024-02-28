// for...of

const greatMathematicians = [
  "Carl Gauss",
  "Isaac Newton",
  "Gottfried Wilhelm von Leibniz",
  "Jacob Bernoulli",
  "Alan Turing",
];

// Let's see its comparison with other for methods
console.log("Basic For");
for (let i = 0; i < greatMathematicians.length; i++) {
  console.log(greatMathematicians[i]);
}

console.log("\nforEach");
greatMathematicians.forEach((mathematician) => {
  console.log(mathematician);
});

console.log("\nfor...of");
for (const mathematician of greatMathematicians) {
  console.log(mathematician);
}

// The disadvantages of using for...of is located when we need an index in its action. However, we can encounter this issue by using .entries()
console.log("\nEntries");
for (const [index, mathematician] of greatMathematicians.entries()) {
  console.log(index + 1, mathematician);
}

// Another iterable object example
// Strings
const carlGauss = "Carl Gauss";
console.log("\nString");
for (const letter of carlGauss) {
  console.log(letter);
}

// Function w/o Arguments
function getGreatMathematicians() {
  let greatMathematicians = [];
  for (mathematician of arguments) {
    greatMathematicians.push(mathematician);
  }
  return greatMathematicians;
}

console.log("\nFunction w/o Arguments");
console.log(getGreatMathematicians(greatMathematicians));
