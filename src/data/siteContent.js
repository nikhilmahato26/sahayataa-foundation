// =============================================================
//  SAHAYATAA FOUNDATION — single source of truth for all content
//  Edit text, numbers, offices, events, campaigns here. Components
//  read from this file so the client never has to touch JSX.
// =============================================================

export const org = {
  name: 'Sahayataa Foundation',
  shortName: 'Sahayataa',
  tagline: 'साथ है, सहायता है',
  mission:
    'NGO services across India — education, health, relief camps and community welfare delivered with dignity.',
  // Contact
  phone: '+91 73177 74818',
  phoneRaw: '917317774818', // used for tel: and wa.me links
  whatsapp: '917317774818',
  email: 'sahayataafoundation@gmail.com',
  poweredBy: 'Vidhik Sahayata',
}

// ------------------------------------------------------------------
//  DONATE — UPI + bank. Fill the real UPI ID / account once available.
//  The QR is generated client-side from the UPI deep link (no image
//  needed). If you have a printed QR PNG, drop it in /public and set
//  donate.qrImage to its path to use that instead.
// ------------------------------------------------------------------
export const donate = {
  upiId: 'sahayataafoundation@oksbi',
  payeeName: 'Sahayataa Foundation',
  note: 'Donation to Sahayataa Foundation',
  qrImage: '/images/donate-qr.png',
  // suggested amounts (₹)
  presets: [201, 501, 1100, 2100, 5100],
}

// ------------------------------------------------------------------
//  OFFICES
// ------------------------------------------------------------------
export const offices = [
  {
    city: 'Noida',
    state: 'Uttar Pradesh',
    lines: ['Unit 29, Okaya Tower', 'Sector 62, Noida, UP'],
  },
  {
    city: 'Gurgaon',
    state: 'Haryana',
    lines: ['Pivotal Deewan, Sector 84', 'Gurgaon, Haryana, India'],
  },
  {
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    lines: ['301, 3rd Floor, Summit Building', 'Gomti Nagar, Lucknow, UP'],
  },
  {
    city: 'Patna',
    state: 'Bihar',
    lines: ['Near RPS Mor, Bailey Road', 'Patna, Bihar'],
  },
]

// ------------------------------------------------------------------
//  HERO SLIDES
// ------------------------------------------------------------------
export const heroSlides = [
  {
    title: 'Standing with communities across India',
    subtitle: 'Education, health & relief — delivered where it is needed most.',
    image: 'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781252573/sahayata/WhatsApp_Image_2026-06-11_at_13.18.45_rrymy9.jpg',
    cta: { label: 'Explore our work', to: '/our-work' },
  },
  {
    title: 'Empowering through awareness & aid',
    subtitle: 'Free legal aid, self defence training, and health camps in towns and cities.',
    image: '/images/events/legal-aid-camp-refugee-camp-delhi/WhatsApp Image 2026-06-11 at 13.18.44.jpeg',
    cta: { label: 'Join a camp', to: '/join-us' },
  },
]

// ------------------------------------------------------------------
//  IMPACT — headline stat cards
// ------------------------------------------------------------------
export const impact = {
  eyebrow: 'Impact so far',
  title: 'Driving help that changes lives',
  cards: [
    {
      tag: 'Health',
      value: '12,000+',
      label: 'people served at medical camps',
      note: 'Free check-ups, medicines & referrals',
      icon: 'Stethoscope',
    },
    {
      tag: 'Blood',
      value: '3,500+',
      label: 'units collected at blood drives',
      note: 'Voluntary donors, safe storage',
      icon: 'HeartPulse',
    },
    {
      tag: 'Education',
      value: '6,000+',
      label: 'children supported with learning',
      note: 'Materials, coaching & mentorship',
      icon: 'GraduationCap',
    },
    {
      tag: 'Relief',
      value: '40+',
      label: 'relief & welfare drives',
      note: 'Food, essentials & disaster support',
      icon: 'HandHeart',
    },
  ],
}

// ------------------------------------------------------------------
//  WHAT WE DO — focus areas grid
// ------------------------------------------------------------------
export const focusAreas = [
  {
    title: 'Medical Camps',
    desc: 'Free health screening, consultation and medicines for underserved communities.',
    icon: 'Stethoscope',
  },
  {
    title: 'Blood Donation',
    desc: 'Voluntary blood donation drives in partnership with hospitals and donors.',
    icon: 'Droplet',
  },
  {
    title: 'Education & Literacy',
    desc: 'Bridging learning gaps and supporting children to stay in school.',
    icon: 'BookOpen',
  },
  {
    title: 'Women Empowerment',
    desc: 'Skilling, self-help groups and leadership for economic agency.',
    icon: 'Users',
  },
  {
    title: 'Food & Relief',
    desc: 'Ration kits, meals and emergency relief during crises.',
    icon: 'Utensils',
  },
  {
    title: 'Health Awareness',
    desc: 'Counselling, nutrition and preventive-care drives for families.',
    icon: 'HeartPulse',
  },
  {
    title: 'Legal Awareness & Aid',
    desc: 'Rights education and basic legal support for vulnerable groups.',
    icon: 'Scale',
  },
  {
    title: 'Sanitation & Water',
    desc: 'Clean water, hygiene behaviour and sanitation access for all.',
    icon: 'ShieldCheck',
  },
]

// ------------------------------------------------------------------
//  CAMPAIGNS — fundraising cards with progress
// ------------------------------------------------------------------
export const campaigns = [
  {
    category: 'Health',
    title: 'Free Medical Camp Drive',
    desc: 'Doctors, screening and medicines for families with no access to care.',
    image: '/images/events/free-medical-camp-patna-2026-jan/WhatsApp Image 2026-06-11 at 13.02.27 (1).jpeg',
    goal: 150000,
    progress: 62,
  },
  {
    category: 'Legal Aid',
    title: 'Free Legal Aid Camp',
    desc: 'Providing consultations, rights awareness, and legal help to vulnerable groups.',
    image: '/images/events/legal-aid-camp-refugee-camp-delhi/WhatsApp Image 2026-06-11 at 13.18.45.jpeg',
    goal: 75000,
    progress: 48,
  },
  {
    category: 'Empowerment',
    title: 'Self Defence Training',
    desc: 'Empowering young women and girls with physical safety skills and confidence.',
    image: '/images/events/self-defence-training-srcc/2.jpeg',
    goal: 100000,
    progress: 35,
  },
]

// ------------------------------------------------------------------
//  EVENTS GALLERY — one entry per event, photos[] swapped by client.
//  Drop photos in /public/images/events/<id>/ and list filenames.
// ------------------------------------------------------------------
export const events = [
  {
    id: 'self-defence-srcc',
    title: 'Self Defence Training Program',
    location: 'SRCC College, Delhi',
    date: '2025',
    note: 'Empowering young women with essential self-defence techniques and safety awareness at Shri Ram College of Commerce.',
    cover: '/images/events/self-defence-training-srcc/1.jpeg',
    photos: [
      '/images/events/self-defence-training-srcc/1.jpeg',
      '/images/events/self-defence-training-srcc/2.jpeg',
      '/images/events/self-defence-training-srcc/3.jpeg',
    ],
  },
  {
    id: 'legal-aid-refugee',
    title: 'Legal Aid Camp',
    location: 'Refugee Camp, Delhi',
    date: '2025',
    note: 'Providing free legal consultations, rights awareness, and essential legal assistance to the residents of the Refugee Camp in Delhi.',
    cover: '/images/events/legal-aid-camp-refugee-camp-delhi/WhatsApp Image 2026-06-11 at 13.18.44.jpeg',
    photos: [
      '/images/events/legal-aid-camp-refugee-camp-delhi/WhatsApp Image 2026-06-11 at 13.18.44.jpeg',
      '/images/events/legal-aid-camp-refugee-camp-delhi/WhatsApp Image 2026-06-11 at 13.18.45.jpeg',
      '/images/events/legal-aid-camp-refugee-camp-delhi/WhatsApp Image 2026-06-11 at 13.18.45 (1).jpeg',
      '/images/events/legal-aid-camp-refugee-camp-delhi/WhatsApp Image 2026-06-11 at 13.18.46.jpeg',
      '/images/events/legal-aid-camp-refugee-camp-delhi/WhatsApp Image 2026-06-11 at 13.18.47.jpeg',
    ],
  },
  {
    id: 'self-defence-patna',
    title: 'Self Defence Training Program',
    location: 'Sahayata Foundation, Patna',
    date: '2025',
    note: 'Self-defence workshop organized by Sahayata Foundation in Patna, focused on building physical safety skills and confidence.',
    cover: '/images/events/self-defence-training-sahayata-foundation-patna/1.jpeg',
    photos: [
      '/images/events/self-defence-training-sahayata-foundation-patna/1.jpeg',
      '/images/events/self-defence-training-sahayata-foundation-patna/2.jpeg',
      '/images/events/self-defence-training-sahayata-foundation-patna/3.jpeg',
    ],
  },
  {
    id: 'bharat-nyay-puraskar',
    title: 'Bharat Nyay Puraskar 2025',
    location: 'Bharat Mandapam, Delhi',
    date: '2025',
    note: 'Honoring outstanding contributions to justice and legal aid at the prestigious Bharat Nyay Puraskar ceremony at Bharat Mandapam.',
    cover: '/images/events/bharat-nyay-puraskar-2025-bharat-mandapam-delhi/WhatsApp Image 2026-06-11 at 13.13.46.jpeg',
    photos: [
      '/images/events/bharat-nyay-puraskar-2025-bharat-mandapam-delhi/WhatsApp Image 2026-06-11 at 13.13.46.jpeg',
      '/images/events/bharat-nyay-puraskar-2025-bharat-mandapam-delhi/WhatsApp Image 2026-06-11 at 13.13.48.jpeg',
      '/images/events/bharat-nyay-puraskar-2025-bharat-mandapam-delhi/WhatsApp Image 2026-06-11 at 13.13.48 (1).jpeg',
    ],
  },
  {
    id: 'vidhik-sammelan',
    title: 'Vidhik Sammelan 2024',
    location: 'Tis Hazari, Delhi',
    date: '2024',
    note: 'A legal conference gathering law practitioners and activists at Tis Hazari Court to discuss critical reforms and public welfare.',
    cover: '/images/events/vidhik-sammelan-2024-tis-hazari-delhi/WhatsApp Image 2026-06-11 at 13.12.26.jpeg',
    photos: [
      '/images/events/vidhik-sammelan-2024-tis-hazari-delhi/WhatsApp Image 2026-06-11 at 13.12.26.jpeg',
      '/images/events/vidhik-sammelan-2024-tis-hazari-delhi/WhatsApp Image 2026-06-11 at 13.12.26 copy.jpeg',
      '/images/events/vidhik-sammelan-2024-tis-hazari-delhi/WhatsApp Image 2026-06-11 at 13.12.27.jpeg',
    ],
  },
  {
    id: 'raja-mahendra-pratap',
    title: 'Raja Mahendra Pratap Foundation & Sahayata Foundation Event',
    location: 'Delhi',
    date: '2025',
    note: 'Collaborative initiative and community welfare program in Delhi, organized jointly with the Raja Mahendra Pratap Foundation.',
    cover: '/images/events/raja-mahendra-pratap-sahayata-foundation-delhi-2025/WhatsApp Image 2026-06-11 at 13.10.08.jpeg',
    photos: [
      '/images/events/raja-mahendra-pratap-sahayata-foundation-delhi-2025/WhatsApp Image 2026-06-11 at 13.10.08.jpeg',
      '/images/events/raja-mahendra-pratap-sahayata-foundation-delhi-2025/WhatsApp Image 2026-06-11 at 13.10.08 copy.jpeg',
    ],
  },
  {
    id: 'naari-shakti-sangam',
    title: 'Naari Shakti Sangam',
    location: 'Jaipur',
    date: '2025',
    note: 'A major convention celebrating women leadership, empowerment, and social welfare contributions in Jaipur.',
    cover: '/images/events/naari-shakti-sangam-jaipur-2025/WhatsApp Image 2026-06-11 at 13.08.12.jpeg',
    photos: [
      '/images/events/naari-shakti-sangam-jaipur-2025/WhatsApp Image 2026-06-11 at 13.08.12.jpeg',
      '/images/events/naari-shakti-sangam-jaipur-2025/WhatsApp Image 2026-06-11 at 13.08.13.jpeg',
      '/images/events/naari-shakti-sangam-jaipur-2025/WhatsApp Image 2026-06-11 at 13.08.13 (1).jpeg',
    ],
  },
  {
    id: 'free-medical-camp-patna',
    title: 'Free Medical Camp',
    location: 'Patna',
    date: 'Jan 2026',
    note: 'Providing primary health check-ups, doctor consultations, and free medicines to underserved families in Patna.',
    cover: '/images/events/free-medical-camp-patna-2026-jan/WhatsApp Image 2026-06-11 at 13.02.27.jpeg',
    photos: [
      '/images/events/free-medical-camp-patna-2026-jan/WhatsApp Image 2026-06-11 at 13.02.27.jpeg',
      '/images/events/free-medical-camp-patna-2026-jan/WhatsApp Image 2026-06-11 at 13.02.27 (1).jpeg',
      '/images/events/free-medical-camp-patna-2026-jan/WhatsApp Image 2026-06-11 at 13.02.27 copy.jpeg',
      '/images/events/free-medical-camp-patna-2026-jan/WhatsApp Image 2026-06-11 at 13.02.29.jpeg',
    ],
  },
]

// ------------------------------------------------------------------
//  STORIES OF CHANGE
// ------------------------------------------------------------------
export const stories = [
  {
    name: 'Aarti',
    image: '/images/events/free-medical-camp-patna-2026-jan/WhatsApp Image 2026-06-11 at 13.02.27 copy.jpeg',
    quote:
      'The medical camp caught my mother’s illness early. We could never have afforded those tests otherwise.',
  },
  {
    name: 'Ramesh',
    image: '/images/events/legal-aid-camp-refugee-camp-delhi/WhatsApp Image 2026-06-11 at 13.18.47.jpeg',
    quote:
      'The legal aid camp helped me understand my rights and resolve a property dispute without hefty fees.',
  },
  {
    name: 'Priya',
    image: '/images/events/self-defence-training-sahayata-foundation-patna/2.jpeg',
    quote:
      'The self-defence training gave me the confidence and physical skills to feel safe going to college every day.',
  },
]

// ------------------------------------------------------------------
//  ABOUT — vision / mission / goal
// ------------------------------------------------------------------
export const about = {
  heading: 'Helping hands, across India',
  intro:
    'Sahayataa Foundation works with last-mile communities — running medical and blood donation camps, supporting children’s education, and standing by families in times of need, with dignity at the centre of everything we do.',
  tabs: {
    vision: {
      title: 'Equal opportunity with dignity & hope',
      body: 'A society where every person — especially the hard-to-reach — has access to health, education and the chance to live with dignity.',
    },
    mission: {
      title: 'Reach the unreached',
      body: 'Take essential health, education and relief services directly to communities that are usually left out, through camps, drives and partnerships.',
    },
    goal: {
      title: 'Sustained community care',
      body: 'Run regular medical and blood camps across our four regions and grow a volunteer network that keeps support going year-round.',
    },
  },
  team: [
    {
      name: 'Dr. Priya Thakur',
      role: 'Founder & Chairperson',
      image: '/images/team/chairperson.jpeg',
    },
    {
      name: 'Adv. Priti Thakur',
      role: 'President',
      image: '/images/team/president.jpeg',
    },
    {
      name: 'Shri Prabhu Narayan Thakur',
      role: 'National Coordinator / Advisor',
      image: '/images/team/cordinator.jpeg',
    },
    {
      name: 'Rishiraj Singh',
      role: 'Executive Director',
      image: '/images/team/executive-director.png',
    },
    {
      name: 'Adv. Deepti Singh',
      role: 'Project Director',
      image: '/images/team/project-director.png',
    },
  ],
}

// ------------------------------------------------------------------
//  MEMBERSHIP — Join Us form options
// ------------------------------------------------------------------
export const membership = {
  intro:
    'Join the mission as a volunteer or member, support a camp, or make a donation. Forms reach us directly on WhatsApp.',
  types: [
    { id: 'volunteer', label: 'Volunteer' },
    { id: 'member', label: 'Member' },
    { id: 'donor', label: 'Regular Donor' },
    { id: 'partner', label: 'Partner / CSR' },
  ],
  interests: [
    'Medical Camps',
    'Blood Donation',
    'Education',
    'Food & Relief',
    'Women Empowerment',
    'Event Volunteering',
  ],
}

// ------------------------------------------------------------------
//  NAV + SOCIAL
// ------------------------------------------------------------------
export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Work', to: '/our-work' },
  { label: 'Campaigns', to: '/campaigns' },
  { label: 'Events', to: '/events' },
  { label: 'Contact', to: '/contact' },
]

export const socials = [
  { label: 'Facebook', icon: 'Facebook', href: 'https://www.facebook.com/share/1BJkFdmqH9/' },
  { label: 'Instagram', icon: 'Instagram', href: 'https://www.instagram.com/sahayataafoundation' },
  { label: 'YouTube', icon: 'Youtube', href: 'https://youtube.com/@vidhiksahayata1' },
  { label: 'LinkedIn', icon: 'Linkedin', href: 'https://www.linkedin.com/in/vidhik-sahayata-b94b04315?' },
]

export const footerLinks = {
  explore: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Work', to: '/our-work' },
    { label: 'Campaigns', to: '/campaigns' },
    { label: 'Events', to: '/events' },
    { label: 'Join Us', to: '/join-us' },
  ],
  support: [
    { label: 'Donate', to: '/join-us#donate' },
    { label: 'Become a Member', to: '/join-us' },
    { label: 'Volunteer', to: '/join-us' },
    { label: 'Contact', to: '/contact' },
  ],
}
