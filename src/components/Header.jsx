import Logo from "../assets/saturn.png";
import { HashLink } from "react-router-hash-link";

function Header() {
  return (
    <>
      <div className="h-20 relative" />
      <div className="fixed z-50 w-full top-0">
        <header className="bg-white/10 backdrop-blur-xl m-5 px-5 rounded-xl transition-all duration-300 shadow-lg border border-white/50 h-20 flex justify-between items-center">
          <img src={Logo} alt="logo" className="w-20" />
          <h1
            className="font-black text-red-500 text-3xl self-center 
            drop-shadow-[0_0_5px_#ff2a2a] drop-shadow-[0_0_15px_#ff2a2a] drop-shadow-[0_0_30px_#ff2a2a]"
          >
            SATURN ANIME
          </h1>
          <nav className="flex gap-5">
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
        </header>
      </div>
    </>
  );
}

export default Header;
