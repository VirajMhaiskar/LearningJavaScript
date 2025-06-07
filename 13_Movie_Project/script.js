'use strict'

/***********************************************
 * LIST OF EXISTING MOVIES
 ***********************************************/
const descContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.';

const movies = [
    {
        id: 1,
        name: 'intersteller',
        rating: 4.6,
        description: descContent,
        genre: ['action', 'scifi', 'drama'],
        image: './images/intersteller.jpg',
        releaseYear: 2014
    },
    {
        id: 2,
        name: 'bad boys',
        rating: 2.7,
        description: descContent,
        genre: ['action', 'comedy'],
        image: './images/bad-boys.jpg',
        releaseYear: 2007
    },
    {
        id: 3,
        name: 'inception',
        rating: 4.2,
        description: descContent,
        genre: ['action', 'scifi', 'fantacy'],
        image: '',
        releaseYear: 2010
    },
    {
        id: 4,
        name: 'Bahubali',
        rating: 3.8,
        description: descContent,
        genre: ['action', 'drama'],
        image: '',
        releaseYear: 2015
    },
    {
        id: 5,
        name: 'Fast & Furious 2',
        rating: 3.4,
        description: descContent,
        genre: ['action', 'drama'],
        image: '',
        releaseYear: 2004
    }
];

const movieListSection = document.querySelector("#movie-list-container");

function renderAllMovies(movieList) {
    movieListSection.innerHTML = "";
    movieList.forEach(movie => {
        const movieCard = `
            <div class="movie-card">
                <div class="movie-banner">
                <img src="${displayMovieBanner(movie.image)}" width="240" height="140">
                </div>
                <div class="movie-title">
                <h2>${formatMovieName(movie.name)}</h2>
                </div>
                <div class="movie-description">
                <p>${formatMovieDescription(movie.description)}</p>
                </div>
                <div class="movie-genre">
                <b>Genre:</b> <text>${formatGenrename(movie.genre)}</text>
                </div>
                <div class="movie-release-year">
                <b>Release Year:</b> <text>${movie.releaseYear}</text>
                </div>
                <div class="movie-rating">
                <b>Rating:</b><span class="star-rating">${displayStarRating(movie.rating)}</span>
                </div>
                <div class="movie-actions">
                <button>Details</button>
                <button>Delete</button>
                </div>
            </div>
        `;

        movieListSection.insertAdjacentHTML("beforeend", movieCard);
    });
}
renderAllMovies(movies);


function formatMovieName(name) {
    const movieNameWords = name.split(" ");
    const formattedWordsArray = movieNameWords.map((word) => {
        const fChar = word.at(0).toUpperCase();
        const restChar = word.substring(1).toLowerCase();
        return fChar + restChar;
    });
    return formattedWordsArray.join(" ");
}


function formatMovieDescription(desc) {
    return desc.substring(0, 100).concat("...");
}

function formatGenrename(genre) {
    return genre.flatMap((g) => {
        return " " + g.at(0).toUpperCase() + g.slice(1).toLowerCase();
    });
};

function displayStarRating(rating) {
    if(typeof rating !== "number" || rating < 0 || rating > 5) {
        console.log("Invalid Rating");
        return " ";
    }
    
    let starString = "";
    for(let i = 0; i < 5; i++) {
        if(i < rating) {
            starString += "\u2605";
        } else {
            starString += "\u2606"
        }
    }
    return starString;
}

function displayMovieBanner(image) {
    return image || "./images/not-found-image.jpg";
}

let sortAcsending = true;
document.querySelector("#sort-movie-by-rating").addEventListener("click", sortMoviesByRating);
document.querySelector("#sort-movie-by-release-year").addEventListener("click", sortMoviesByReleaseYear);

function sortMoviesByRating() {
    if(sortAcsending) {
        movies.sort((curr, next) => curr.rating - next.rating);
    } else {
        movies.sort((curr, next) => next.rating - curr.rating);
    }
    sortAcsending = !sortAcsending;
    renderAllMovies(movies);
}

function sortMoviesByReleaseYear() {
    if(sortAcsending) {
        movies.sort((curr, next) => curr.releaseYear - next.releaseYear);
    } else {
        movies.sort((curr, next) => next.releaseYear - curr.releaseYear);
    }
    sortAcsending = !sortAcsending;
    renderAllMovies(movies);
}


document.querySelector("#search-movie-btn").addEventListener("click", searchMovies);

function searchMovies() {
    const searchText = document.querySelector("#search-movie-input").value;
    const searchedMovies = movies.filter((movie) => movie.name.toLowerCase().includes(searchText.toLowerCase()));
    renderAllMovies(searchedMovies);
}

function filterByGenre(selectedRadioButton) {
    const selectedGenre = selectedRadioButton.value;
    let filteredMovies = [];
    if(selectedGenre === "all") {
        filteredMovies = movies;
    } else {
        filteredMovies = movies.filter(movie => movie.genre.includes(selectedGenre));
    }
    renderAllMovies(filteredMovies);
}