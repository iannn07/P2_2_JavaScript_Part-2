// this using Arrow Function

// Function
const box = document.querySelector("body div.box");
box.addEventListener("click", function () {
  console.log(this);
  this.classList.toggle("upsize");
  this.classList.toggle("color");
});

// Arrow
const box2 = document.querySelector("body div.box-2");
box2.addEventListener("mouseover", () => {
  console.log(this);
  this.classList.toggle("upsize");
  this.classList.toggle("color");
});

// Function + Arrow
const box3 = document.querySelector("body div.box-3");
box3.addEventListener("click", function () {
  console.log(this);
  this.classList.toggle("upsize");
  setTimeout(() => {
    this.classList.toggle("color");
  }, 200);
});
