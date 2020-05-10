export default function makeFilmPage(imgUrl, filmTitle, rating, year, imdb) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('swiper-slide');
    wrapper.innerHTML +=`
    <div class="card-container">
        <div class="poster">
            <img src="${imgUrl}" alt="${filmTitle}">
        </div>
        <div class="movie-title">
            <a class="movie-tilte__link" target="_blank" href="https://www.imdb.com/title/${imdb}"><p class="movie-title__content">${filmTitle}</p></a>
        </div>
        <div class="additional-info">
            <div class="year">
                <p class="year__content">${year}</p>
            </div>
            <div class="rating">
                <img src="./src/assets/images/star.png" alt="star">${rating}
            </div>
        </div>
    </div>
    `
    return wrapper;
};