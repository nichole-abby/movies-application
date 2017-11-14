/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');

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