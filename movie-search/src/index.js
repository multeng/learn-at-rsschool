import './styles/main.scss';


const searchInput = document.querySelector('.search__input');
const button = document.querySelector('.search__button');
const form = document.querySelector('.search__form');


function handler() {
    button.addEventListener('click', () => {
        console.log(searchInput.value.toString());
        const film = searchInput.value.toString();
        const movieSet = getMovieSet(film, 1);
        console.log(movieSet);
        form.reset();
    })
}

handler();
function getMovieSet(film, page) {
    const url = `https://www.omdbapi.com/?s=${film}&page=${page}&apikey=59ed6b54`;

    return fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.Search);
        });
}

function getMovieIMDB(imdbID) {
    const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=59ed6b54`;
    return fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.imdbRating);
        });
}