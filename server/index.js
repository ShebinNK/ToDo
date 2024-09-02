const express=require ("express");
const app=express();
const cors=require("cors");
const pool=require("./db")
//middleware
app.use(cors());
app.use(express.json());

//ROUTES

//Creates a todo
app.post("/todos",async(req,res)=>{
    try{
        console.log(req.body);
    }catch(err){
        console.error(err.message);
    }
});

//get all to do

//get a todo

//update a todo

//delete a todo


app.listen(5000,()=>{
    console.log("server has started on port 5000");
    
});