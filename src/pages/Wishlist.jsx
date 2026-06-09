import { Heart, ShoppingBag, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductGrid from '../components/ProductGrid'
import SectionHeader from '../components/SectionHeader'

function Wishlist({ items, wishlistIds, onToggleWishlist, onRemove }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeader eyebrow="Wishlist" title="Saved items">
        {items.length} item{items.length === 1 ? '' : 's'} saved locally in this UI.
      </SectionHeader>

      {items.length === 0 ? (
        <div className="grid place-items-center rounded-lg border border-dashed border-[var(--color-line)] bg-white px-4 py-16 text-center">
          <div className="grid h-14 w-14 place-items-center rounded-lg bg-[var(--color-soft-red)] text-[var(--color-secondary)]">
            <Heart size={26} />
          </div>
          <h2 className="mt-5 text-2xl font-black text-[var(--color-ink)]">
            Your wishlist is empty
          </h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-[var(--color-muted)]">
            Add products from the catalog and they will appear here while you browse.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[var(--color-primary)] px-6 text-sm font-extrabold text-white transition hover:bg-[var(--color-primary-strong)]"
          >
            <ShoppingBag size={18} />
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="mb-8 overflow-hidden rounded-lg border border-[var(--color-line)] bg-white shadow-sm">
            {items.map((item) => (
              <div
                key={item.id}
                className="grid gap-4 border-b border-[var(--color-line)] p-4 last:border-b-0 sm:grid-cols-[96px_1fr_auto] sm:items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 rounded-lg object-cover"
                />
                <div>
                  <p className="text-xs font-bold uppercase text-[var(--color-secondary)]">
                    {item.category}
                  </p>
                  <h3 className="mt-1 font-extrabold text-[var(--color-ink)]">{item.name}</h3>
                  <p className="mt-1 font-bold text-[var(--color-primary)]">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onRemove(item.id)}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[var(--color-soft-red)] px-4 text-sm font-bold text-[var(--color-secondary)] transition hover:bg-red-100"
                >
                  <Trash2 size={17} />
                  Remove
                </button>
              </div>
            ))}
          </div>

          <SectionHeader title="Wishlist product cards" />
          <ProductGrid
            products={items}
            wishlistIds={wishlistIds}
            onToggleWishlist={onToggleWishlist}
          />
        </>
      )}
    </section>
  )
}

export default Wishlist
