const found = document.getElementById("found");
const nf = document.getElementById("nf");
const api = "https://www.omdbapi.com/?apikey=f0dcd8d1&t=";
let title = document.getElementById("title");
let desc = document.getElementById("desc");
let date = document.getElementById("date");
let genre = document.getElementById("genre");
let actors = document.getElementById("actors");
let director = document.getElementById("director");
let collection = document.getElementById("collection");
let awards = document.getElementById("awards");
let rating = document.getElementById("rating");
let poster = document.getElementById("poster");

function searchMovie() {

    let movieName = document.getElementById("movieName");
    let query = api + movieName.value;

    fetch(query).then((data) => {
        return data.json();
    }).then((data) => {

        if(data.Error) {
            nf.classList.remove("d-none");
            found.classList.add("d-none");
            document.getElementById("name").innerText = movieName.value;
        }
        else {
            nf.classList.add("d-none");
            found.classList.remove("d-none");

            title.innerText = data.Title;
            desc.innerText = data.Plot;
            date.innerText = data.Released;
            genre.innerText = data.Genre;
            actors.innerText = data.Actors;
            director.innerText = data.Director;
            collection.innerText = data.BoxOffice;
            awards.innerText = data.Awards;
            rating.innerText = data.imdbRating;
            poster.src = data.Poster;
        }
    });
} 