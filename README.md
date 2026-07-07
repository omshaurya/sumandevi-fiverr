# Suman Devi — Portfolio Website

A professional freelancer portfolio built with React + Vite.

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build
```

## ✉️ Activating the Contact Form

The contact form uses **Nodemailer** via a small Express server (`server.js`).

1. Create a `.env` file in the project root:

   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-gmail-address@gmail.com
   SMTP_PASS=your-gmail-app-password
   CONTACT_RECEIVER_EMAIL=where-inquiries-should-arrive@gmail.com
   ```

   For Gmail, `SMTP_PASS` is an **App Password** (Google Account → Security → 2-Step Verification → App passwords), not your normal password.

2. Start the mail server alongside the dev server:

   ```bash
   npm run server   # starts the mail API on http://localhost:5178
   npm run dev      # Vite proxies /api requests to it
   ```

Form submissions will land in the `CONTACT_RECEIVER_EMAIL` inbox.

## 🔗 Update Your Links

The Fiverr profile URL used throughout the site is `https://www.fiverr.com/s/99Kk9md`.

Update social links in `src/components/Footer.jsx`:
- Instagram href
- LinkedIn href
- Fiverr href

## 📁 Project Structure

```
src/
├── App.jsx              # Root component
├── App.css              # All global styles & design tokens
├── main.jsx             # Entry point
├── assets/
│   └── suman.jpg        # Profile photo
└── components/
    ├── FilmStrip.jsx    # Animated ticker
    ├── Navbar.jsx       # Sticky navigation
    ├── Hero.jsx         # Hero section with photo
    ├── Services.jsx     # 4 service cards
    ├── Portfolio.jsx    # 6 portfolio items
    ├── Pricing.jsx      # 3 pricing tiers
    ├── Tools.jsx        # Tools & software grid
    ├── About.jsx        # About + skill bars
    ├── CTA.jsx          # Call to action
    ├── Contact.jsx      # Contact form (Nodemailer via /api/contact)
    └── Footer.jsx       # Footer with social links
```

## 🌐 Deploying

**Vercel (recommended — free):**
```bash
npm install -g vercel
vercel
```

**Netlify:**
```bash
npm run build
# Drag the `dist/` folder to netlify.com/drop
```
