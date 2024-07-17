//require mongoose
const mongoose=require('mongoose');
//create schema
const schema=mongoose.Schema;

//create user schema
const userSchema = new schema({
  name: { type: String, required: true },
  email: { type: String,unique:true, required: true },
  phone: Number,
  
},{timestamps:true,
    collection:'users',
});
//module.exports(Users = mongoose.model("user", userSchema));
const User = mongoose.model("User", userSchema);
module.exports = User;
 