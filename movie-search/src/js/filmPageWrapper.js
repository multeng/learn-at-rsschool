// export default function makeFilmPage(imgUrl, filmTitle, rating, year, imdb) {
export default function makeFilmPage(movie) {
  const { Poster, Title, Year, imdbID, rating } = movie;
  const wrapper = document.createElement("div");
  wrapper.classList.add("swiper-slide");
  wrapper.innerHTML += `
    <div class="card-container">
        <div class="poster">
            <img src="${Poster}" alt="${Title}">
        </div>
        <div class="movie-title">
            <a class="movie-tilte__link" target="_blank" href="https://www.imdb.com/title/${imdbID}"><p class="movie-title__content">${Title}</p></a>
        </div>
        <div class="additional-info">
            <div class="year">
                <p class="year__content">${Year}</p>
            </div>
            <div class="rating">
                <img src="./src/assets/images/star.png" alt="star">${rating}
            </div>
        </div>
    </div>
    `;
  return wrapper;
}
