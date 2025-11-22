import Logo from "../assets/saturn.png";

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
            <a href="#" className="text-white text-base font-medium opacity-80 hover:text-red-500 transition-all duration-300">Home</a>
            <a href="#" className="text-white text-base font-medium opacity-80 hover:text-red-500 transition-all duration-300">Anime</a>
            <a href="#" className="text-white text-base font-medium opacity-80 hover:text-red-500 transition-all duration-300">Q&A</a>
            <a href="#" className="text-white text-base font-medium opacity-80 hover:text-red-500 transition-all duration-300">Contact</a>
          </nav>
        </header>
      </div>
    </>
  );
}


export default Header;
