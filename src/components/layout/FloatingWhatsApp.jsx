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
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition hover:scale-105 active:scale-95 duration-300 hover:bg-[#22c35e]"
    >
      <Icon name="Whatsapp" className="h-7 w-7" />
      <span className="absolute right-0 top-0 h-3.5 w-3.5 animate-ping rounded-full bg-white/60" />
    </a>
  )
}
