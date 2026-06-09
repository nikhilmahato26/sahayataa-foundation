// Curated icon registry — import only what we use (keeps bundle small).
// Reference icons by string name from siteContent.js via <Icon name="..." />.
import {
  Stethoscope,
  HeartPulse,
  Droplet,
  GraduationCap,
  BookOpen,
  HandHeart,
  Users,
  Utensils,
  Scale,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Send,
  Heart,
  QrCode,
  Copy,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  MessageCircle,
  Eye,
  Target,
  Sparkles,
} from 'lucide-react'

const registry = {
  Stethoscope,
  HeartPulse,
  Droplet,
  GraduationCap,
  BookOpen,
  HandHeart,
  Users,
  Utensils,
  Scale,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Send,
  Heart,
  QrCode,
  Copy,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  MessageCircle,
  Eye,
  Target,
  Sparkles,
}

export default function Icon({ name, ...props }) {
  const Cmp = registry[name]
  if (!Cmp) return null
  return <Cmp {...props} />
}

export { registry }
