// Load required packages and files
require("dotenv").config();
var keys = require("./keys.js");

//Keys can be retrieved with this:
//var spotify = new Spotify(keys.spotify);

// Retrieve the actions and value from the command-line input
var action = process.argv[2];
var value = process.argv[3];

// switch-case statement for the entered command to determine which function runs
var entertainment = function(action) {
    switch(action){
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
}