// Asynchronous Callback using Vanilla JS

function getGreatMathematicians(url, success, error) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      success(this.response);
    } else if (this.status == 404) {
      error();
    }
  };

  xhr.open("GET", url);
  xhr.send();
}

// This'll call all of Great Mathematicians stored in the .json file in JSON Format
getGreatMathematicians(
  "json/mathematicians.json",
  function success(response) {
    console.log(response);
  },
  function error() {
    console.log("Page Not Found");
  }
);

// However, if you don't want the JSON format to be printed, you can do the following
// This method will took JSON format to objects
getGreatMathematicians(
  "json/mathematicians.json",
  function success(response) {
    console.log(JSON.parse(response));
  },
  function error() {
    console.log("Page Not Found");
  }
);

// But, if you want to make this JSON format to be printed specifically (Name, etc.), you can do the following
getGreatMathematicians(
  "json/mathematicians.json",
  function success(response) {
    const parse_mathematician = JSON.parse(response);
    parse_mathematician.forEach((mathematician) => {
      console.log(
        `
        Name        : ${mathematician.name}
        Invention   : ${mathematician.invention}
        `
      );
    });
  },
  function error() {
    console.log("Page Not Found");
  }
);
