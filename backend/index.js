const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

// CORS Configuration
const corsOptions = {
  origin: 'http://localhost:5174', // Update with your frontend URL in production
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',
};

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log("Email User:", process.env.EMAIL_USER); // Debugging .env

// Route to handle form submission
app.post('/send', (req, res) => {
  const { email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Set to true if using SSL (for port 465)
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Debug transporter
  transporter.verify((error, success) => {
    if (error) {
      console.log('Transporter Error:', error);
    } else {
      console.log('Server ready for emails');
    }
  });

  const mailOptions = {
    from: 'noreply@yourdomain.com',
    replyTo: email,
    to: process.env.EMAIL_USER, // Change to your actual recipient email
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email: ' + error.message);
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email successfully sent');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
