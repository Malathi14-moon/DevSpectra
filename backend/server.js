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





/*require("dotenv").config();
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








const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  budget: String,
  projectBrief: String,
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;

const Contact = require("./models/contact");

app.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, budget, projectBrief } = req.body;

    const newContact = new Contact({
      name,
      email,
      phone,
      budget,
      projectBrief
    });

    await newContact.save();

    res.status(200).json({ message: "Contact form saved successfully ✅" });
  } catch (error) {
    console.error("❌ Error saving contact form:", error);
    res.status(500).json({ message: "Failed to save contact form" });
  }
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
);*/




require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const multer = require("multer");
const cors = require("cors");
const mongoose = require("mongoose");
console.log("MONGO_URI:", process.env.MONGO_URI);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer setup for resume uploads
const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

// Nodemailer setup (use port 587 for reliability in cloud)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // STARTTLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error) => {
  if (error) console.error("❌ SMTP error:", error);
  else console.log("SMTP Server ready ✅");
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { dbName: "devspectra" })
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Contact schema & model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  budget: String,
  projectBrief: String,
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model("Contact", contactSchema);

// Contact form route (save to MongoDB)
app.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, budget, projectBrief } = req.body;

    const newContact = new Contact({ name, email, phone, budget, projectBrief });
    await newContact.save();

    res.status(200).json({ message: "Contact form saved successfully ✅" });
  } catch (error) {
    console.error("❌ Error saving contact form:", error);
    res.status(500).json({ message: "Failed to save contact form" });
    console.log("📩 Incoming data:", req.body);
  }
});



// Job application route (send email only)
app.post("/send-application", upload.single("resume"), async (req, res) => {
  console.log("📩 API HIT: /send-application");
  console.log("BODY:", req.body);
  console.log("FILE:", req.file);

  try {
    const { name, email, phone, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Resume file is required" });
    }

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

    res.status(200).json({ message: "Application sent successfully ✅" });
  } catch (error) {
    console.error("❌ Error in /send-application:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

// Health check route
app.get("/", (req, res) => {
  res.send("Backend running successfully 🚀");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));