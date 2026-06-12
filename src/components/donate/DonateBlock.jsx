import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { donate, org } from '@/data/siteContent'
import { upiLink, inr, copyText, whatsappLink } from '@/utils/helpers'
import Icon from '@/utils/icons.jsx'
import Button from '@/components/ui/Button'

export default function DonateBlock({ compact = false }) {
  const [amount, setAmount] = useState(donate.presets[1] ?? 501)
  const [custom, setCustom] = useState('')
  const [copied, setCopied] = useState(false)

  const effectiveAmount = custom ? Number(custom) : amount
  const link = upiLink(effectiveAmount)

  const handleCopy = async () => {
    const ok = await copyText(donate.upiId)
    if (ok) {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    }
  }

  return (
    <div
      id="donate"
      className="grid gap-6 lg:grid-cols-2 lg:items-stretch"
    >
      {/* Amount + actions */}
      <div className="card p-6 sm:p-8">
        <span className="eyebrow-soft mb-3">
          <Icon name="Heart" className="h-3.5 w-3.5" /> Donate
        </span>
        <h3 className="text-2xl font-extrabold">Support a camp today</h3>
        <p className="mt-1 text-sm text-ink-muted">
          Every contribution funds medicines, blood-camp logistics and learning
          kits. Choose an amount and pay via UPI.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {donate.presets.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => {
                setAmount(p)
                setCustom('')
              }}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                !custom && amount === p
                  ? 'bg-brand-400 text-ink shadow-pill'
                  : 'bg-brand-50 text-brand-700 hover:bg-brand-100'
              }`}
            >
              {inr(p)}
            </button>
          ))}
        </div>

        <div className="mt-3">
          <label className="label" htmlFor="custom-amount">
            Or enter an amount
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-bold text-ink-muted">
              ₹
            </span>
            <input
              id="custom-amount"
              type="number"
              min="1"
              inputMode="numeric"
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
              placeholder="Custom amount"
              className="field pl-8"
            />
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Button href={link} variant="primary" size="lg" icon="QrCode" className="flex-1">
            Pay {effectiveAmount ? inr(effectiveAmount) : ''} via UPI
          </Button>
          <Button
            href={whatsappLink(
              `Hi ${org.name}, I'd like to donate ${
                effectiveAmount ? inr(effectiveAmount) : ''
              }. Please guide me.`
            )}
            target="_blank"
            rel="noreferrer"
            variant="ghost"
            size="lg"
            icon="MessageCircle"
          >
            Donate help
          </Button>
        </div>

        {/* Bank details */}
        {!compact && (
          <div className="mt-6 rounded-2xl bg-surface-tint p-4 text-sm">
            <p className="font-bold text-ink">Bank transfer</p>
            <dl className="mt-2 grid gap-1 text-ink-soft">
              <Row k="Account name" v={donate.bank.accountName} />
              <Row k="Account no." v={donate.bank.accountNumber} />
              <Row k="IFSC" v={donate.bank.ifsc} />
              {donate.bank.bankName && <Row k="Bank" v={donate.bank.bankName} />}
            </dl>
          </div>
        )}
      </div>

      {/* QR */}
      <div className="card flex flex-col items-center justify-center gap-4 p-6 text-center sm:p-8">
        <div className="rounded-3xl bg-white p-4 shadow-card ring-1 ring-brand-100">
          {donate.qrImage ? (
            <img
              src={donate.qrImage}
              alt="Scan to donate"
              className="h-48 w-48 rounded-xl object-contain"
            />
          ) : (
            <QRCodeSVG
              value={link}
              size={192}
              level="M"
              fgColor="#0b4e31"
              bgColor="#ffffff"
              marginSize={1}
            />
          )}
        </div>
        <div>
          <p className="font-bold text-ink">Scan &amp; Pay</p>
          <p className="text-sm text-ink-muted">Any UPI app — GPay, PhonePe, Paytm</p>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm font-bold text-brand-700 transition hover:bg-brand-100"
        >
          <Icon name={copied ? 'CheckCircle2' : 'Copy'} className="h-4 w-4" />
          {copied ? 'UPI ID copied' : donate.upiId}
        </button>
      </div>
    </div>
  )
}

function Row({ k, v }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="text-ink-muted">{k}</dt>
      <dd className="font-semibold text-ink">{v}</dd>
    </div>
  )
}
