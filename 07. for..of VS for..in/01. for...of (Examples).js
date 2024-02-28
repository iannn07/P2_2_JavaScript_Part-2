// DOM Selection
const body = document.querySelector("body ul");
const mathematicians_list = body.querySelectorAll("li.mathematician-name");

// The output of the following code is a NodeList
console.log(mathematicians_list);

// Let's take out the NodeList to be the value of the elements
for(const mathematician of mathematicians_list) {
  console.log(mathematician.textContent);
}