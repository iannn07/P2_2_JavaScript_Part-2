// Destructuring Assignment
// To destructure an object
const math_constant = {
  PI: Math.PI,
  Euler: Math.E,
};

// This is old
console.log("OLD WAYS");
let math_pi = math_constant.PI;
console.log(math_pi);

// We can make it more quicker by using the following code
console.log("\nNEW WAYS");
let { PI: math_pi_new, Euler: math_euler_new } = math_constant;
console.log(math_pi_new, math_euler_new);

console.log("\n");

// To destructure an nested object
const hamsters_vet_data = {
  Kasbon: {
    name: "Kasbon",
    race: "Roborovski",
  },
  Fat_Kasbon: {
    name: "Fat Kasbon",
    age: "1 Months 3 Weeks",
  },
};

// This is old
console.log("OLD WAYS");
let hamster_name_kasbon = hamsters_vet_data.Kasbon.name;
console.log(hamster_name_kasbon);

// Quicker way
console.log("\nNEW WAYS");
let {
  Fat_Kasbon: { name: hamster_name_fat_kasbon },
} = hamsters_vet_data;
console.log(hamster_name_fat_kasbon);

console.log("\n");

// To destructure an array
let arr = [1, 2, 3, 4, 5];
let [a, b, c, d, e] = arr;
console.log(a, b, c, d, e);

console.log("\n");

// Destructure Using Rest Operator
const rest_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [, , ...rest] = rest_arr;
console.log("Destructured Array: ", rest);
console.log("Full Array: ", rest_arr);

console.log("\n");

// Destructure for passing an argument
function HamsterName({ Kasbon, Fat_Kasbon }) {
  let { name: kasbon_name } = Kasbon;
  let { name: fat_kasbon_name } = Fat_Kasbon;
  return [kasbon_name, fat_kasbon_name];
}

console.log(HamsterName(hamsters_vet_data));

console.log("\n");

// Additional using class & REST Operator
class createMathematicians {
  constructor() {
    this.mathematician_name = "Albert Einstein";
    this.invention = "Theory of Relativity";
    this.age = 70;
    this.city = "German";
  }
}
const the_greatest_mathematician = new createMathematicians();
// This will return an object.
console.log(the_greatest_mathematician);

// However, if you want to access certain data, you can do the following
const { mathematician_name } = the_greatest_mathematician;
console.log(mathematician_name);

// If you want to print the rest of the object properties, you can do the following
const {...mathematician_properties} = the_greatest_mathematician;
console.log(mathematician_properties);