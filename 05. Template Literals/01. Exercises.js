// HTML Fragments using Template Literals

class createMathematicians {
  constructor(name, invention) {
    this.name = name;
    this.invention = invention;
  }
}

let mathematicians = [
  new createMathematicians("Alan Turing", "Turing Machine"),
  new createMathematicians("Carl Gauss", "Combinatorics"),
  new createMathematicians("Leibniz", "Binary Arithmetic"),
];

const mathematiciansList = mathematicians
  .map(
    (math_invent) =>
      `<div>
    <h2>${math_invent.name}</h2>
    <p>Invention: ${math_invent.invention}</p>
    </div>`
  )
  .join("");

document.body.innerHTML = mathematiciansList;

// Another Example using Object Array
const another_example = document.createElement("h1");
another_example.textContent = `Another example`;

document.body.appendChild(another_example);

class createCumiDarat {
  constructor(brand, type) {
    this.brand = brand;
    this.type = type;
  }
  modifyCumiDarat(args) {
    this.modified = args;
  }
}

let Toyota_2GD = new createCumiDarat("Toyota", "2GD");
const modified_list = ["Flex", "PRO7", "RPF", "Tail Light"];
Toyota_2GD.modifyCumiDarat(modified_list);

function modifyList(modified) {
  return `<ol>${modified.map((item) => `<li>${item}</li>`).join(``)}</ol>`;
}

const modified_Toyota_2GD = `
<h2>Cumi Darat</h2>
<h3>Brand: ${Toyota_2GD.brand} ${Toyota_2GD.type}</h3>
<p>Modification List</p>
${modifyList(Toyota_2GD.modified)}
`;

const modified_Toyota_2GD_element = document.createElement("div");
modified_Toyota_2GD_element.innerHTML = modified_Toyota_2GD;
document.body.appendChild(modified_Toyota_2GD_element);
