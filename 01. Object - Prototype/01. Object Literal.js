// Object Literal in JS
let person = {
  name: "John Wick",
  age: 30,
  city: "New York",
  target: "Jedi",
  current_status: "Member",
  status: function (new_status) {
    console.log(`${this.current_status} -> ${new_status}`);
    this.current_status = new_status;
  },
};

console.log(
  `
  Person Details (Before):
      Name    : ${person.name}
      Age     : ${person.age}
      City    : ${person.city}
      Target  : ${person.target}
      Status  : ${person.current_status}
      `
);

person.status("Excommunicado");

console.log(
  `
  Person Details (After):
    Name    : ${person.name}
    Age     : ${person.age}
    City    : ${person.city}
    Target  : ${person.target}
    Status  : ${person.current_status}
    `
);
