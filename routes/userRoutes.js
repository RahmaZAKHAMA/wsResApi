//require express
const express=require('express');

//require router
const router=express.Router();
//require controllers

const {
  test,
  addUser,
  getById,
  getUsers,
  DeleteUser,
  UpdateUser,
  FindByname,
} = require("../controlers/userController");
//create test router

router.get('/test',test);

//create test router

router.post("/add_user", addUser);
//export router
router.get("/get_user/:_id", getById);
//////router.get("/get_user", getById);////if

router.get("/get_Users", getUsers);

router.get("/delete_User/:_id", DeleteUser);

router.put("/update_User/:_id", UpdateUser);

router.get("/FindBy_name", FindByname);
module.exports=router;