"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaGithub, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import { SiQiita } from "react-icons/si";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full bg-black/70 backdrop-blur-md z-50 shadow-md px-4 py-3">
        <div className="flex items-center w-full">
          <div className="space-x-3 mr-auto">
            <Image src="/images/favicon.svg" alt="" width={35} height={35} />
            
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex space-x-7 absolute left-1/2 transform -translate-x-1/2">
            <Link href="#about" className="text-gray-200 hover:text-blue-400 transition">About</Link>
            <Link href="#projects" className="text-gray-200 hover:text-blue-400 transition">Projects</Link>
            <Link href="#skills" className="text-gray-200 hover:text-blue-400 transition">Skills</Link>
            <Link href="#contact" className="text-gray-200 hover:text-blue-400 transition">Contact</Link>
          </nav>

          {/* SNSアイコン */}
          <div className="hidden md:flex space-x-4 text-xl text-white ml-auto">
            <a href="https://qiita.com/あなたのユーザー名" target="_blank" rel="noopener noreferrer"><SiQiita /></a>
            <a href="https://github.com/MiyaRyu9" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.instagram.com/rrry.miy" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com/あなたのユーザー名" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="mailto:miyakawa928@gmail.com"><FaEnvelope /></a>
          </div>

          {/* モバイル用ハンバーガーメニュー */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white ml-auto">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* スライドインメニュー */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-2/3 h-full bg-black text-white z-40 shadow-lg p-8 flex flex-col justify-center space-y-6"
          >
            <Link href="#about" onClick={() => setIsOpen(false)} className="text-lg hover:text-blue-400">About</Link>
            <Link href="#projects" onClick={() => setIsOpen(false)} className="text-lg hover:text-blue-400">Projects</Link>
            <Link href="#skills" onClick={() => setIsOpen(false)} className="text-lg hover:text-blue-400">Skills</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="text-lg hover:text-blue-400">Contact</Link>

            <div className="flex space-x-4 text-xl mt-6">
              <a href="https://qiita.com/あなたのユーザー名" target="_blank" rel="noopener noreferrer"><SiQiita /></a>
              <a href="https://github.com/MiyaRyu9" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.instagram.com/rrry.miy" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://twitter.com/あなたのユーザー名" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="mailto:miyakawa928@gmail.com"><FaEnvelope /></a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
