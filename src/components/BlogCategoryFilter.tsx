'use client'

type BlogCategoryFilterProps = {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export function BlogCategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: BlogCategoryFilterProps) {
  return (
    <div className="flex justify-center gap-4 flex-wrap">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-5 py-2 rounded font-semibold text-sm transition-all border-2 ${
            selectedCategory === category
              ? 'bg-fluent-red text-white border-fluent-red'
              : 'bg-warm-gray text-charcoal border-transparent hover:bg-neutral-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

