// for...in

// I'll take the previous object in this session
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

console.log(Toyota_2GD);

console.log("\nToyota_2GD Properties");
for (const key in Toyota_2GD) {
  console.log(key);
}

// To access the properties values, we can use the following
console.log("\nToyota_2GD Values");
for (const key in Toyota_2GD) {
  console.log(key, Toyota_2GD[key]);
}
