import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-[5%] text-center">
      <div className="max-w-[1200px] mx-auto">
        <p className="opacity-70">
          © {new Date().getFullYear()} FluentForward. Built on Execution Abundance
          principles.{' '}
          <Link href="/privacy" className="hover:text-fluent-red transition-colors">
            Privacy
          </Link>
          {' · '}
          <Link href="/terms" className="hover:text-fluent-red transition-colors">
            Terms
          </Link>
        </p>
      </div>
    </footer>
  )
}
