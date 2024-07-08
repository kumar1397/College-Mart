// const jwt = require('jsonwebtoken');
// const nodemailer = require('nodemailer');
// const User = require('../models/User'); // Ensure this path is correct
// require('dotenv').config();

// exports.forget_password = (req, res) => {
//   const { email } = req.body;
//   User.findOne({ email })
//     .then(user => {
//       if (!user) {
//         return res.status(404).send({ status: "User not existed" });
//       }

//       const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_RESET_PASSWORD, { expiresIn: '1d' });
      
//       const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: process.env.EMAIL_USER,
//           pass: process.env.EMAIL_PASS
//         }
//       });

//       const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: user.email,
//         subject: 'Reset Password Link',
//         text: `http://localhost:5173/reset_password/${user._id}/${token}`
//       };

//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           console.log(error);
//           return res.status(500).send({ status: "Error", message: "Failed to send email" });
//         } else {
//           return res.status(200).send({ status: "Success", message: "Reset password email sent successfully" });
//         }
//       });
//     })
//     .catch(error => {
//       console.log(error);
//       return res.status(500).send({ status: "Error", message: "Internal server error" });
//     });
// };
