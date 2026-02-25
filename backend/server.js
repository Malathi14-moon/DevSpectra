/*require("dotenv").config({ path: "./.env" });
require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const multer = require("multer");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// File upload config
const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

// Create email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Test route
app.get("/", (req, res) => {
  res.send("Backend running successfully 🚀");
});

// Email route
app.post("/send-application", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Resume file is required" });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.HR_EMAIL,
      subject: "New Job Application",
      html: `
        <h2>New Applicant</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
      attachments: [
        {
          filename: req.file.originalname,
          path: req.file.path,
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Application sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("HR_EMAIL:", process.env.HR_EMAIL);*/





require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const multer = require("multer");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 5 * 1024 * 1024 },
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error) => {
  if (error) console.error(error);
  else console.log("SMTP Server ready ✅");
});





app.post("/send-application", upload.single("resume"), async (req, res) => {
  console.log("📩 API HIT: /send-application");
  console.log("BODY:", req.body);
  console.log("FILE:", req.file);

  try {
    const { name, email, phone, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Resume file is required" });
    }

    /*const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.HR_EMAIL,
      subject: "New Job Application",
      html: `
        <h2>New Applicant</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
      attachments: [
        {
          filename: req.file.originalname,
          path: req.file.path,
        },
      ],
    };*/



  const mailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.HR_EMAIL,
  subject: `New Job Application - ${name}`,
  html: `
    <h2>New Applicant</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Description:</strong></p>
    <p>${description || "No description provided"}</p>

  `,
  attachments: [
    {
      filename: req.file.originalname,
      path: req.file.path,
    },
  ],
};



    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Application sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send email" });
  }
});


app.get("/", (req, res) => {
  res.send("Backend running successfully 🚀");
});



app.listen(5000, () =>
  console.log("Server running on http://localhost:5000")
);

