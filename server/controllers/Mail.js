const nodemailer = require('nodemailer');
require("dotenv").config();

exports.sendMail = async (req, res) => {
    const { email, firstName, lastName, message, phone } = req.body;

    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            },
            logger: console,
            debug: true
        });

        let mailOptions = {
            from: `${email} <${process.env.MAIL_USER}>`,
            to: 'anubhavshaurya3@gmail.com',
            subject: 'Contact Us Form Submission',
            text: `Message: ${message}\n\nFrom: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}`,
            html: `<p><strong>Message:</strong> ${message}</p><p><strong>From:</strong> ${firstName} ${lastName}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone}</p>`,
        };

        let info = await transporter.sendMail(mailOptions);

        console.log('Message sent: %s', info.messageId);
        res.status(200).send('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
};
