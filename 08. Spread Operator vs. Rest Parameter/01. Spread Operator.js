// Spread Operator

const greatMathematicians = [
  "Carl Gauss",
  "Isaac Newton",
  "Gottfried Wilhelm von Leibniz",
  "Jacob Bernoulli",
  "Alan Turing",
];

const greatMedicalDoctor = [
  "Hippocrates",
  "Joseph Lister",
  "Elizabeth Blackwell",
  "Edward Jenner",
  "Sir Alexander Fleming",
];

// We can combine both of them by using spread operators
const greatestPeopleInThePast = [
  ...greatMathematicians,
  ...greatMathematicians,
];
console.log(greatestPeopleInThePast);

// Or we can push a new element into the array by the following

const addedMathematicians = [...greatMathematicians, "Brook Taylor"];
console.log(addedMathematicians);
