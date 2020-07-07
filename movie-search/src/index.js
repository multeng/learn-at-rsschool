import "./styles/main.scss";
import Swiper from "swiper";
import makeFilmPage from "./js/filmPageWrapper";
import translate from "./js/translate";

const searchInput = document.querySelector(".search__input");
const buttonSearch = document.querySelector(".search__button");
const searchStatus = document.querySelector(".search-status__content");
const swiperButtonNext = document.querySelector(".swiper-button-next");
const form = document.querySelector(".search__form");
let currentMovie = "love";
let currentPage = 1;

const mySwiper = new Swiper(".swiper-container", {
  slidesPerView: 4,
  spaceBetween: 30,
  initialSlide: 0,
  simulateTouch: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    740: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});

function RenderMovieSet(movieDataSet) {
  movieDataSet.forEach(async (movie) => {
    movie.rating = await getMovieIMDB(movie.imdbID);
    if (movie.Poster === "N/A") {
      movie.Poster = "./src/assets/images/no-image.jpg";
    }
    const moviePage = makeFilmPage(movie);
    mySwiper.appendSlide(moviePage);
  });
  mySwiper.update();
}

async function renderNewMovieSlides(event) {
  event.preventDefault();
  mySwiper.removeAllSlides();
  currentMovie = searchInput.value.toString();
  if (currentMovie.match(/[а-яё]/i)) {
    currentMovie = await translate(currentMovie);
  }
  let movieSet = await getMovieSet(currentMovie, currentPage);
  if (!movieSet) {
    searchStatus.innerText = "Something went wrong...";
    currentMovie = "death";
    movieSet = await getMovieSet(currentMovie, currentPage);
  } else {
    searchStatus.innerText = "We found: ";
  }
  RenderMovieSet(movieSet);
  searchInput.value = "";
}

function addButtonsHandlers() {
  buttonSearch.addEventListener("click", renderNewMovieSlides);

  swiperButtonNext.addEventListener("click", async () => {
    if (mySwiper.slides.length - mySwiper.realIndex === 6) {
      currentPage++;
      const movieSet = await getMovieSet(currentMovie, currentPage);
      RenderMovieSet(movieSet);
    }
  });
  form.addEventListener("submit", renderNewMovieSlides);
}

function getMovieSet(movie, page) {
  const url = `https://www.omdbapi.com/?s=${movie}&page=${page}&apikey=59ed6b54`;
  return fetch(url)
    .then((res) => res.json())
    .then((data) => (data.Response === "False" ? null : data.Search));
}

function getMovieIMDB(imdbID) {
  const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=59ed6b54`;
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data.imdbRating);
}

addButtonsHandlers();
async function preload(searchMovie, page) {
  currentMovie = searchMovie;
  const movieSet = await getMovieSet(searchMovie, page);
  RenderMovieSet(movieSet);
  if (mySwiper.realIndex === 4) {
    currentPage++;
    let movieSet = await getMovieSet(movie, currentPage);
    RenderMovieSet(movieSet);
  }
}
preload(currentMovie, currentPage);
window.addEventListener("resize", function (event) {
  document.location.reload(true);
});
