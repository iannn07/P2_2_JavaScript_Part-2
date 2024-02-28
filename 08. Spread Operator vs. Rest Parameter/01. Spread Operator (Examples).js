// DOM Selection

const body = document.querySelector("body ul");
const mathematicians_list = body.querySelectorAll("li.mathematician-name");

// This code will return a NodeList
console.log(mathematicians_list);

// However, to convert mathematicians_list to an Array we need to use the spread operator
const mathematicians_list_array = [...mathematicians_list];
console.log(mathematicians_list_array);

// Or, we can use .map method too!
const mapped_mathematicians_list_array = [...mathematicians_list].map(
  (item) => item.textContent
);
console.log(mapped_mathematicians_list_array);

// Let's try DOM Events and implement spread operator
// DOM Events

const events_mapped_mathematicians_list_array = [...mathematicians_list].map(
  (item) => item.classList.add("math-hover")
);
