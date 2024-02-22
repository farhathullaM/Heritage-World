// auth.controller.js
import express from "express";
import User from '../models/userModel.js';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/register',async(req,res)=>{
  const mail = await User.find({email:req.body.email} );
  if(mail.length==0){
  try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = { email: req.body.email, password: hashedPassword , phone:req.body.phone , name:req.body.name };
        console.log("Creating user...");
        const newUser = await User.create(user);
        return res.status(200).json(newUser);
      } catch (error) {
        console.error("Error creating user:", error.message);
        return res.status(500).send("Internal Server Error");
      }
    }else{
      
      return res.status(500).send("The Email Id Is Already Used ");
    }
  
  })
router.post('/login',async(req,res)=>{
  const { username, password } = req.body;

  try {
    // Find user by username
    const user = await User.findOne({ username });

    // Check if user exists
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Password is correct, user authenticated successfully
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
})
export default router;