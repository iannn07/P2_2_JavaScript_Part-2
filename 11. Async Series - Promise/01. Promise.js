// Promises & Fetch

/*
const ipMan = fetch("http://www.omdbapi.com/?apikey=f0ed5b10&s=Ip Man");

// This'll return a promise, not the movie data
console.log(ipMan);

// However, if you want to access the movie data, you can use the following code
fetch("http://www.omdbapi.com/?apikey=f0ed5b10&s=Ip Man")
    .then((response) => response.json()
    .then((data) => console.log(data)));
*/

// Let's create another example
/*
let my_promises = false;
const your_promises = new Promise((resolve, reject) => {
  if (my_promises) {
    setTimeout(() => resolve("Loyal"), 250);
  } else {
    setTimeout(() => reject("Traitor"), 250);
  }
});

console.log("Start");
console.log(
  your_promises
    .finally(() => console.log("Wait is over!"))
    .then((resolved) => console.log("Accepted " + resolved))
    .catch((rejected) => console.log("Rejected " + rejected))
);
console.log("End");
*/

// All methods in Promise
const math_1 = new Promise((resolve) => {
  setTimeout(
    () =>
      resolve([
        {
          math_1_name: "Carl Gauss",
          math_1_invention: "Algebra",
          math_1_age: 77,
          origin: "Germany",
        },
      ]),
    1000
  );
});

const doc_1 = new Promise((resolve) => {
  setTimeout(
    () =>
      resolve([
        {
          doc_1_name: "Sir Alexander Fleming",
          doc_1_invention: "Penicillin",
          doc_1_age: 73,
          origin: "Scotland",
        },
      ]),
    500
  );
});

// This'll return your promise step by step
console.log("\nManual way");
console.log(math_1.then((response) => console.log(response)));
console.log(doc_1.then((response) => console.log(response)));

// However, if you have like 50 APIs, you will not do that right? So you can do the following
console.log("\nPromise All Method");
Promise.all([math_1, doc_1]).then((response) => console.log(response));

// Well, it's array inside of an array right? While we don't want that. So, we can do the following
console.log("\nPromise All Settled Method");
Promise.allSettled([math_1, doc_1]).then((response) =>
  response.forEach((value) => console.log(value))
);

// Or you can do the following
console.log("\nPromise All Method (Dummy)");
Promise.all([math_1, doc_1]).then((response) => {
  const [math, doc] = response;
  console.log(math);
  console.log(doc);
});
