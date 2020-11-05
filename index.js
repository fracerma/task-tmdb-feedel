const express = require("express");

const app = express();


//Cartella statica client


app.listen(process.env.PORT|4000,()=>{
    console.log(`Server is listening on http://localhost:${process.env.PORT|4000}`);
})