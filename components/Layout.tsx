import Link from "next/link";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 border-r fixed left-0 top-0 h-full bg-white flex flex-col justify-between p-6">
          <div>
            {/* Logo */}
            <h1 className="mt-9 text-4xl font-bold tracking-tight leading-none">
              AN<br />..TONY
            </h1>

            {/* Navigation */}
            <nav className="mt-36 space-y-6 text-lg">
              <Link
                href="/"
                className="block text-gray-700 hover:text-black transition"
                onClick={(e) => {
                  if (typeof window !== 'undefined' && window.location.pathname === '/') {
                    e.preventDefault();
                  }
                }}
              >
                Home
              </Link>

              <Link
                href="/projects"
                className="block text-gray-700 hover:text-black transition"
                onClick={(e) => {
                  if (typeof window !== 'undefined' && window.location.pathname === '/projects') {
                    e.preventDefault();
                  }
                }}
              >
                My Projects
              </Link>

              <Link
                href="/contacts"
                className="block text-gray-700 hover:text-black transition"
                onClick={(e) => {
                  if (typeof window !== 'undefined' && window.location.pathname === '/contacts') {
                    e.preventDefault();
                  }
                }}
              >
                Contacts
              </Link>
            </nav>
          </div>
          {/* Social icons placeholder */}
          <div className="flex gap-4 text-xl">
            <Link href="#">I</Link>
            <Link href="#">X</Link>
            <Link href="#">@</Link>
          </div>
        </aside>

        {/* Main content */}
        <main
          className="ml-64 w-full min-h-screen bg-cover bg-center text-white relative"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50 bg-opacity-70" aria-hidden="true" />

          <div className="relative z-10 p-10">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}