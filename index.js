const express = require("express");
const TmdbClient = require("./TmdbClient");

require("dotenv").config()

const app = express();
const PORT = process.env.PORT|4000;

const tmdb= TmdbClient.init(process.env.TMDB_API_KEY);

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

app.get("/api/discover/movie",(req,res)=>{
    tmdb.discover.movie(req.query,(err,response)=>{
        if(err){
            res.status(400).send(err);
        }
        else{
            res.send(response);
        }
    });
});
app.get("/api/search/movie",(req,res)=>{
    tmdb.search.movie(req.query,(err,response)=>{
        if(err){
            res.status(400).send(err);
        }
        else{
            res.send(response);
        }
    })
})
app.get("/api/search/tv",(req,res)=>{
    tmdb.search.tv(req.query,(err,response)=>{
        if(err){
            res.status(400).send(err);
        }
        else{
            res.send(response);
        }
    })
})
app.get("/api/search/person",(req,res)=>{
    tmdb.search.person(req.query,(err,response)=>{
        if(err){
            res.status(400).send(err);
        }
        else{
            res.send(response);
        }
    })
})
app.get("/api/genre/movie",(req,res)=>{
    tmdb.genre.movie((err,response)=>{
        if(err){
            res.status(400).send(err);
        } else res.send(response.genres)
    });
});
app.get("/api/movie/:id",(req,res,next)=>{
    if(parseInt(req.params.id)){
        tmdb.movie.details(req.params.id,(err,response)=>{
            if(err){
                 res.status(400).send(err);
            }
            else{
                res.send(response);
            }
        })
    } else next();
})

//Cartella statica client

app.use(express.static('./client/dist'));

app.use("*",(req,res)=>{
    res.redirect("/");
})

app.listen(PORT,()=>{
    console.log(`Server is listening on http://localhost:${PORT}`);
})
