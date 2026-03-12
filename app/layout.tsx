import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CDC Crafts - Magneți personalizați",
  description: "Magneți personalizați pentru suveniruri, evenimente și fotografii.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-50 text-neutral-900`}
      >
        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        <main>{children}</main>
        <footer className="border-t border-neutral-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-3 md:px-10 lg:px-12">
            <div>
              <div className="text-lg font-semibold text-neutral-900">CDC Crafts</div>
              <p className="mt-3 max-w-sm text-sm leading-7 text-neutral-600">
                Magneți personalizați pentru suveniruri, evenimente, fotografii speciale și colaborări.
              </p>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Navigare
              </div>
              <div className="mt-4 space-y-2 text-sm text-neutral-600">
                <div><a href="/" className="transition hover:text-neutral-900">Home</a></div>
                <div><a href="/produse" className="transition hover:text-neutral-900">Produse</a></div>
                <div><a href="/galerie" className="transition hover:text-neutral-900">Galerie</a></div>
                <div><a href="/contact" className="transition hover:text-neutral-900">Contact</a></div>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Contact
              </div>
              <div className="mt-4 space-y-2 text-sm text-neutral-600">
                <div>Instagram: @3d_prints_cdc</div>
                <div>Telefon: 0748 401 702</div>
                <div>Email: ciuscatalin@gmail.com</div>
                <div>Beclean, Bistrița-Năsăud</div>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-200 px-6 py-4 text-center text-sm text-neutral-500">
            © 2026 CDC Crafts. Toate drepturile rezervate.
          </div>
        </footer>
      </body>
    </html>
  );
}