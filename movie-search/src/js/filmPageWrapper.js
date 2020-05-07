export default function makeFilmPage(imgUrl, filmTitle, rating) {
    const wrapper = `
    <div class="film-page">
        <div class="poster">
            <img src="${imgUrl}" alt="${filmTitle}" srcset="">
        </div>
        <div class="title">
            <p>${filmTitle}</p>
        </div>
        <div class="rating">
            <p>IMDb: ${rating}</p>
        </div>
    </div>
    `
    return wrapper;
};