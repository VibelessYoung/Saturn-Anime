import Yuito from "../assets/yuito.png";

function HeroSection1() {
  return (
    <>
      <section className="mx-4 sm:mx-10 md:mx-20 lg:mx-30 flex justify-center items-center">
        <div className="w-full h-[650px] relative flex flex-col justify-center items-center">
          <div className="absolute inset-0 bg-red-600"></div>
          <img
            src={Yuito}
            alt="logo"
            className="z-60 h-full object-contain absolute md:-left-85 sm:-left-60 sm:top-40 md:top-0 top-40 -left-40"
          />

          <div className="text-white z-40 absolute top-20 right-5 sm:top-28 sm:right-10 md:top-40 md:right-20 lg:top-70 lg:right-90 text-3xl sm:text-4xl md:text-5xl font-black md:z-100">
            WATCH ANIME !
          </div>
          <div className="text-white z-40 absolute top-40 right-5 sm:top-56 sm:right-10 md:top-72 md:right-20 lg:top-90 lg:right-20 text-xl sm:text-xl md:text-xl lg:text-2xl text-center md:z-100">
            "Hey boy! Dive into this website, watch your favorite anime anytime
            <br />
            you want, explore countless genres, and discover new worlds, epic
            <br />
            stories, and unforgettable characters. Every click opens up a whole
            <br />
            new adventure — so jump in and enjoy the ride!"
          </div>
          <div
            className="absolute inset-0 bg-gray-950"
            style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
          ></div>
        </div>
      </section>
    </>
  );
}

export default HeroSection1;
