const bcrypt = require('bcrypt')
const User = require('../models/User')
require('dotenv').config();
const jwt = require('jsonwebtoken')

exports.signup = async (req,res) =>{
    try{
        //get all the data
        const {name,email,password,role} = req.body;
        //check if user exists
        const existingUser = await User.findOne({email})

        if (existingUser){
            return res.status(400).json({
                success:false,
                message:`user already exists`
            });
        }
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash (password,10);
        }
        catch{
            return res.status(500).json({
                success:false,
                message:`password hashing failed`
            })

        }
        const user = await User.create({
            name,email,password:hashedPassword,role
        })
        return res.status(200).json({
            success:true,
            message:`user created successfully`,
        });
    }
    catch{
        console.error(error);
        return res.status(400).json({
            success:false,
            message:`user cannot be registered, plz try later`
        });
    }
}

exports.login = async (req,res) =>{
    try{
        //fetch email and password from db
        const {email,password} = req.body;
        if (!email || !password){
            return res.status(400).json({
                success:false,
                message:`please fill all the details carefully`
            })
        }
        //checking fro registered user
        const user = await User.findOne({email});
        //if user is not registered
        if (!user){
            return res.status(401).json({
                success:false,
                message:`user is not registered`
            })
        }
        const payload = {
            email:user.email,
            id:user._id,
            role:user.role,
        }
        //verify user password and create jwt token
        if (await bcrypt.compare(password,user.password)){
            let token  = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"2h"});
            user =  user.toObject();
            user.token = token
            user.password = undefined
            const options = {
                expires:new Date(Date.now() + 3*24*60*60*1000),
                httpOnly:true,
            }
            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user,
                message:`user logged in successfully`
            })
        }
        else{
            return res.status(403).json({
                success:false,
                message:`incorrect password`,
            })

        }

    }
    catch{
        console.error(error);
        return res.status(500).json({
            success:false,
            message:`Login failure`
        });
    }
}