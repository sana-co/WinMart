import { useMemo, useState } from 'react'
import CategoryCard from '../components/CategoryCard'
import FilterBar from '../components/FilterBar'
import ProductGrid from '../components/ProductGrid'
import SectionHeader from '../components/SectionHeader'
import { categories, products } from '../data/products'
import logo from '../assets/winmart-logo.svg'

const categoryImages = {
  "Men's Wear":
    'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=900&q=80',
  "Women's Wear":
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
  Shoes:
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
  'Hot Items':
    'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
}

function Home({ wishlistIds, onToggleWishlist }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('All')

  const filteredProducts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase()
    return products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesSearch =
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
      return matchesCategory && matchesSearch
    })
  }, [category, searchTerm])

  const hotItems = products.filter((product) => product.category === 'Hot Items').slice(0, 8)

  return (
    <>
      <section className="brand-gradient">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div className="text-white">
            <p className="mb-4 inline-flex rounded-lg bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur">
              New season fashion, curated daily
            </p>
            <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Fashion Your Life with Win Mart essentials.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
              Explore a polished collection of apparel, shoes, and fast-moving
              trend picks inspired by the Win Mart blue, red, and gold palette.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#products"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 text-sm font-extrabold text-[var(--color-primary)] transition hover:bg-[var(--color-accent)]"
              >
                Shop Collection
              </a>
              <a
                href="#hot-items"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-white/40 px-6 text-sm font-extrabold text-white transition hover:bg-white/10"
              >
                View Hot Items
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-lg bg-white shadow-[var(--shadow-card)]">
              <img
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1100&q=80"
                alt="Fashion retail display"
                className="h-80 w-full object-cover sm:h-96"
              />
              <div className="grid gap-4 p-5 sm:grid-cols-[auto_1fr] sm:items-center">
                <img src={logo} alt="Win Mart Fashion" className="h-16 w-auto" />
                <div>
                  <p className="text-sm font-bold text-[var(--color-secondary)]">
                    Branded retail preview
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">
                    70 sample products ready for a future commerce backend.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Browse" title="Shop by category">
          Select a category to filter the product catalog.
        </SectionHeader>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((item) => (
            <CategoryCard
              key={item}
              title={item}
              image={categoryImages[item]}
              count={products.filter((product) => product.category === item).length}
              onClick={() => {
                setCategory(item)
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
              }}
            />
          ))}
        </div>
      </section>

      <section id="hot-items" className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Trending" title="Hot Items">
            Fast-moving style picks highlighted for the season.
          </SectionHeader>
          <ProductGrid
            products={hotItems}
            wishlistIds={wishlistIds}
            onToggleWishlist={onToggleWishlist}
          />
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Catalog" title="Explore all products">
          Showing {filteredProducts.length} of {products.length} products.
        </SectionHeader>
        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          category={category}
          setCategory={setCategory}
        />
        <ProductGrid
          products={filteredProducts}
          wishlistIds={wishlistIds}
          onToggleWishlist={onToggleWishlist}
        />
      </section>
    </>
  )
}

export default Home
