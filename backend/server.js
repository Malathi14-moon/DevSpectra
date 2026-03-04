

const fetch = require("node-fetch");
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
  limits: { fileSize: 5 * 1024 * 1024 },
});

// Nodemailer setup
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

console.log("📧 Email config:", {
  user: process.env.EMAIL_USER ? "✅ Set" : "❌ Missing",
  pass: process.env.EMAIL_PASS ? "✅ Set" : "❌ Missing",
  hr_email: process.env.HR_EMAIL ? "✅ Set" : "❌ Missing"
});

transporter.verify((error) => {
  if (error) console.error("❌ SMTP error:", error);
  else console.log("✅ SMTP Server ready");
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { dbName: "devspectra" })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Contact schema & model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  budget: String,
  projectBrief: String,
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

// ── Contact form route ────────────────────────────────────────────────────
app.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, budget, projectBrief } = req.body;
    const newContact = new Contact({ name, email, phone, budget, projectBrief });
    await newContact.save();
    res.status(200).json({ message: "Contact form saved successfully ✅" });
  } catch (error) {
    console.error("❌ Error saving contact form:", error);
    console.log("📩 Incoming data:", req.body);
    res.status(500).json({ message: "Failed to save contact form" });
  }
});

// ── Job application route ─────────────────────────────────────────────────
app.post("/send-application", upload.single("resume"), async (req, res) => {
  console.log("📩 API HIT: /send-application");
  console.log("BODY:", req.body);
  console.log("FILE:", req.file);

  try {
    const { name, email, phone, description } = req.body;

    // Validation
    if (!name || !email || !phone) {
      return res.status(400).json({ message: "Name, email, and phone are required" });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Resume file is required" });
    }

    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.HR_EMAIL) {
      console.error("❌ Missing email environment variables");
      return res.status(500).json({ message: "Server email configuration error" });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.HR_EMAIL,
      replyTo: email,
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

    console.log("📧 Sending email to:", process.env.HR_EMAIL);
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully");
    res.status(200).json({ message: "Application sent successfully ✅" });
  } catch (error) {
    console.error("❌ Error in /send-application:", error.message);
    console.error("Error details:", error);
    res.status(500).json({ message: `Failed to send email: ${error.message}` });
  }
});

// ── Groq AI Chatbot route ─────────────────────────────────────────────────
const DEVSPECTRA_SYSTEM = `You are Spectra, the official AI assistant for DevSpectra — a web development & digital solutions agency.

SERVICES: Web Design & Development, Mobile Apps (React Native/Flutter), Cloud Solutions (AWS/Azure/GCP), UI/UX Design, Digital Marketing, E-Commerce.

TECH STACK: React.js, Next.js, Node.js, MongoDB, PostgreSQL, AWS, Docker.

PAGES: Home, About, Services, Portfolio, Careers, Contact.

For pricing questions: say it varies by project scope and invite them to the Contact page for a free quote.
Keep answers friendly, professional and concise (2-4 sentences max).`;

app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [{ role: "system", content: DEVSPECTRA_SYSTEM }, ...messages],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (data.error) {
      return res.status(500).json({ error: data.error.message });
    }

    res.json({ reply: data.choices[0].message.content });
  } catch (err) {
    console.error("❌ Groq API error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// ── Health check ──────────────────────────────────────────────────────────
app.get("/", (req, res) => {
  res.send("Backend running successfully 🚀");
});

// ── Start server ──────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));