import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import nodemailer from "nodemailer";
import cors from "cors";
import multer from "multer";

const storage = multer.memoryStorage(); // store file in memory buffer
const upload = multer({ storage: storage });

const app = express()
const PORT = process.env.PORT || 8000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)



app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",   // Vite frontend
  methods: "GET,POST",
  allowedHeaders: "Content-Type"
}));
app.use(express.urlencoded({ extended: true }));

app.post("/partner", async (req, res) => {
  //console.log('111');
  const { name, email, subject, message , whatsapp_number,  } = req.body

  // console.log("REQ BODY:", req.body);
  // console.log("WHATSAPP:", req.body.whatsapp_number);

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "swapnanil200426@gmail.com",
        pass: ""
      }
    })

    await transporter.sendMail({
      from: `"Website Contact" <swapnanil200426@gmail.com>`,
      to: "swapnanil200426@gmail.com",
      subject: `New Contact Form — ${subject}`,  
      html: `
        <h3>New Message From Contact Form</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Whatsapp Number:</b> ${whatsapp_number}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b> ${message}</p>
      `
    })

    res.status(200).json({ message: "Email sent successfully" })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Email failed to send" })
    console.log('failed to send email');
  }
})


app.post("/career", upload.single("resume"), async (req, res) => {
  // console.log('111');
  try {
    const {
      fullName,
      email,
      phone,
      jobRole,
      experience,
      coverLetter
    } = req.body;

    const resumeFile = req.file; // <-- the uploaded document

    if (!resumeFile) {
      return res.status(400).json({ error: "Resume is required" });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "swapnanil200426@gmail.com",
        pass: ""
      }
    });

    await transporter.sendMail({
      from: `"Career Form" <swapnanil200426@gmail.com>`,
      to: "swapnanil200426@gmail.com",
      subject: `New Career Application — ${fullName}`,
      html: `
        <h3>New Career Application</h3>
        <p><b>Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Role Applied:</b> ${jobRole}</p>
        <p><b>Experience:</b> ${experience} years</p>
        <p><b>Cover Letter:</b> ${coverLetter}</p>
      `,
      attachments: [
        {
          filename: resumeFile.originalname,
          content: resumeFile.buffer,
        },
      ],
    });

    res.status(200).json({ message: "Application email sent successfully" });

  } catch (error) {
    console.error("Email failed:", error);
    res.status(500).json({ error: "Email failed to send" });
  }
});


// This is ABSOLUTELY correct for your folder structure
const distPath = path.resolve(__dirname, 'dist')

// Serve all static files (JS/CSS/images)
app.use(express.static(distPath))

// React/Vite SPA fallback
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'))
})

app.listen(PORT, () => console.log(`Server running on ${PORT}`))



