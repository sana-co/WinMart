import ProductCard from './ProductCard'

function ProductGrid({ products, wishlistIds, onToggleWishlist }) {
  if (products.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-[var(--color-line)] bg-white p-10 text-center">
        <p className="font-bold text-[var(--color-primary)]">No matching products</p>
        <p className="mt-2 text-sm text-[var(--color-muted)]">
          Try another search term or category.
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isSaved={wishlistIds.includes(product.id)}
          onToggleWishlist={onToggleWishlist}
        />
      ))}
    </div>
  )
}

export default ProductGrid
