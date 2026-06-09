function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        {eyebrow && (
          <p className="mb-2 text-sm font-extrabold uppercase text-[var(--color-secondary)]">
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl font-extrabold text-[var(--color-ink)] sm:text-3xl">
          {title}
        </h2>
      </div>
      {children && <div className="text-sm text-[var(--color-muted)]">{children}</div>}
    </div>
  )
}

export default SectionHeader
