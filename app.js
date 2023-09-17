require("dotenv/config")
const express=require("express");
const app=express();
const db=require("./config/dbConnection")

const port=process.env.PORT;

app.listen(port,(err)=>{
    if(err){
        console.log("server is not running");
    }else{
        console.log(`server is running on ${port}`);
        
    }
})