/**
 * es6 modules and imports
 */
// import sayHello from './hello';
// sayHello('World');

/**
 * require style imports
 */
const {getMovies} = require('./api.js');

getMovies().then((movies) => {
    $("h1").text("Welcome to MovieLister");
    let htmlString = "";
    // console.log(movies);
    movies.forEach(function(movie) {
        htmlString += "<h3>" + movie.title + "</h3>"
            + "<p>Rating: " + movie.rating + "</p>";
        // console.log(`id#${id} - ${title} - rating: ${rating}`);
        // $("p").text("Here are the movies");
    });

    $(".moviesHere").html(htmlString);

  // console.log(movies);

}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.')
  console.log(error);
});

$("#addMovie").click(function(event) {
    event.preventDefault();
    addMovie();


function addMovie() {
    let title = $("#movie").val();
    let rating = $("#rating").val();

    const movieRating = {title: title, rating: rating};
    const url = '/api/movies';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieRating),
    };
    fetch(url, options)
        .then(function(){

            let title = $("#movie").val("");
            let rating = $("#rating").val("");
            getMovies().then((movies) => {
                $("h1").text("Welcome to MovieLister");
                let htmlString = "";
                // console.log(movies);
                movies.forEach(function(movie) {
                    htmlString += "<h3>" + movie.title + "</h3>"
                        + "<p>Rating: " + movie.rating + "</p>";
                    // console.log(`id#${id} - ${title} - rating: ${rating}`);
                    // $("p").text("Here are the movies");
                });

                $(".moviesHere").html(htmlString);

                // console.log(movies);

            }).catch((error) => {
                alert('Oh no! Something went wrong.\nCheck the console for details.')
                console.log(error);
            });

        })
        .catch(/* handle errors */);
}

    function editMovie() {
        document.getElementById("editMovie").contentEditable = true;
        document.getElementById("demo").innerHTML = "The movies above are now editable. Try to change the text.";
    }

    editMovie();

});