const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

// CORS Configuration
const allowedOrigins = [
  'http://localhost:5174', // Development
  // You can add production URLs here, e.g., 'https://yourwebsite.com'
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',
};

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Debugging .env
console.log("Email User:", process.env.EMAIL_USER);

// Test CORS Route
app.get('/test-cors', (req, res) => {
  res.json({ message: 'CORS is working!' });
});

// Route to handle form submission
app.post('/send', (req, res) => {
  const { email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,  // Use port 465 for SSL if necessary
    secure: false, // Set to true if using SSL (for port 465)
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Debug transporter verification
  transporter.verify((error, success) => {
    if (error) {
      console.error('Transporter verification failed:', error);
      return res.status(500).send('Transporter verification failed: ' + error.message);
    } else {
      console.log('Transporter is ready to send emails');
    }
  });

  const mailOptions = {
    from: 'noreply@yourdomain.com',
    replyTo: email,
    to: process.env.EMAIL_USER, // Your actual recipient email
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

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
