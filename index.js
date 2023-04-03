const express = require("express");
const bodyParser = require('body-parser')
const db = require("./config/mongoose");
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use('/', require('./routes'));


app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
