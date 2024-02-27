// Creating objects using Object.create

const ModifyCumiDarat = {
  upgradeHL(headlights) {
    this.headlights = headlights;
  },
  upgradeECU(ECU) {
    this.ecu = ECU;
  },
  refuel(fuel) {
    this.fuel = fuel;
  }
}

function CreateCumiDarat (brand, type){
    let CumiDarat = Object.create(ModifyCumiDarat);
    CumiDarat.brand = brand;
    CumiDarat.type = type;
    return CumiDarat;
}

let Toyota_2GD = CreateCumiDarat("Toyota", "2GD");
console.log(`Stock Toyota 2GD:`, Toyota_2GD);
Toyota_2GD.upgradeHL("PRO7");
Toyota_2GD.upgradeECU("Stage 2");
Toyota_2GD.refuel(20);
console.log(`Modified Toyota 2GD:`, Toyota_2GD);