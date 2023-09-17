require("dotenv/config")
const express=require("express");
const app=express();
const db=require("./config/dbConnection")

const port=process.env.PORT;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static(__dirname + "/assets"));

app.use("/",require("./routes"))

app.listen(port,(err)=>{
    if(err){
        console.log("server is not running");
    }else{
        console.log(`server is running on ${port}`);
        
    }
})