import { Send, Star } from 'lucide-react'
import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'

function Feedback() {
  const [rating, setRating] = useState(5)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-20">
      <div>
        <SectionHeader eyebrow="Feedback" title="Tell us about your shopping experience" />
        <p className="leading-7 text-[var(--color-muted)]">
          This styled form is ready for future submission logic. For now it gives
          immediate UI feedback without storing or sending any data.
        </p>
        <div className="mt-8 rounded-lg bg-[var(--color-primary)] p-6 text-white">
          <p className="text-sm font-bold uppercase text-[var(--color-accent)]">
            Win Mart Promise
          </p>
          <p className="mt-3 text-2xl font-black leading-tight">
            Clean browsing, thoughtful categories, and a fashion-first interface.
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-lg border border-[var(--color-line)] bg-white p-5 shadow-[var(--shadow-card)] sm:p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-bold text-[var(--color-ink)]">Name</span>
            <input
              required
              type="text"
              placeholder="Your name"
              className="h-12 w-full rounded-lg border border-[var(--color-line)] px-4 outline-none transition focus:border-[var(--color-primary)]"
            />
          </label>
          <label className="space-y-2">
            <span className="text-sm font-bold text-[var(--color-ink)]">Email</span>
            <input
              required
              type="email"
              placeholder="you@example.com"
              className="h-12 w-full rounded-lg border border-[var(--color-line)] px-4 outline-none transition focus:border-[var(--color-primary)]"
            />
          </label>
        </div>

        <div className="mt-5 space-y-2">
          <span className="text-sm font-bold text-[var(--color-ink)]">Rating</span>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setRating(value)}
                className={`flex h-11 w-11 items-center justify-center rounded-lg border transition ${
                  value <= rating
                    ? 'border-[var(--color-accent)] bg-[var(--color-accent)] text-white'
                    : 'border-[var(--color-line)] bg-white text-[var(--color-muted)] hover:border-[var(--color-primary)]'
                }`}
                aria-label={`${value} star rating`}
              >
                <Star size={18} className={value <= rating ? 'fill-current' : ''} />
              </button>
            ))}
          </div>
        </div>

        <label className="mt-5 block space-y-2">
          <span className="text-sm font-bold text-[var(--color-ink)]">Message</span>
          <textarea
            required
            rows="6"
            placeholder="Share your thoughts"
            className="w-full resize-none rounded-lg border border-[var(--color-line)] px-4 py-3 outline-none transition focus:border-[var(--color-primary)]"
          />
        </label>

        <button
          type="submit"
          className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-secondary)] px-6 text-sm font-extrabold text-white transition hover:bg-[var(--color-secondary-strong)] sm:w-auto"
        >
          <Send size={18} />
          Submit Feedback
        </button>

        {submitted && (
          <div className="mt-5 rounded-lg bg-[var(--color-soft-blue)] p-4 text-sm font-bold text-[var(--color-primary)]">
            Thanks for the feedback. This preview keeps it on the page only.
          </div>
        )}
      </form>
    </section>
  )
}

export default Feedback
