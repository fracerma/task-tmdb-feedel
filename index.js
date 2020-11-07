const express = require("express");
const TmdbClient = require("./TmdbClient");

require("dotenv").config()

const app = express();

const tmdb= TmdbClient.init(process.env.TMDB_API_KEY);

app.get("/api/discover/movie",(req,res)=>{
    tmdb.discover.movie(req.query,(err,response)=>{
        if(err){
            if(err.status_code)res.status(err.status_code).send(err);
            else res.status(400).send(err);
        }
        else{
            res.send(response);
        }
    });
});
app.get("/api/search/movie",(req,res)=>{
    tmdb.search.movie(req.query,(err,response)=>{
        if(err){
            if(err.status_code)res.status(err.status_code).send(err);
            else res.status(400).send(err);
        }
        else{
            res.send(response);
        }
    })
})
app.get("/api/search/tv",(req,res)=>{
    tmdb.search.tv(req.query,(err,response)=>{
        if(err){
            if(err.status_code)res.status(err.status_code).send(err);
            else res.status(400).send(err);
        }
        else{
            res.send(response);
        }
    })
})
app.get("/api/search/person",(req,res)=>{
    tmdb.search.person(req.query,(err,response)=>{
        if(err){
            if(err.status_code)res.status(err.status_code).send(err);
            else res.status(400).send(err);
        }
        else{
            res.send(response);
        }
    })
})

app.get("/api/genre/movie",(req,res)=>{
    tmdb.genre.movie((err,response)=>{
        if(err){
            if(err.status_code)res.status(err.status_code).send(err);
            else res.status(400).send(err);
        }
        else{
            res.send(response.genres);
        }
    });
});

app.get("/api/movie/:id",(req,res,next)=>{
    if(parseInt(req.params.id)){
        tmdb.movie.details(req.params.id,(err,response)=>{
            if(err){
                if(err.status_code)res.status(err.status_code).send(err);
                else res.status(400).send(err);
            }
            else{
                res.send(response);
            }
        })
    } else next();
})

//Cartella statica client


app.listen(process.env.PORT|4000,()=>{
    console.log(`Server is listening on http://localhost:${process.env.PORT|4000}`);
})
