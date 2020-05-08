import './styles/main.scss';
import renderMovieSet from './js/renderMovieSet';
import makeFilmPage from './js/filmPageWrapper';


const searchInput = document.querySelector('.search__input');
const button = document.querySelector('.search__button');
const form = document.querySelector('.search__form');


function handler() {
    button.addEventListener('click', async () => {
        const movie = searchInput.value.toString();
        const movieSet = await getMovieSet(movie, 1);
        for (let i = 0; i < movieSet.length; i++) {
            movieSet[i].rating = await getMovieIMDB(movieSet[i].imdbID);
            let moviePage = makeFilmPage(movieSet[i].Poster,movieSet[i].Title, movieSet[i].rating);
            renderMovieSet(moviePage);
        }
        console.log(movieSet);
        form.reset();
    })
}


async function getMovieSet(movie, page) {
    const url = `https://www.omdbapi.com/?s=${movie}&page=${page}&apikey=59ed6b54`;

    const res = await fetch(url);
    const data = await res.json();
    return data.Search;
}

async function getMovieIMDB(imdbID) {
    const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=59ed6b54`;

    const res = await fetch(url);
    const data = await res.json();

    return data.imdbRating;
}

handler();
getMovieSet('love', 1);
