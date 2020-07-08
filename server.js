const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const router = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const port = 3000;
const hostname = 'localhost';
const url = 'mongodb://localhost:27017/test';

//Connection To DataBase
const connection = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true  } )
connection.then(() => {
    // Starting the Server only if DB connected
    app.listen(port, ()=> {
        console.log('DB Connected!')
        console.log(`Server started on http://${hostname}:${port}`);
    })
})
connection.catch((err) => {
    console.log('DB Connection failed. ' + err)
})


app.use('/', router) 

