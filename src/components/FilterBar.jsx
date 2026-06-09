import { Search, SlidersHorizontal } from 'lucide-react'
import { categories } from '../data/products'

function FilterBar({ searchTerm, setSearchTerm, category, setCategory }) {
  return (
    <div className="mb-8 grid gap-3 rounded-lg border border-[var(--color-line)] bg-white p-3 shadow-sm md:grid-cols-[1fr_auto]">
      <label className="flex h-12 items-center gap-3 rounded-lg bg-slate-50 px-4">
        <Search size={18} className="text-[var(--color-primary)]" />
        <input
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search products"
          className="w-full bg-transparent text-sm font-medium text-[var(--color-ink)] outline-none placeholder:text-[var(--color-muted)]"
        />
      </label>
      <label className="flex h-12 items-center gap-3 rounded-lg bg-slate-50 px-4">
        <SlidersHorizontal size={18} className="text-[var(--color-primary)]" />
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="min-w-44 bg-transparent text-sm font-bold text-[var(--color-ink)] outline-none"
        >
          <option value="All">All categories</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}

export default FilterBar
