// Destructuring Function
const albertEinstein = () => ({
  invention: "Theory of Relativity",
  age: 76,
  city: "German",
});

// Let's destructure it!
// To store a default value, just assign it to its variable
const {
  invention = "Updating...",
  age = "Updating...",
  city = "Updating...",
} = albertEinstein();

// This'll return a function
console.log(albertEinstein);

// While this'll return the value of an object
console.log(invention);
console.log(age);
console.log(city);

console.log("\n");

// Let's use a class again this time, but we'll use a function to access it
class createMathematicians {
  constructor(
    mathematician_name,
    mathematician_invent,
    mathematician_age,
    mathematician_city
  ) {
    this.mathematician_name = mathematician_name;
    this.mathematician_invent = mathematician_invent;
    this.mathematician_age = mathematician_age;
    this.mathematician_city = mathematician_city;
  }
}

// The following is used to access the object property directly
const alanTuring = new createMathematicians(
  "Alan Turing",
  "Turing Machine",
  70,
  "London"
);
console.log(alanTuring);

// Now, we'll access it using a function
function getBasicProfile({
  mathematician_name,
  mathematician_age,
  mathematician_city,
}) {
  return `
    Name: ${mathematician_name}
    Age: ${mathematician_age}
    City: ${mathematician_city}
  `;
}
console.log(getBasicProfile(alanTuring));

// Let's create a new mathematician and call it again
const marieCurie = new createMathematicians(
  "Marie Curie",
  "Radioactivity",
  56,
  "Paris"
);
console.log(getBasicProfile(marieCurie));

// If you want to print the rest of the object properties, you can do the following
const { ...mathematician_properties } = marieCurie;
console.log(mathematician_properties);

// The following is an example of nested destructuring & nested object assigns
class createCumiDarat {
  constructor(brand, type, exterior, interior) {
    this.brand = brand;
    this.type = type;
    this.exterior = {
      wheels: exterior.wheels,
      hood: exterior.hood,
      exhaust: exterior.exhaust,
    };
    this.interior = {
      ...interior,
    };
  }
}

const Toyota_2GD = new createCumiDarat(
  "Toyota",
  "2GD",
  {
    wheels: "RPF1",
    hood: "Carbon",
    exhaust: "Alpino",
  },
  {
    seats: 6,
    steer: "Sparco",
  }
);

function getExteriorDetails({brand, type, exterior: {wheels, hood, exhaust}}) {
  return `
    Brand: ${brand}
    Type: ${type}
    Exterior:
      Wheels: ${wheels}
      Hood: ${hood}
      Exhaust: ${exhaust}
  `;
}
console.log(getExteriorDetails(Toyota_2GD));