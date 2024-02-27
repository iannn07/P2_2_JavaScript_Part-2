// Prototype

/*
Well, I need to clarify. The difference between class, object.create, and prototype

1. Class
    This was introduced back then in ES6, which means class is more powerful rather than the others. However, the logic behind class implementation is using object.create and prototype
2. Object.create
    You'll creating an object with many methods. However, you'll working on two objects at the same time. This is not a good implementation when you're working on small or large project. e.g. A car can be modified, tune up, or getting serviced.
3. Prototype
    Creating an object within a same object. This is a good implementation when you're working on a small project. The logic is just the same with object.create, but it makes our code to be more concise.

Thus, in short, class is recommended for a large project since it'll be easier to manipulate and understand. While prototype is recommended for small project since you'll create an object with many methods at the same time.
*/

function CreateCumiDarat(brand, type) {
  this.brand = brand;
  this.type = type;
}

CreateCumiDarat.prototype.upgradeHL = function (headlights) {
  this.headlights = headlights;
};
CreateCumiDarat.prototype.upgradeECU = function (ECU) {
  this.ecu = ECU;
};
CreateCumiDarat.prototype.refuel = function (fuel) {
  this.fuel = fuel;
};

let Toyota_2GD = new CreateCumiDarat("Toyota", "2GD");
console.log(`Stock Toyota 2GD (Prototype):\n`, Toyota_2GD);
Toyota_2GD.upgradeHL("PRO7");
Toyota_2GD.upgradeECU("Stage 2");
Toyota_2GD.refuel(20);
console.log(`Modified Toyota 2GD (Prototype):`, Toyota_2GD);

console.log("\n");

class CreateBumperDelete{
    constructor(brand, type){
        this.brand = brand;
        this.type = type;
    }
    upgradeStage(stage){
        this.stage = stage;
    }
    upgradeTurbo(turbo){
        this.turbo = turbo;
    }
}

let Lamborghini_LP610 = new CreateBumperDelete("Lamborghini", "LP610");
console.log(`Stock Lamborghini LP610 (Class):\n`, Lamborghini_LP610);
// Lamborghini_LP610.upgradeStage("Stage 2");
// Lamborghini_LP610.upgradeTurbo("Turbo");
// console.log(`Modified Lamborghini LP610 (Class):`, Lamborghini_LP610);