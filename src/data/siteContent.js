// =============================================================
//  SAHAYATAA FOUNDATION — single source of truth for all content
//  Edit text, numbers, offices, events, campaigns here. Components
//  read from this file so the client never has to touch JSX.
// =============================================================

export const org = {
  name: 'Sahayataa Foundation',
  shortName: 'Sahayataa',
  tagline: 'Real Help, Real Change',
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
  upiId: 'sahayataafoundation@upi', // TODO: replace with real UPI / VPA
  payeeName: 'Sahayataa Foundation',
  note: 'Donation to Sahayataa Foundation',
  qrImage: null, // e.g. '/donate-qr.png' to override generated QR
  bank: {
    accountName: 'Sahayataa Foundation',
    accountNumber: 'XXXXXXXXXXXX', // TODO
    ifsc: 'XXXX0000000', // TODO
    bankName: '', // TODO
  },
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
    image: '/images/hero-1.jpg', // TODO: client photo
    cta: { label: 'Explore our work', to: '/our-work' },
  },
  {
    title: 'Every camp saves a life',
    subtitle: 'Blood donation and medical camps in towns and villages.',
    image: '/images/hero-2.jpg',
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
    image: '/images/camp-medical.jpg',
    goal: 150000,
    progress: 62,
  },
  {
    category: 'Blood',
    title: 'Donate Blood, Save Lives',
    desc: 'Mobilising voluntary donors for hospitals and emergency needs.',
    image: '/images/camp-blood.jpg',
    goal: 75000,
    progress: 48,
  },
  {
    category: 'Education',
    title: 'School Kits for Children',
    desc: 'Books, bags and learning material for first-generation learners.',
    image: '/images/camp-education.jpg',
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
    id: 'blood-donation-camp',
    title: 'Blood Donation Camp',
    location: 'Noida, UP',
    date: '', // TODO e.g. 'Feb 2025'
    note: 'Voluntary donors came together to support local hospital blood banks. Add specific notes for this event here.',
    cover: '/images/events/blood-donation-camp/cover.jpg',
    photos: [
      '/images/events/blood-donation-camp/1.jpg',
      '/images/events/blood-donation-camp/2.jpg',
      '/images/events/blood-donation-camp/3.jpg',
    ],
  },
  {
    id: 'medical-camp',
    title: 'Free Medical Camp',
    location: 'Patna, Bihar',
    date: '',
    note: 'General check-ups, free medicines and specialist referrals for the community. Add specific notes here.',
    cover: '/images/events/medical-camp/cover.jpg',
    photos: [
      '/images/events/medical-camp/1.jpg',
      '/images/events/medical-camp/2.jpg',
      '/images/events/medical-camp/3.jpg',
    ],
  },
  {
    id: 'education-drive',
    title: 'Education & School Kit Drive',
    location: 'Lucknow, UP',
    date: '',
    note: 'Distribution of learning material and mentorship for children. Add specific notes here.',
    cover: '/images/events/education-drive/cover.jpg',
    photos: [
      '/images/events/education-drive/1.jpg',
      '/images/events/education-drive/2.jpg',
    ],
  },
]

// ------------------------------------------------------------------
//  STORIES OF CHANGE
// ------------------------------------------------------------------
export const stories = [
  {
    name: 'Aarti',
    image: '/images/stories/story-1.jpg',
    quote:
      'The medical camp caught my mother’s illness early. We could never have afforded those tests otherwise.',
  },
  {
    name: 'Ramesh',
    image: '/images/stories/story-2.jpg',
    quote:
      'I donated blood at the camp for the first time. Knowing it helped someone in surgery means a lot.',
  },
  {
    name: 'Priya',
    image: '/images/stories/story-3.jpg',
    quote:
      'With the school kit and coaching support, my daughter is back in class and loves studying again.',
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
    { name: '', role: 'Founder', image: '/images/team/1.jpg' }, // TODO names/photos
    { name: '', role: 'President', image: '/images/team/2.jpg' },
    { name: '', role: 'Coordinator', image: '/images/team/3.jpg' },
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
  { label: 'Facebook', icon: 'Facebook', href: '#' },
  { label: 'Instagram', icon: 'Instagram', href: '#' },
  { label: 'YouTube', icon: 'Youtube', href: '#' },
  { label: 'LinkedIn', icon: 'Linkedin', href: '#' },
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
