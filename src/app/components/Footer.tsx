// components/Footer.tsx
import { FaGithub, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { SiQiita } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-20">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} My Portfolio</p>
        <div className="flex space-x-4 text-xl">
          <a href="https://qiita.com/あなたのユーザー名" target="_blank" rel="noopener noreferrer">
            <SiQiita />
          </a>
          <a href="https://github.com/MiyaRyu9" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/rrry.miy" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/あなたのユーザー名" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="mailto:miyakawa928@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
