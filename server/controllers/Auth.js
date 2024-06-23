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

exports.signin = async(req,res) =>{
    try {
        // Get email and password from request body
        const { email, password } = req.body
    
        // Check if email or password is missing
        if (!email || !password) {
          // Return 400 Bad Request status code with error message
          return res.status(400).json({
            success: false,
            message: `Please Fill up All the Required Fields`,
          })
        }
    
        // Find user with provided email
        const user = await User.findOne({ email })
    
        // If user not found with provided email
        if (!user) {
          // Return 401 Unauthorized status code with error message
          return res.status(401).json({
            success: false,
            message: `User is not Registered with Us Please SignUp to Continue`,
          })
        }
    
        // Generate JWT token and Compare Password
        if (await bcrypt.compare(password, user.password)) {
          const token = jwt.sign(
            { email: user.email, id: user._id },
            process.env.JWT_SECRET,
            {
              expiresIn: "24h",
            }
          )
    
          // Save token to user document in database
          user.token = token
          user.password = undefined
          // Set cookie for token and return success response
          const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true,
          }
          res.cookie("token", token, options).status(200).json({
            success: true,
            token,
            user,
            message: `User Login Success`,
          })
        } else {
          return res.status(401).json({
            success: false,
            message: `Password is incorrect`,
          })
        }
      } catch (error) {
        console.error(error)
        // Return 500 Internal Server Error status code with error message
        return res.status(500).json({
          success: false,
          message: `Login Failure Please Try Again`,
        })
      }
}


