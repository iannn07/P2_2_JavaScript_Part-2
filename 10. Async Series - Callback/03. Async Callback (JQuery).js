// Asynchronous Callback using JQuery

$.ajax({
  url: "json/mathematicians.json",
  success: (response) => {
    response.forEach((mathematician) => {
      console.log(
        `
            Name        : ${mathematician.name}
            Invention   : ${mathematician.invention}
            `
      );
    });
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
