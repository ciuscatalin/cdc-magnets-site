"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path
      ? "text-neutral-900 font-semibold"
      : "text-neutral-600 hover:text-neutral-900";

  return (
    <header className="border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-12">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-neutral-900 hover:text-neutral-600 transition"
        >
          CDC Crafts
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <a href="/" className={linkClass("/")}>
            Home
          </a>

          <a href="/produse" className={linkClass("/produse")}>
            Produse
          </a>

          <a href="/galerie" className={linkClass("/galerie")}>
            Galerie
          </a>

          <a href="/contact" className={linkClass("/contact")}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}