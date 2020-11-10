# Online version
https://tmdb-task-feedel.herokuapp.com/         (Basic Web App)

https://tmdb-task-feedel.herokuapp.com/api      (API Base URL) 

# Local version
## Getting Started
### 1- Project setup
```
npm install
```

### 2- Create .env file or enviroment variable named TMDB_API_KEY
In order to query the server is needed to have a [granted api key](https://developers.themoviedb.org/3/getting-started/authentication) for The Movie Database.

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
Inside the object options it's possible to specify the query params of the request,in each function is performed a validation on the options object, according with the documentation of TMDB reffering the constraint of the params of each route.

Example - [Get Movie Details](https://developers.themoviedb.org/3/movies/get-movie-details):

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
> QuerySchemas.js
### API endpoints and Vue SPA
Enpoints:

            /discover/movie
            /search/movie
            /search/tv
            /search/person
            /genre/movie
            /movie/:id
For the porpouse of the task it has been implemented an API that is used by a simple Single Page Application to show some possible usage of th TMDB API

