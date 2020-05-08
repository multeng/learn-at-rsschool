export default function makeFilmPage(imgUrl, filmTitle, rating) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('film-page');
    wrapper.innerHTML +=`
        <div class="poster">
            <img src="${imgUrl}" alt="${filmTitle}" srcset="">
        </div>
        <div class="title">
            <p>${filmTitle}</p>
        </div>
        <div class="rating">
            <p>IMDb rating: ${rating}</p>
        </div>
    `
    return wrapper;
};