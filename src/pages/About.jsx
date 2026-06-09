import { Award, PackageCheck, ShieldCheck, Sparkles } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import logo from '../assets/winmart-logo.svg'

const reasons = [
  { icon: Sparkles, title: 'Fresh style drops', text: 'Season-ready fashion picks across everyday wear and standout looks.' },
  { icon: ShieldCheck, title: 'Trusted shopping feel', text: 'A clean front-end foundation prepared for secure checkout later.' },
  { icon: PackageCheck, title: 'Wide assortment', text: 'Apparel, footwear, and hot items organized for quick browsing.' },
]

const stats = [
  ['70', 'sample products'],
  ['4', 'core categories'],
  ['24/7', 'online browsing'],
  ['100%', 'UI-only preview'],
]

function About() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
          <div className="rounded-lg border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-card)]">
            <img src={logo} alt="Win Mart Fashion" className="mx-auto h-32 w-auto" />
          </div>
          <div>
            <p className="mb-3 text-sm font-extrabold uppercase text-[var(--color-secondary)]">
              About Win Mart
            </p>
            <h1 className="text-4xl font-black leading-tight text-[var(--color-ink)] sm:text-5xl">
              A modern fashion storefront shaped around value, variety, and confidence.
            </h1>
            <p className="mt-5 max-w-2xl leading-7 text-[var(--color-muted)]">
              Win Mart Fashion is presented as a large online shop experience with a
              polished retail layout, clear product discovery, and brand colors
              matched to the supplied logo.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <SectionHeader eyebrow="Mission" title="Fashion that fits real life" />
            <p className="leading-7 text-[var(--color-muted)]">
              The mission is to make everyday shopping feel direct, attractive, and
              easy to scan, with categories and product cards that can later connect
              to inventory, checkout, and customer accounts.
            </p>
          </div>
          <div className="rounded-lg bg-[var(--color-primary)] p-8 text-white">
            <Award size={34} className="mb-5 text-[var(--color-accent)]" />
            <h3 className="text-2xl font-extrabold">Designed for retail growth</h3>
            <p className="mt-3 leading-7 text-white/82">
              This front end keeps the commerce surface organized now while leaving
              room for future backend integration.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Why shop with us" title="A better browsing experience" />
          <div className="grid gap-5 md:grid-cols-3">
            {reasons.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-lg border border-[var(--color-line)] p-6 shadow-sm">
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-lg bg-[var(--color-soft-red)] text-[var(--color-secondary)]">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-extrabold text-[var(--color-ink)]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label} className="rounded-lg bg-white p-6 text-center shadow-sm">
              <p className="text-3xl font-black text-[var(--color-primary)]">{value}</p>
              <p className="mt-2 text-sm font-bold uppercase text-[var(--color-muted)]">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default About
