// Callback Function
const cumiDaratBrand = (brand) => brand;
const cumiDaratType = (type) => type;

function getCumiDarat(brand, type) {
  console.log(
    `
    Here's your Cumi Darat Brand & Type:
    Brand: ${cumiDaratBrand(brand)}
    Type: ${cumiDaratType(type)}
    `
  );
}

getCumiDarat("Toyota", "2GD");
