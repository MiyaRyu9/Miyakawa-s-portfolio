"use client";
import Link from "next/link";

const Header = () => {
  return(
    <header className="fixed top-0 w-full bg-black/70 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-6xl mx auto px-4 py-3 flex justify-between items-center">
        <h1 className ="text-xl font-bold text-white">
          Miyakawa Portfolio
        </h1>
        <nav className="space-x-7">
          <Link href="/about" className="text-gray-200 hover:text-blue-400 transition">About</Link>
          <Link href="/projects" className="text-gray-200 hover:text-blue-400 transition">Projects</Link>
          <Link href="/skills" className="text-gray-200 hover:text-blue-400 transition">Skills</Link>
          <Link href="/contact" className="text-gray-200 hover:text-blue-400 transition">Contact</Link>
        </nav>

      </div>

    </header>
  )
}
export default Header;