const express = require('express');
const app = express();
app.use(express.json());
//require dotenv
require('dotenv').config({path:"./config/.env"});
//get port
PORT=process.env.PORT||5001;
//create server
app.listen(PORT,(err) => {
    err?console.log(err):console.log(`Server listening on http://127.0.0.1:${PORT}`)
});

const connect=require('./config/connectDB.js');
connect();

//require routes
app.use('/api/user', require('./routes/userRoutes'));