import { Heart, Star } from 'lucide-react'

function ProductCard({ product, isSaved, onToggleWishlist }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-[var(--color-line)] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-lg bg-white/95 px-3 py-1 text-xs font-bold text-[var(--color-primary)] shadow-sm">
          {product.category}
        </span>
      </div>
      <div className="space-y-4 p-4">
        <div>
          <h3 className="line-clamp-2 min-h-11 text-base font-bold leading-snug text-[var(--color-ink)]">
            {product.name}
          </h3>
          <div className="mt-2 flex items-center justify-between gap-3">
            <p className="text-lg font-extrabold text-[var(--color-secondary)]">
              ${product.price.toFixed(2)}
            </p>
            <div className="flex items-center gap-1 text-sm font-semibold text-[var(--color-muted)]">
              <Star size={16} className="fill-[var(--color-accent)] text-[var(--color-accent)]" />
              {product.rating}
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={() => onToggleWishlist(product)}
          className={`flex h-11 w-full items-center justify-center gap-2 rounded-lg px-4 text-sm font-bold transition ${
            isSaved
              ? 'bg-[var(--color-soft-red)] text-[var(--color-secondary)] hover:bg-red-100'
              : 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-strong)]'
          }`}
        >
          <Heart size={18} className={isSaved ? 'fill-current' : ''} />
          {isSaved ? 'Saved' : 'Add to Wishlist'}
        </button>
      </div>
    </article>
  )
}

export default ProductCard
