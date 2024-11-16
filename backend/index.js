require('dotenv').config();

// Check if the variables are loaded correctly
console.log('EMAIL_USER:', process.env.EMAIL_USER);  // Debugging
console.log('EMAIL_PASS:', process.env.EMAIL_PASS);  // Debugging

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors({
  origin: "https://anuragpardeshiportfolio.vercel.app/",  // Allow only the specified frontend domain
  methods: ["POST", "GET"],
  credentials: true
}));


// Route to handle form submission
app.post('/api/send', (req, res) => {
  const { email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  transporter.verify((error, success) => {
    if (error) {
      console.log('Transporter Error:', error);
      return res.status(500).send('Error with email server configuration');
    } else {
      console.log('Server ready for emails');
    }
  });

  const mailOptions = {
    from: 'noreply@yourdomain.com',
    replyTo: email,
    to: process.env.EMAIL_USER,
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending email: ' + error.message);
    } else {
      console.log('Email sent:', info.response);
      return res.status(200).send('Email successfully sent');
    }
  });
});

// Export the Express app
module.exports = app;
