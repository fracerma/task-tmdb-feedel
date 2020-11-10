# Online version
https://tmdb-task-feedel.herokuapp.com/

# Local version
## Getting Started
### 1- Project setup
```
npm install
```

### 2- Create .env file or enviroment variable named TMDB_API_KEY
In order to query the server is needed to have a granted api key for The Movie Database (https://developers.themoviedb.org/3/getting-started/authentication).
It can be placed in a .env file in the root folder:
```
TMDB_API_KEY=<<api_key>>
```

### 3- Start server
```
npm run start
```

## How it works
### TmdbClient.js
That's the core part, after importing this module it's possible to create an instance of the tmdb client:
```
const TmdbClient = require("./TmdbClient");
const tmdb = TmdbClient.init(<<TMDB api key>>);
```
On the tmdb object is now possible to call the main methods of TMDB API, examples:
```
tmdb.discover.movie(options, callback);
tmdb.search.movie(options, callback);
```
Inside each function is performed a validation on the options object, according with the documentation of TMDB reffering the constraint of the params of each route.

Example (https://developers.themoviedb.org/3/movies/get-movie-details):
```
movie_details:{
            type:"object",
            properties:{
                append_to_response:{
                    type:"string",
                    pattern: /([\w]+)/,
                    optional:true
                },
                language:{
                    type: 'string',
                    pattern: /[a-z]{2}-[A-Z]{2}/,
                    optional: true  
                },
            }
        }
```
