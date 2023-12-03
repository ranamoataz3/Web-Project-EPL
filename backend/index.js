const express=require('express');
var app=express();
const mongoose=require('mongoose');
const mongo=require('mongodb');
const bodyParser=require('body-parser');
const cors=require('cors');
const lodash=require('lodash');
const fs=require('fs');

// database connection
const PORT=3001;
const connectionString='mongodb+srv://abouelhadidola:wldQXhckBfqpdoK6@consultation2023.fagetcv.mongodb.net/';

app.use(bodyParser.json());
app.use(cors());

//Connect to the database
const client=new mongo.MongoClient(connectionString,{useNewUrlParser:true,useUnifiedTopology:true});
const connectToDatabase=async()=>{
    try{
        await client.connect();
        console.log('Connected to the database successfully');
        //Start the server
        const server=app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));
        server.on('error', () => {
            console.log('Server error', error);
});
    }
    catch(error){
        console.log('Error in connecting to the database');
    }
};

connectToDatabase();



