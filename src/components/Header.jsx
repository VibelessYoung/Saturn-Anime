import Logo from "../assets/saturn.png";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // آیکون همبرگری

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="h-20 relative" />
      <div className="fixed z-50 w-full top-0">
        <header className="bg-white/10 backdrop-blur-xl m-5 px-5 rounded-xl transition-all duration-300 shadow-lg border border-white/50">
          <div className="h-20 flex justify-between items-center">
            <img src={Logo} alt="logo" className="w-20" />
            <h1
              className="font-black text-red-500 text-xl md:text-3xl self-center 
              drop-shadow-[0_0_5px_#ff2a2a] drop-shadow-[0_0_15px_#ff2a2a] drop-shadow-[0_0_30px_#ff2a2a]"
            >
              SATURN ANIME
            </h1>
            <nav className="hidden md:flex gap-5">
              <HashLink
                smooth
                to="/#home"
                className="text-white opacity-80 hover:text-red-500 transition"
              >
                Home
              </HashLink>
              <HashLink
                smooth
                to="/#anime"
                className="text-white opacity-80 hover:text-red-500 transition"
              >
                Anime
              </HashLink>
              <HashLink
                smooth
                to="/#qa"
                className="text-white opacity-80 hover:text-red-500 transition"
              >
                Q&A
              </HashLink>
              <HashLink
                smooth
                to="/#contact"
                className="text-white opacity-80 hover:text-red-500 transition"
              >
                Contact
              </HashLink>
            </nav>
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isOpen ? "max-h-60 mt-3" : "max-h-0"
            }`}
          >
            <nav className="flex flex-col gap-4 p-4">
              <HashLink
                smooth
                to="/#home"
                className="text-white opacity-80 hover:text-red-500 transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </HashLink>
              <HashLink
                smooth
                to="/#anime"
                className="text-white opacity-80 hover:text-red-500 transition"
                onClick={() => setIsOpen(false)}
              >
                Anime
              </HashLink>
              <HashLink
                smooth
                to="/#qa"
                className="text-white opacity-80 hover:text-red-500 transition"
                onClick={() => setIsOpen(false)}
              >
                Q&A
              </HashLink>
              <HashLink
                smooth
                to="/#contact"
                className="text-white opacity-80 hover:text-red-500 transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </HashLink>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
