// Rest Parameter
function greatMathematicians(...mathematicians) {
  return mathematicians;
}

const mathematicians = greatMathematicians(
  "Carl Gauss",
  "Isaac Newton",
  "Gottfried Wilhelm von Leibniz",
  "Jacob Bernoulli",
  "Alan Turing"
);

console.log(mathematicians);

// Another Example using class
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
    perfume: "Stella Jeruk",
  }
);

// Here's to print the exterior of Toyota 2GD car
const {
  brand,
  type,
  exterior: { ...values },
} = Toyota_2GD;
console.log(brand, type, values);

// Another example in function filtering
function getMy2GDInterior(type, ...parts) {
  return parts.filter((part) => typeof part === type);
}

console.log(getMy2GDInterior("string", ...Object.values(Toyota_2GD.interior)));
