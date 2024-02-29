// Promise
function math_1() {
  return new Promise((resolve) => {
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
      2000
    );
  });
}

// Asynchronous Function
async function getMathematicians() {
  const call = await math_1();
  console.log(call);
}

getMathematicians();

// You won't get the object value if you do the following
function getMathematiciansFailed() {
  const call = math_1();
  console.log(call);
}

getMathematiciansFailed();

// Let's create another example
function doc_1() {
  const time = (Math.floor(Math.random() * 10) + 1) * 1000;
  return new Promise((resolve, reject) => {
    if (time < 5000) {
      resolve([
        {
          doc_1_name: "Sir Alexander Fleming",
          doc_1_invention: "Penicillin",
          doc_1_age: 73,
          origin: "Scotland",
        },
      ]);
    } else {
      reject("Something went wrong");
    }
  });
}

async function getDoctor() {
  try {
    const call = await doc_1();
    console.log(call);
  } catch (error) {
    console.error(error);
  }
}

getDoctor();
