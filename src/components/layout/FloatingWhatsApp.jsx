import { whatsappLink } from '@/utils/helpers'
import { org } from '@/data/siteContent'
import Icon from '@/utils/icons.jsx'

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(`Hi ${org.name}, I'd like to know more about your work.`)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-brand-600 text-white shadow-pill transition hover:scale-105 hover:bg-brand-700"
    >
      <Icon name="MessageCircle" className="h-6 w-6" />
      <span className="absolute right-0 top-0 h-3.5 w-3.5 animate-ping rounded-full bg-brand-300" />
    </a>
  )
}
