import Yuito from "../assets/yuito.png";

function HeroSection1() {
  return (
    <section className="relative mx-4 sm:mx-10 md:mx-20 lg:mx-30">
      <div className="absolute inset-0 bg-red-600"></div>
      <div
        className="absolute inset-0 bg-gray-950"
        style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
      ></div>
      <div className="relative flex items-center justify-between h-[650px]">
        <img
          src={Yuito}
          className="hidden lg:block h-full object-contain -translate-x-40"
        />
        <div className="text-white flex flex-col gap-6 max-w-[500px] mr-4 sm:mr-10 md:mr-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black">
            WATCH ANIME !
          </h1>
          <p className="text-sm sm:text-base md:text-xl leading-relaxed">
            "Hey boy! Dive into this website, watch your favorite anime anytime
            <br />
            you want, explore countless genres, and discover new worlds, epic
            <br />
            stories, and unforgettable characters. Every click opens up a whole
            <br />
            new adventure — so jump in and enjoy the ride!"
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection1;
