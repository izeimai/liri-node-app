// Load required packages and files
require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");

//Keys can be retrieved with this:
//var spotify = new Spotify(keys.spotify);

// Retrieve the actions and value from the command-line input
var action = process.argv[2];
var value = process.argv[3];

// switch-case statement for the entered command to determine which function runs
switch (action) {
    case "concert-this":
        concertThis();
        break;

    case "spotify-this-song":
        spotifyThisSong();
        break;

    case "movie-this":
        movieThis();
        break;

    case "do-what-it-says":
        doWhatItSays();
        break;
}

// Searches the Bands in Town Artist Events API to return concert info
function concertThis() {
    var queryURL = "https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp"
    console.log(queryURL);

    // Name of the venue
    // Venue location
    // Date of the Event (use moment to format this as "MM/DD/YYYY")

}

//
function spotifyThisSong() {
    console.log("SpotifyThis");

    // Default to "The Sign" by Ace of Base if no song is provided
    if (value === undefined) {
        console.log("No Song provided");
    }

    // Artist(s)
    // The song's name
    // A preview link of the song from Spotify
    // The album that the song is from


}

function movieThis() {
    console.log("MovieThis");

    // Default to "Mr. Nobody" if no movie is provided
    if (value === undefined) {
        console.log("No movie provided");
        value = "Mr.Nobody"
    } 

    // Title of the movie.
    // Year the movie came out.
    // IMDB Rating of the movie.
    // Rotten Tomatoes Rating of the movie.
    // Country where the movie was produced.
    // Language of the movie.
    // Plot of the movie.
    // Actors in the movie.
 
}

function doWhatItSays() {
    console.log("dowhatitsays");
}
