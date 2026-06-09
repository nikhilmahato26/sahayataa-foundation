# Sahayataa Foundation — Website

Official website for **Sahayataa Foundation** (NGO services across India).
Built with **React + Vite + Tailwind CSS**, Framer Motion for motion, and a
fully centralized content file so the team can update text without touching code.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Where to change things

Everything the client edits lives in **one file**:

```
src/data/siteContent.js
```

That's where you set the phone, email, offices, donate UPI/bank, hero text,
impact numbers, focus areas, campaigns, events (with per-event notes & photo
lists), stories, about/vision/mission, and team.

### Donate (UPI + QR)
- Set `donate.upiId` to the real UPI / VPA. The QR on the Home and Join Us
  pages is **generated automatically** from this — no image needed.
- Fill `donate.bank` (account name, number, IFSC).
- Have a printed QR PNG instead? Drop it in `public/` and set
  `donate.qrImage = '/your-qr.png'`.

### Photos
Drop images into `public/images/` using the exact filenames listed in
`public/images/README.txt`. Each event has its own folder
(`public/images/events/<event-id>/`). Until a photo is added, a clean
branded placeholder is shown automatically — nothing breaks.

### Contact / WhatsApp
All forms (Join Us + Contact) open WhatsApp with the message pre-filled to
the number in `siteContent.js` (`+91 73177 74818`). No backend required.

## Project structure

```
src/
├── data/siteContent.js        # ← single source of truth for all content
├── components/
│   ├── layout/                # Navbar, Footer, FloatingWhatsApp
│   ├── sections/              # Hero, ImpactStats, WhatWeDo, Campaigns,
│   │                          #   EventsGallery, StoriesOfChange, DonateCTA,
│   │                          #   AboutSection, Offices, ContactInfo
│   ├── ui/                    # Button, SectionHeading, ProgressBar, Reveal,
│   │                          #   PageHeader, SmartImage
│   ├── forms/                 # MembershipForm, ContactForm (WhatsApp submit)
│   └── donate/                # DonateBlock (UPI QR + bank)
├── pages/                     # Home, About, OurWork, Campaigns, Events,
│                              #   JoinUs, Contact, NotFound
├── hooks/                     # useScrollToTop, useReveal
├── utils/                     # icons.jsx (curated registry), helpers.js
├── App.jsx                    # routes + layout
└── main.jsx                   # entry
```

## Pages / routes
- `/` Home (hero, impact, what we do, campaigns, events, stories, donate, offices)
- `/about` About + vision/mission/goal + team
- `/our-work` Focus areas + stories
- `/campaigns` Campaigns + donate
- `/events` Events gallery (tap an event → photo lightbox + notes)
- `/join-us` Volunteer / Membership + Donate (UPI QR + bank)
- `/contact` Contact info (4 offices) + enquiry form

## Deploy
- **Netlify**: build `npm run build`, publish `dist/`. SPA fallback is in
  `public/_redirects`.
- **Vercel**: zero config; `vercel.json` adds the SPA rewrite.
- Any static host: serve `dist/` and route all paths to `index.html`.

---
Powered by **Vidhik Sahayata**.
