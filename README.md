# LIRI
"Language Interpretation and Recognition Interface" is a command line Node app

*What does this app do?*
User can input request information for concerts, songs and movies through command-line terminal 

```
node liri.js *action* *value*
```


1) Search Bands In Town with `concert-this`

```
node liri.js concert-this *value*
```

2) Search Spotify with `spotify-this-song`

```
node liri.js spotify-this-song *value*
```

3) Search OMDB with `movie-this`

```
node liri.js movie-this *value*
```

3) Searching contents of text file with `do-what-it-says`

```
node liri.js do-what-it-says *<filename.extension>*
```


*How is this app useful?*
This familiarized the npm package manager through using multiple package modules. Axios npm was used to capture requests and responses to APIs. The dotenv package was used to set a process.env object. Reading text files used the fs package. I learned how to hide API keys by utilizing "dotenv" nmp package and ".gitignore" file that designates which files to not upload to GitHub. I can use this information to go back to the apps created in the first half of the program and hide their API keys.

*Future directions*
