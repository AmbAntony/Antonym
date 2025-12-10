import Link from "next/link";
import { ReactNode, useState } from "react";
import { FaTwitter, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center p-4 bg-white border-b fixed top-0 w-full z-50 h-16">
        <Link href="/" className="hover:opacity-80 transition">
          <h1 className="text-2xl font-bold tracking-tight leading-none">
            AN..<span className="text-blue-300">TONY</span>
          </h1>
        </Link>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-2xl text-gray-700">
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-screen bg-white border-r z-50 flex flex-col justify-between p-6 transition-transform duration-300 ease-in-out w-64
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:h-screen md:overflow-y-auto
      `}>
        <div>
          {/* Logo (Desktop only) */}
          <Link href="/" className="hover:opacity-80 transition hidden md:block">
            <h1 className="mt-9 text-4xl font-bold tracking-tight leading-none">
              AN<br />..<span className="text-blue-300">TONY</span>
            </h1>
          </Link>

          {/* Navigation */}
          <nav className="mt-10 md:mt-36 space-y-6 text-lg">
            <Link
              href="/"
              className="block text-gray-700 hover:text-black transition"
              onClick={(e) => {
                if (typeof window !== 'undefined' && window.location.pathname === '/') {
                  e.preventDefault();
                }
                setIsSidebarOpen(false);
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
                setIsSidebarOpen(false);
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
                setIsSidebarOpen(false);
              }}
            >
              Contacts
            </Link>
          </nav>
        </div>
        {/* Social icons placeholder */}
        <div className="flex gap-4 text-xl">
          <Link href="https://x.com/itsmunene_" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition">
            <FaTwitter />
          </Link>
          <Link href="https://linkedin.com/in/antony-dev-munene" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition">
            <FaLinkedin />
          </Link>
        </div>
      </aside>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="flex-1 mt-16 md:mt-0 md:ml-0 overflow-hidden">
        <div className="w-full min-h-screen bg-cover bg-center text-white relative" style={{ backgroundImage: "url('/background.jpg')" }}>
          <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
          <div className="relative z-10 p-4 md:p-10">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}