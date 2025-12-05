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
          className={`px-5 py-2 rounded-full font-semibold text-sm transition-all border-2 ${
            selectedCategory === category
              ? 'bg-indigo-600 text-white border-indigo-600'
              : 'bg-slate-50 text-slate-700 border-transparent hover:bg-slate-100'
          }`}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

