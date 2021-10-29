const express=require('express');
const PORT=process.env.PORT||3000

const cors=require("cors");
const mongoose=require('mongoose');


require('dotenv').config();

const app=express();

//connect express
app.use(cors());
//identify incoming request objcts as json files
app.use(express.json());
//importing hidden mongodburl
const url=process.env.ATLAS_URI;
mongoose.connect(url,{useNewUrlParser:true})

//connection validation
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("Mongodb Connection established successfully!!");
})


//import modules
const userModule=require('./routes/users');
const exerciseModule=require("./routes/exercises")

app.use('/exercise',exerciseModule);
app.use('/user',userModule);






app.listen(PORT,()=>console.log(`Server started in the port ${PORT}`));


