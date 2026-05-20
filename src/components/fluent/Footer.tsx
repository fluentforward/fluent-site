import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-[5%]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="opacity-70 text-sm text-center md:text-left">
          © {new Date().getFullYear()} FluentForward Ltd. Built on Execution
          Abundance principles.
        </p>
        <ul className="flex gap-6 list-none text-sm">
          <li>
            <Link
              href="/privacy"
              className="text-neutral-400 hover:text-fluent-red transition-colors no-underline"
            >
              Privacy
            </Link>
          </li>
          <li>
            <Link
              href="/terms"
              className="text-neutral-400 hover:text-fluent-red transition-colors no-underline"
            >
              Terms
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-neutral-400 hover:text-fluent-red transition-colors no-underline"
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
