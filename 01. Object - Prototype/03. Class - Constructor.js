// Creating objects using class or constructor

// Since Assassin object is very hard to be manipulated its behavior, thus i changed the object to a bike

class CumiDarat {
  constructor(brand, type, headlights, ecu, fuel) {
    this.brand = brand;
    this.type = type;
    this.headlights = headlights;
    this.ecu = ecu;
    this.fuel = fuel;
  }
  upgradeHL(headlights) {
    this.headlights = headlights;
  }
  upgradeECU(ECU) {
    this.ecu = ECU;
  }
  refuel(fuel) {
    this.fuel = fuel;
  }
}

const Toyota_2GD = new CumiDarat("Toyota", "2GD", "OEM", "OEM", 0);
const Mitsubishi_4N15 = new CumiDarat("Mitsubishi", "4N15", "OEM", "OEM", 0);
const Toyota_1KD = new CumiDarat("Toyota", "1KD", "OEM", "OEM", 0);

console.log(`
    Toyota_2GD_Stock:
        Headlights    : ${Toyota_2GD.headlights}
        ECU           : ${Toyota_2GD.ecu}
        Fuel          : ${Toyota_2GD.fuel}
`);

console.log("Upgrading Toyota_2GD's Headlights, ECU, and Refueling...");

Toyota_2GD.upgradeHL("PRO7");
Toyota_2GD.upgradeECU("Stage 2");
Toyota_2GD.refuel(20);

console.log(`
    Toyota_2GD_Modified:
        Headlights    : ${Toyota_2GD.headlights}
        ECU           : ${Toyota_2GD.ecu}
        Fuel          : ${Toyota_2GD.fuel}
`);