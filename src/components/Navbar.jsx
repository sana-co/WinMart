import { Heart, Menu, Search, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Feedback', to: '/feedback' },
  { label: 'Wishlist', to: '/wishlist' },
]

function Navbar({ wishlistCount }) {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-sm font-bold transition ${
      isActive
        ? 'bg-[var(--color-soft-blue)] text-[var(--color-primary)]'
        : 'text-[var(--color-muted)] hover:bg-slate-100 hover:text-[var(--color-primary)]'
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <NavLink to="/" aria-label="Win Mart Fashion home" onClick={() => setOpen(false)}>
          <Logo compact />
        </NavLink>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex h-10 items-center gap-2 rounded-lg border border-[var(--color-line)] bg-white px-3 text-[var(--color-muted)]">
            <Search size={16} />
            <span className="text-sm">Search styles</span>
          </div>
          <NavLink
            to="/wishlist"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)] text-white transition hover:bg-[var(--color-primary-strong)]"
            aria-label="Open wishlist"
          >
            <Heart size={19} />
            {wishlistCount > 0 && (
              <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-[var(--color-secondary)] px-1 text-xs font-bold">
                {wishlistCount}
              </span>
            )}
          </NavLink>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-line)] md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[var(--color-line)] bg-white px-4 py-3 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
