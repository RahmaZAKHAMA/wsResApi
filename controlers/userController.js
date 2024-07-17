//require user model

const User=require('../models/users');
exports.test=async (req,res)=>{
    try {
        res.status(200).send("test Ok")
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.addUser=async (req,res)=>{
try {
    const {name,email,phone}=req.body;
const newUser=new User({name,email,phone});
await newUser.save();
res.status(200).send({msg:'user added',newUser});
} catch (error) {
   res.status(400).send(error); 
}
}

exports.getUsers=async(req,res)=>{
    try{
        const foundUsers=await User.find();
       if (foundUsers.length>0){
        res.status(200).send({msg:'users',foundUsers});
       }
       else{res.status(200).send('no users found');
      }
    } catch (error) {
   res.status(400).send(error); 
}
}

exports.getById=async(req,res)=>{
    try {
      const { _id } = req.params; //const {_id} = req.params;//if id entered manually in url
      const foundUser = await User.findById(_id);
      res.status(200).send({ msg: "user found", foundUser });
    } catch (error) {
      res.status(400).send(error);
    }
}

exports.DeleteUser = async (req, res) => {
  try {
    const { _id } = req.params; //const {_id} = req.params;//if id entered manually in url
    const deletedUser = await User.findByIdAndDelete(_id);
    res.status(200).send({ msg: "user deleted successfully", deletedUser });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.UpdateUser = async (req, res) => {
  try {
    const { _id } = req.params; //const {_id} = req.params;//if id entered manually in url
    const {name,email,phone} = req.body;
    const founduser = await User.findByIdAndUpdate(
      { _id },
      { name, email, phone }
    );
    const updateduser = await User.findById(_id);
    res.status(200).send({ msg: "user updated successfully", updateduser });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.FindByname = async (req, res) => {
  try {
  
    const name= req.query.name;
    const foundusers = await User.find({ name:{$regex:name}});
  
    res.status(200).send({ msg: "users found by name", foundusers });
   
  } catch (error) {
    res.status(400).send(error);
  }
};