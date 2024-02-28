// Fetching necessary elements
// DOM Selection
const header_list = document.querySelector("body header ul");

// Selecting any element with [total-slide] attribute
const header_list_items = header_list.querySelectorAll("[total-slide]");

// Converting the NodeList to Array
const header_list_arr = [...header_list_items];

// Filtering the array to get only li elements that contains certain category

// JS Category
const category_js = header_list_arr
  .filter((item) => item.textContent.includes("JavaScript"))
  .map((item) => item.getAttribute("total-slide"))
  .map((item) => parseInt(item))
  .reduce((accumulator, currentValue) => accumulator + currentValue);

// HTML & CSS Category
const category_html_css = header_list_arr
  .filter((item) => item.textContent.includes("HTML" || "CSS"))
  .map((item) => item.getAttribute("total-slide"))
  .map((item) => parseInt(item))
  .reduce((accumulator, currentValue) => accumulator + currentValue);

// Git Category
const category_git = header_list_arr
  .filter((item) => item.textContent.includes("Git"))
  .map((item) => item.getAttribute("total-slide"))
  .map((item) => parseInt(item))
  .reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(category_js);
console.log(category_html_css);
console.log(category_git);

// Now Let's store it on our main document
const main_list = document.querySelector("body main ol");
const slide_span_value = main_list.querySelectorAll("span.total-slide");

const slide_span_value_arr = [category_js, category_html_css, category_git];

slide_span_value_arr.forEach((item, index) => {
  slide_span_value[index].textContent = `: ${item} Slides`;
});

// To obtain the total materials, we can use the following
const material_span_value = main_list.querySelectorAll("span.total-material");

const material_category_js = header_list_arr.filter((item) =>
  item.textContent.includes("JavaScript")
);
const material_category_html_css = header_list_arr.filter((item) =>
  item.textContent.includes("HTML" || "CSS")
);
const material_category_git = header_list_arr.filter((item) =>
  item.textContent.includes("Git")
);

const material_span_value_arr = [
  material_category_js.length,
  material_category_html_css.length,
  material_category_git.length,
];

material_span_value_arr.forEach((item, index) => {
  material_span_value[index].textContent = `: ${item} Materials`;
})
