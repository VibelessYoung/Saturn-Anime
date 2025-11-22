import Yuito from "../assets/yuito.png";

function HeroSection1() {
  return (
    <>
      <section className="mx-30 flex justify-center">
        <div className="w-full h-[650px] relative flex justify-between">
          <div className="absolute inset-0 bg-red-600"></div>
          <img
            src={Yuito}
            alt="logo"
            className="z-60 h-full object-contain absolute -left-85"
          />

          <div className="text-white z-40 absolute top-70 right-90 text-5xl font-black">
            WATCH ANIME !
          </div>
          <div className="text-white z-40 absolute top-90 right-20 text-2xl">
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
