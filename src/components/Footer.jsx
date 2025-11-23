function Footer() {
  return (
    <footer className="mt-32 bg-gray-950 backdrop-blur-xl border-t border-white/10 py-14 px-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-14 text-white">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-black text-red-500">SATURN ANIME</h1>
          <p className="opacity-60 max-w-xs leading-7">
            Dive into the world of anime — reviews, updates, characters, and
            everything you love about the anime universe.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-red-400">Navigation</h2>

          <ul className="flex flex-col gap-2 opacity-70">
            <li className="hover:text-red-400 hover:opacity-100 transition-all cursor-pointer">
              Home
            </li>
            <li className="hover:text-red-400 hover:opacity-100 transition-all cursor-pointer">
              Anime List
            </li>
            <li className="hover:text-red-400 hover:opacity-100 transition-all cursor-pointer">
              Characters
            </li>
            <li className="hover:text-red-400 hover:opacity-100 transition-all cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-red-400">Follow Us</h2>
          <div className="flex gap-5 text-xl">
            <div className="flex gap-3">
              <a className="hover:text-red-400 drop-shadow-[0_0_10px_#ff0000] transition-all cursor-pointer">
                Instagram
              </a>
            </div>
            <a className="hover:text-red-400 drop-shadow-[0_0_10px_#ff0000] transition-all cursor-pointer">
              YouTube
            </a>
            <a className="hover:text-red-400 drop-shadow-[0_0_10px_#ff0000] transition-all cursor-pointer">
              Discord
            </a>
          </div>
        </div>
      </div>
      <div className="mt-14 pt-6 border-t border-white/10 text-center text-white/50">
        © 2025 Saturn Anime — All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
