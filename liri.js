// Load required packages and files
require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
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

// Searches the Bands in Town Artist Events API to return concert info on each event
function concertThis() {

    if (value === undefined) {
        // if there is no value entered to search for
        console.log("No Artist or Band name provided");
    } else {
        // otherwise process to account for multiple words
        value = process.argv.splice(3, process.argv.length).join("+");
    }

    var queryURL = "https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp"
    console.log(queryURL);

    axios.get(queryURL)
        .then(function (response) {
            // for loop to console.log out results from multiple events
            console.log("Got the response back");

            for (var i = 0; i < response.data.length; i++) {
                // Name of the venue
                console.log(response.data[i].venue.name);
                // Venue location: shows "city,state" for US locations, "city, country" for other locations
                if (response.data[i].venue.region === "") {
                    console.log(response.data[i].venue.city + ", " + response.data[i].venue.country);
                } else {
                    console.log(response.data[i].venue.city + ", " + response.data[i].venue.region);
                }
                // Date of the Event
                var datetime = response.data[i].datetime.split("T")[0]; // takes first index (date only) after splitting by letter 'T'
                console.log(moment(datetime, 'YYYY-MM-DD').format('MM/DD/YYYY')); // use moment to format date to MM/DD/YYYY
                console.log("\n"); // adds a new line after each event
            }
        })
        .catch(function (error) {
            // error message handler used in class exercise
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}


// Searches Spotify with song name as input
function spotifyThisSong() {
    console.log("SpotifyThis");

    // Default to "The Sign" by Ace of Base if no song is provided
    if (value === undefined) {
        console.log("No Song provided");
        value = "The Sign";
    }

    // Artist(s)
    // The song's name
    // A preview link of the song from Spotify
    // The album that the song is from


}

function movieThis() {

    if (value === undefined) {
        // Default to "Mr. Nobody" if no movie is provided
        console.log("No movie title provided! Displaying default movie information");
        value = "Mr.Nobody";
    } else {
        // after confirming that there is a value, deals with multiple letter titles
        value = process.argv.splice(3, process.argv.length).join("+");
    }

    var queryURL = "http://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=trilogy"

    axios.get(queryURL)
        .then(function (response) {
            console.log("Title: " + response.data.Title);
            console.log("Year the movie came out: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten tomatoes Rating: " + response.data.Ratings[1].Value);
            console.log("Country: " + response.data.Country);
            console.log("Language of movie: " + response.data.Language);
            console.log("Plot of the movie: " + response.data.Plot);
            console.log("Actors in the movie: " + response.data.Actors);
        })
        .catch(function (error) {
            // error message handler used in class exercise
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        });

}

function doWhatItSays() {
    console.log("dowhatitsays");
}
