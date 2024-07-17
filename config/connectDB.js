//require mongoose
const mongoose = require('mongoose');

//connect to MongoDB
const connect=async()=>{
    try {
      await mongoose.connect(process.env.DB_URI);  
    console.log('connected');
    } catch (error) {
       console.error(error); 
    }
}
module.exports = connect