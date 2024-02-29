// Search for movie
// $(".search-movie-button").on("click", function () {
//   // Movie List
//   $.ajax({
//     url:
//       "http://www.omdbapi.com/?apikey=f0ed5b10&s=" + $(".search-movie").val(),
//     success: function (response) {
//       const movies = response.Search;
//       let cards = ``;
//       movies.forEach((movie) => {
//         cards += getCards(movie);
//       });
//       $(".movie-container").html(cards);

//       // Modal Triggered
//       $(".modal-trigger").click(function () {
//         triggerModal($(this).data("imdbid"));
//       });
//     },
//     error: (e) => console.error(e.responseText),
//   });
// });

// function triggerModal(imdbid) {
//   $.ajax({
//     url: "http://www.omdbapi.com/?apikey=f0ed5b10&i=" + imdbid,
//     success: function (details) {
//       const movieDetails = getMovieDetails(details);
//       $(".modal-body").html(movieDetails);
//     },
//     error: (e) => console.error(e.responseText),
//   });
// }

// Using fetch
const searchButton = document.querySelector("button.search-movie-button");
searchButton.addEventListener("click", function () {
  getMoviesList();
});

// Enter Feature
const userSearch = document.querySelector("input.search-movie");
userSearch.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    getMoviesList();
  }
});

function getMoviesList() {
  const userSearch = document.querySelector("input.search-movie").value;
  fetch("http://www.omdbapi.com/?apikey=f0ed5b10&s=" + userSearch)
    .then((response) => response.json())
    .then((data) => {
      const movies = data.Search;
      let cards = ``;
      movies.forEach((movie) => {
        cards += getCards(movie);
      });
      const movieContainer = document.querySelector(".movie-container");
      movieContainer.innerHTML = cards;

      // Modal Triggered
      const modalTrigger = document.querySelectorAll(".modal-trigger");
      modalTrigger.forEach((trigger) => {
        trigger.addEventListener("click", () =>
          triggerModal(trigger.dataset.imdbid)
        );
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

function triggerModal(imdbid) {
  fetch("http://www.omdbapi.com/?apikey=f0ed5b10&i=" + imdbid)
  .then((response) => response.json()).then((data) => {
    const movieDetails = getMovieDetails(data);
    const modalBody = document.querySelector(".modal-body");
    modalBody.innerHTML = movieDetails;
  })
  .catch((err) => {
    console.log(err);
  })
}

function getCards(movie) {
  return `
  <div class="col-md-4 my-3">
    <div class="card">
      <img src="${movie.Poster}" class="card-img-top posters" alt="Images" />
      <div class="card-body">
        <h5 class="card-title">${movie.Title}</h5>
        <h6 class="card-subtitle text-info mb-2">${movie.Year}</h6>
        <div class="text-center">
          <a
            href="https://www.imdb.com/title/${movie.imdbID}/"
            target="_blank"
            class="btn btn-primary modal-trigger text-center"
            data-bs-toggle="modal"
            data-bs-target="#detailsModal"
            data-imdbid="${movie.imdbID}"
            >Show Details</a
          >
        </div>
        <p class="text-center pt-2">
          <a
          href="https://www.imdb.com/title/${movie.imdbID}/"
          target="_blank"
          class="link link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
          Go to IMDb
          </a>
        </p>
      </div>
    </div>
  </div>
  `;
}

function getMovieDetails(details) {
  return `
  <div class="container-fluid">
    <div class="row align-items-center">
      <div class="col-md-3">
        <img src="${details.Poster}" alt="" class="img-fluid" />
      </div>
      <div class="col-md">
        <ul class="list-group">
          <li class="list-group-item">
            <h1>${details.Title} (${details.Year})</h1>
          </li>
          <li class="list-group-item">
            <h2>${details.Runtime}</h2>
          </li>
          <li class="list-group-item text-start">
            <strong>Genre :</strong>${details.Genre}
          </li>
          <li class="list-group-item text-start">
            <strong>Director:</strong>${details.Director}
          </li>
          <li class="list-group-item text-start">
            <strong>Writer :</strong>${details.Writer}
          </li>
          <li class="list-group-item text-start">
            <strong>Actors :</strong>${details.Actors}
          </li>
        </ul>
      </div>
    </div>
  </div>
`;
}
