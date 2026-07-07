import 'dotenv/config'
import express from 'express'
import nodemailer from 'nodemailer'

const app = express()
app.use(express.json())

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

app.post('/api/contact', async (req, res) => {
  const { name, email, service, budget, message } = req.body || {}

  if (!name || !email || !service || !message) {
    return res.status(400).json({ success: false, error: 'Missing required fields' })
  }

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Inquiry from ${name} — ${service}`,
      text: `Name: ${name}\nEmail: ${email}\nService: ${service}\nBudget: ${budget || 'Not specified'}\n\nMessage:\n${message}`,
    })
    res.json({ success: true })
  } catch (err) {
    console.error('Mail send failed:', err)
    res.status(500).json({ success: false, error: 'Failed to send email' })
  }
})

const PORT = process.env.PORT || 5178
app.listen(PORT, () => console.log(`Mail server running on http://localhost:${PORT}`))
