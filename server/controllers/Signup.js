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