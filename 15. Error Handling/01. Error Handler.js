// Search for movie
// Click Feature
const searchButton = document.querySelector("button.search-movie-button");
searchButton.addEventListener("click", async function () {
  const userSearch = document.querySelector("input.search-movie").value;
  try {
    const movies = await getMoviesList(userSearch);
    searchResult(movies);
  } catch (error) {
    alert(error);
  }
});

// Enter Feature
const userSearch = document.querySelector("input.search-movie");
userSearch.addEventListener("keydown", async function (event) {
  const userSearch = document.querySelector("input.search-movie").value;
  if (event.key == "Enter") {
    try {
      const movies = await getMoviesList(userSearch);
      searchResult(movies);
    } catch (error) {
      alert(error);
    }
  }
});

// Error Handler
class FetchError extends Error {
  constructor(message) {
    super(message);
    this.name = "FetchError";
  }
}

class EmptyDataError extends Error {
  constructor(message) {
    super(message);
    this.name = "DataError";
  }
}

// Get Movies List
async function getMoviesList(userSearch) {
  try {
    const response = await fetch(
      "http://www.omdbapi.com/?apikey=f0ed5b10&s=" + userSearch
    );

    // Error Handle for HTTP Errors
    if (!response.ok) {
      throw new FetchError(
        `HTTP error: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();

    // Error Handler for Empty Data
    if (!data || !data.Search || data.Search.length === 0) {
      throw new EmptyDataError("No movies found for the given search or empty search");
    }
    return data.Search;
  } catch (error) {
    throw error;
  }
}

// Search Result (Cards)
function searchResult(movies) {
  const cards = generateCards(movies);
  const movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = cards;

  // Modal Trigger
  modalTrigger();
}

// Generate Cards
function generateCards(movies) {
  let cards = ``;
  for (const movie of movies) {
    cards += createCards(movie);
  }
  return cards;
}

// Trigger Modal
function modalTrigger() {
  const modalTrigger = document.querySelectorAll(".modal-trigger");
  for (const trigger of modalTrigger) {
    trigger.addEventListener("click", async function () {
      const imdbID = trigger.dataset.imdbid;
      await triggeredModal(imdbID);
    });
  }
}

// When modal is triggered
async function triggeredModal(imdbid) {
  try {
    const response = await fetch(
      "http://www.omdbapi.com/?apikey=f0ed5b10&i=" + imdbid
    );

    // Error Handler for HTTP Errors
    if (!response.ok) {
      throw new FetchError(
        `HTTP error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    const movieDetails = await getMovieDetails(data);
    const modalBody = document.querySelector(".modal-body");
    modalBody.innerHTML = movieDetails;
  } catch (error) {
    console.log(error);
  }
}

function createCards(movie) {
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

async function getMovieDetails(details) {
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
