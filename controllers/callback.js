const callbackModel = require("../models/callbacks");
const nodemailer = require('nodemailer');
require('dotenv').config();

const callback = async (req, res) => {
    const { Name, ContactNo, CallBackTime, Comment  } = req.body;
    try {
        await callbackModel.create({ Name, ContactNo, CallBackTime, Comment });

        // let mailTransporter = nodemailer.createTransport({
        //     service: 'gmail',
        //     // host: 'smtp.gmail.com',
        //     // port: 587,
        //     secure: true,
        //     auth: {
        //         user: process.env.USERNAME,
        //         pass: process.env.PASSWORD
        //     }
        // });

        // let mailDetails = {
        //     from: process.env.USERNAME,
        //     to: 'veerushekhawat123@gmail.com',
        //     subject: 'Callback Request Received',
        //     html: `
        //         <h3>User Details:</h3>
        //         <p>Name: ${Name}</p>
        //         <p>Contact No: ${ContactNo}</p>
        //         <p>Callback Time: ${CallBackTime}</p>
        //         <p>Comment: ${Comment}</p>
        //     `
        // };

        // mailTransporter.sendMail(mailDetails, function(err, data) {
        //     if(err) {
        //         console.log(err, 'Error Occurs');
        //     } else {
        //         console.log('Email sent successfully');
        //         res.send({ success: true, message: 'Request Submitted for callback succesfully.' });
        //     }
        // });
                res.send({ success: true, message: 'Request Submitted for callback succesfully.' });

    } catch(err) {
        res.status(500).json({ success: false, error: 'Something went wrong. Please try again after some time.' });
    }
}

module.exports = callback;