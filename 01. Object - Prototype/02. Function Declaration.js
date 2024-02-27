// Object using Function Declaration

// This method will be useful when you want to create a new instance or object with a same properties and methods

const createAssassin = (name, age, target, targetStatus) => ({
  Name: name,
  Age: age,
  Target: target,
  Target_Status: targetStatus,

  eliminateTarget: function (targetStatus) {
    this.Target_Status = targetStatus;
  },
});

let John = createAssassin("John Wick", 30, "Caine", "Member");
let Caine = createAssassin("Caine", 30, "John Wick", "Excommunicado");

console.log(
  `
    John Details:
        Name            : ${John.Name}
        Age             : ${John.Age}
        Target          : ${John.Target}
        Target Status   : ${John.Target_Status} 
    
    Caine Details:
        Name            : ${Caine.Name}
        Age             : ${Caine.Age}
        Target          : ${Caine.Target}
        Target Status   : ${Caine.Target_Status}
  `
);

Caine.eliminateTarget("Eliminated");

console.log(
  `
    Caine Details:
        Name            : ${Caine.Name}
        Age             : ${Caine.Age}
        Target          : ${Caine.Target}
        Target Status   : ${Caine.Target_Status}
        
  `
);
