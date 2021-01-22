const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./server/router');

const app = express();

app.use(cors());

mongoose.connect('mongodb://127.0.0.1/profile', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}).then(()=>{
    console.log("Successfully connected to MongoDB");
}).catch(e=>{
    console.log(e);
    console.log("Error occured connecting to MongoDB");
});

app.use('/', router);

app.listen(2002, ()=>{
    console.log("Server listening at PORT 2002");
});