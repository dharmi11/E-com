const mongoose  = require ('mongoose');
const user = require('../models/register')

const register= async (req,res)=>{
    try {
        
  
    const {name , email , password}=req.body

    if(!name || !email ||!password){
        return res.status(400).json({
            message : "Please Fill all details"
        })
    }
    const existing = await user.findOne({email});
    if(existing){
        return res.status(400).json({
            message:"USer already existing"
        })
    }
    const newuser = new user({name , email , password});
    await newuser.save();

    return res.status(200).json({
        message:"user register succesfully" ,
        newuser
    })

      } catch (error) {
        console.log(error);
    }


    
}

// const getusers = async(req,res)=>{
//     try {
//         const responce = await  user.find() ;
//         return res.status(201).json({
//             message:"get all users",
//             responce
//         })


//     } catch (error) {
//         console.log(error);
//     }
// }


const login = async (req,res)=>{

    try {
        if(req.body.password && req.body.email){
    
    const {email , password} = req.body;

    if (!email|| !password){
        return res.status(400).json({
            message:"PLease fill all Details"
        })
    }

    const User = await user.findOne({email})
        if(!User){
            return res.status(400).json({
                message:"incorrect email or password"
            })
    }

   return res.status(200).json({
  success: true,
  message: "Welcome Back",
  user: User
});
}

} catch (error) {
        console.log(error);
}
}

module.exports={register , login}