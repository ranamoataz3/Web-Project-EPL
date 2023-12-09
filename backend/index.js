const express=require('express');
var app=express();
const mongoose=require('mongoose');
const mongo=require('mongodb');
const bodyParser=require('body-parser');
const cors=require('cors');
const lodash=require('lodash');
const fs=require('fs');

const userRouter=require('./Routes/userRoute');
// const matchRouter=require('./Routes/matchRoute');
// const officalRouter=require('./Routes/officalRoute');
// const stadiumRouter=require('./Routes/stadiumRoute');


// database connection
const PORT=3001;
const connectionString='mongodb+srv://abouelhadidola:wldQXhckBfqpdoK6@consultation2023.fagetcv.mongodb.net/?retryWrites=true&w=majority';

app.use(bodyParser.json({extended:false}));
app.use(cors());
const session = require("express-session");
app.use(session({
    secret: "secrethash",
    resave: false,
    saveUninitialized: true.valueOf
}));



//Connect to the database
mongoose.set('strictQuery', true);
const connectToDatabase=async()=>{
    try{
        await mongoose.connect(connectionString,{useNewUrlParser: true, useUnifiedTopology: true});
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

//////////////////////////Routes//////////////////////////
app.use('/user',userRouter);
// app.use('/match',matchRouter);
// app.use('/offical',officalRouter);
// app.use('/stadium',stadiumRouter);


module.exports=app;



