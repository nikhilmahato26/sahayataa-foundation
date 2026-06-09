import { Routes, Route } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp'
import useScrollToTop from '@/hooks/useScrollToTop'

import Home from '@/pages/Home'
import About from '@/pages/About'
import OurWork from '@/pages/OurWork'
import CampaignsPage from '@/pages/CampaignsPage'
import EventsPage from '@/pages/EventsPage'
import JoinUs from '@/pages/JoinUs'
import Contact from '@/pages/Contact'
import NotFound from '@/pages/NotFound'

export default function App() {
  useScrollToTop()

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
