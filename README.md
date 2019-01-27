# LIRI
"Language Interpretation and Recognition Interface" is a command line Node app

*What does this app do?*
User can access information for concerts, songs and movies through command-line terminal inputs to access APIs (Bands in Town, Spotify and OMDB). 
There are four different search options:


1) Search Bands In Town with `concert-this`

```
node liri.js concert-this <artist/band name>
```
Outputs the name of the venue, venue location and date of the event.


2) Search Spotify with `spotify-this-song`

```
node liri.js spotify-this-song <song name>
```
Outputs the artist, song name, preview link of the song, and the album that the song is from.


3) Search OMDb with `movie-this`

```
node liri.js movie-this <movie name>
```
Outputs the movide information from the OMDb API, including title, release year, IMDB Rating, Rotten Tomatoes Rating, Country of production, language, plot summary, and actors in the movie.


4) Searching contents of text file with `do-what-it-says`

```
node liri.js do-what-it-says random.txt
```
This command will read the contents of a text file called random.txt. Text file should include the command and search value separated by comma (e.g. spotify-this-song,"Running Up That Hill")

*How is this app useful?*
This familiarized me with npm (node package manager) through using multiple packages. "Axios" npm was used to capture requests to and responses from APIs. Reading and writing text files used the "fs" package. I learned how to hide API keys by utilizing "dotenv" nmp package and ".gitignore" file that designates which files to not upload to GitHub. I can use this information to go back to the apps created in the first half of the program and hide their API keys.

*Future directions*
Rather than use a single input, it would be mroe user friendly to use 'inquirer' package that will prompt the user for the search terms. I can imagine it would be hard for a user to remember the correct input. For example, the "movie-this" and "concert-this" is similar enough for input format, while searching songs is "spotify-this-song", not "spotify-this" or "song-this" which would be more intuitive. Programming meaningful error messages in node apps are critical because it is not immediately clear why something failed to return anything.