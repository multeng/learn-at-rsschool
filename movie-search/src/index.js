import './styles/main.scss';
import Swiper from 'swiper';
import renderMovieSet from './js/renderMovieSet';
import makeFilmPage from './js/filmPageWrapper';
import translate from './js/translate';
import deleteMovePages from './js/deleteMovePages';


const searchInput = document.querySelector('.search__input');
const button = document.querySelector('.search__button');
const form = document.querySelector('.search__form');


function handler() {
    button.addEventListener('click', async () => {
        deleteMovePages();
        const movie = searchInput.value.toString();
        const movieSet = await getMovieSet(movie, 1);
        console.log(movieSet);
        movieSet.forEach(async (movie) => {
            let rating = await getMovieIMDB(movie.imdbID);
            let moviePage = makeFilmPage(movie.Poster, movie.Title, rating);
            renderMovieSet(moviePage);
            mySwiper.update();
        });
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

const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    initialSlide: 0,
    simulateTouch: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        },
        1440: {
            slidesPerView: 4
        }
    }
})

handler();
async function preload(searchMovie, page) {
    const movieSet = await getMovieSet(searchMovie, page);
    console.log(movieSet);
    movieSet.forEach(async (movie) => {
        let rating = await getMovieIMDB(movie.imdbID);
        console.log(rating);
        let moviePage = makeFilmPage(movie.Poster, movie.Title, rating);
        renderMovieSet(moviePage);
        mySwiper.update();
    });
}
preload('death', 2);
window.addEventListener('resize', function (event) {
    document.location.reload(true);
})
translate('тетрадь смерти');