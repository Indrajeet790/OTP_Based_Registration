const dotEnv = require("dotenv/config");
const express = require("express");
const app = express();
const db = require("./config/dbConnection")
const bodyParser = require("body-parser");

const port = process.env.PORT ;


app.use(bodyParser.json());
app.use("/", require("./routes"));

app.listen(port, (err) => {
    if(err){
        console.log({Error: "Failed To Load Server ", err});
    }else{
        console.log(`Server is running on port ${port} `);
    }
})