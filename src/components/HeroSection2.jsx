import Kesani from "../assets/kesani.png";

function HeroSection2() {
  return (
    <>
      <section className="mx-30 flex justify-center items-center">
        <div className="w-full h-[650px] relative flex justify-between">
          <div className="absolute inset-0 bg-red-600"></div>
          <img
            src={Kesani}
            alt="logo"
            className="z-60 h-full object-contain absolute"
          />

          <div className="text-white z-40 absolute top-70 right-90 text-5xl font-black">
            WATCH ANIME !
          </div>
          <div className="text-white z-40 absolute top-90 right-20 text-2xl">
            "Hey girl! Ready to dive into magical worlds?
            <br />
            Watch your favorite anime anytime you want, explore endless genres,
            <br />
            meet unforgettable characters, and lose yourself in stories full of
            <br />
            adventure, emotion, and wonder. Every click is a new journey —
            <br />
            so jump in and enjoy the magic!"
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

export default HeroSection2;
