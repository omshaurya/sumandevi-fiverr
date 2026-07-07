import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

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
}
