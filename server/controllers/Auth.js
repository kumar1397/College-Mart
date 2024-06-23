const bcrypt = require('bcrypt')
const User = require('../models/User')
require('dotenv').config();
const jwt = require('jsonwebtoken')

exports.signup = async (req,res) =>{
    try{
        //get all the data
        const {name,phone,email,password,cpassword} = req.body;
        //check if user exists
        const existingUser = await User.findOne({email})

        if (existingUser){
            console.log(`user exists already`)
            return res.status(422).json({
                success:false,
                message:`user already exists`
            });
        }
        
        if (password != cpassword){
            return res.status(421).json({
                success:false,
                message:`confirm password is different`
            })
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
            name,phone,email,password:hashedPassword
        })
        return res.status(200).json({
            success:true,
            message:`user created successfully`,
        });
    }
    catch{
        console.log(`user not register`);
        return res.status(400).json({
            success:false,
            message:`user cannot be registered, plz try later`
        });
    }
}

exports.login = async (req,res) =>{
    try{
        console.log(req.body);
        res.json({message:"done"});

    }
    catch(error){
        console.log(error);
    }
    
}