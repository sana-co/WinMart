import { ArrowRight } from 'lucide-react'

function CategoryCard({ title, count, image, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative min-h-48 overflow-hidden rounded-lg text-left shadow-sm"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,24,41,0.78)] via-[rgba(18,24,41,0.24)] to-transparent" />
      <div className="relative flex min-h-48 flex-col justify-end p-5 text-white">
        <p className="text-xs font-bold uppercase text-white/80">{count} products</p>
        <div className="mt-1 flex items-center justify-between gap-4">
          <h3 className="text-xl font-extrabold">{title}</h3>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-white text-[var(--color-primary)] transition group-hover:bg-[var(--color-accent)]">
            <ArrowRight size={18} />
          </span>
        </div>
      </div>
    </button>
  )
}

export default CategoryCard
