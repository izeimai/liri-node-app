# LIRI
"Language Interpretation and Recognition Interface" is a command line Node app

*What does this app do?*
User can access information for concerts, songs and movies through command-line terminal inputs. There are four different options:


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


3) Searching contents of text file with `do-what-it-says`

```
node liri.js do-what-it-says <filename.extension>
```
Text file should include the command and search value separated by comma (e.g. )

*How is this app useful?*
This familiarized the npm package manager through using multiple package modules. Axios npm was used to capture requests and responses to APIs. The dotenv package was used to set a process.env object. Reading text files used the fs package. I learned how to hide API keys by utilizing "dotenv" nmp package and ".gitignore" file that designates which files to not upload to GitHub. I can use this information to go back to the apps created in the first half of the program and hide their API keys.

*Future directions*
