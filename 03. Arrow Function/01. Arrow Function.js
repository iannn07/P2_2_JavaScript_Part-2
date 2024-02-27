// Arrow Function vs. Function Declaration vs. Function Expression

// Function Declaration
function functionDeclaration() {
  console.log("Function Declaration");
}

let functionExpression = function () {
  console.log("Function Expression");
};

// Arrow Function
let arrowFunction = () => console.log(`Arrow Function`);

functionDeclaration();
functionExpression();
arrowFunction();

// Another complex example for arrow function
let author = (name, invention) => ({
  name,
  invention,
});

console.table(author("Alan Turing", "Turing Machine"));

// Multiple objects
class createMathematicians {
  constructor(name, invention) {
    this.name = name;
    this.invention = invention;
  }
}

let mathematicians = [
  new createMathematicians("Alan Turing", "Turing Machine"),
  new createMathematicians("Carl Gauss", "Combinatorics"),
  new createMathematicians("Leibniz", "Binary Arithmetic"),
];

let mathematiciansList = mathematicians.map(math_invent => ({
  Name: math_invent.name,
  Invention: math_invent.invention,
}));

console.table(mathematiciansList);
