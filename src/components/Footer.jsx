import { Globe, Mail, MapPin, MessageCircle, Phone, Share2 } from 'lucide-react'
import Logo from './Logo'

function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-md text-sm leading-6 text-[var(--color-muted)]">
            Win Mart Fashion brings fresh daily style picks across apparel, shoes,
            and trend-led essentials with a polished retail experience.
          </p>
          <div className="flex gap-2">
            {[Globe, Share2, MessageCircle].map((Icon, index) => (
              <button
                key={index}
                type="button"
                className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--color-soft-blue)] text-[var(--color-primary)] transition hover:bg-[var(--color-primary)] hover:text-white"
              >
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase text-[var(--color-primary)]">
            Shop
          </h3>
          <ul className="space-y-3 text-sm text-[var(--color-muted)]">
            <li>Men's Wear</li>
            <li>Women's Wear</li>
            <li>Shoes</li>
            <li>Hot Items</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase text-[var(--color-primary)]">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-[var(--color-muted)]">
            <li className="flex gap-2"><MapPin size={17} /> Main Street, Colombo</li>
            <li className="flex gap-2"><Phone size={17} /> +94 77 123 4567</li>
            <li className="flex gap-2"><Mail size={17} /> hello@winmart.example</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--color-line)] px-4 py-4 text-center text-xs text-[var(--color-muted)]">
        Copyright 2026 Win Mart Fashion. UI preview only.
      </div>
    </footer>
  )
}

export default Footer
