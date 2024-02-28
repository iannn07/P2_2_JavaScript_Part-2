// Tagged Template Literals

const mathematicians = "Carl Gauss";
const invention = "Combinatorics";

function tag_1(strings, ...values) {
  return values;
}

const tagged_1 = tag_1`${mathematicians} invented ${invention}`;

console.log(tagged_1);

// Another example
// Traditional Way
function tag_2(strings, ...values) {
  let result = ``;
  strings.forEach((string, index) => {
    result += `${string}${values[index] || ""}`;
  });
  return result;
}

const tagged_2 = tag_2`Hello ${mathematicians} and ${invention}!`;
console.log(tagged_2);

// HOF Way
function tag_3(strings, ...values) {
  return strings.reduce(
    (result, str, i) => `${result}${str}${values[i] || ""}`,
    ``
  );
}

const tagged_3 = tag_3`${invention} was invented by ${mathematicians}`;
console.log(tagged_3);
