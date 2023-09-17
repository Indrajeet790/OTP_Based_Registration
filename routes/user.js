const express=require("express")
const router=express.Router();
const userContoller=require("../controllers/userContoller")

router.get("/register",userContoller.renderForm);
module.exports=router