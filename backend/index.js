const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// CORS configuration
const corsOptions = {
  origin: 'https://anuragpardeshiportfolio.vercel.app', // Your frontend domain
  credentials: true, // Allows cookies
  optionSuccessStatus: 200,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route to handle form submission
app.post('/api/send', (req, res) => {
  console.log('POST /api/send hit'); // Debugging: Check if route is hit
  const { email, subject, message } = req.body;

  if (!email || !subject || !message) {
    return res.status(400).send('All fields are required');
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
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

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
