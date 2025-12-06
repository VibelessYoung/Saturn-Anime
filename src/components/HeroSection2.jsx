import Kesani from "../assets/kesani.png";

function HeroSection2() {
  return (
    <section className="relative mx-4 sm:mx-10 md:mx-20 lg:mx-30">
      <div className="absolute inset-0 bg-red-600"></div>
      <div
        className="absolute inset-0 bg-gray-950"
        style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
      ></div>
      <div className="relative flex items-center justify-between h-[650px]">
        <img
          src={Kesani}
          alt="logo"
          className="hidden lg:block h-full object-contain"
        />
        <div className="text-white flex flex-col gap-6 max-w-[500px] mr-4 sm:mr-10 md:mr-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black">
            WATCH ANIME !
          </h1>
          <p className="text-sm sm:text-base md:text-xl leading-relaxed">
            "Hey girl! Ready to dive into magical worlds?
            <br />
            Watch your favorite anime anytime you want, explore endless genres,
            <br />
            meet unforgettable characters, and lose yourself in stories full of
            <br />
            adventure, emotion, and wonder. Every click is a new journey —
            <br />
            so jump in and enjoy the magic!"
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection2;
