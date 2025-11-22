import TestImage from "../assets/scarlet.png";
function Cards() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-30">
        <div className="rounded-xl border border-white/50 h-auto flex flex-col bg-gray-950">
          <img src={TestImage} alt="" className="h-1/2 rounded-t-2xl" />
          <h1 className="text-white text-2xl font-bold text-center border-b py-5 w-full border-white/50">
            test
          </h1>
          <p className="text-white border-b border-white/50 p-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex tempore
            doloribus impedit doloremque optio dignissimos sit iusto, facilis
            soluta modi!
          </p>
          <button className="bg-red-500 text-white self-center p-1.5 rounded-full w-3/4 mt-3 cursor-pointer active:bg-red-700 hover:bg-red-600 transition-all duration-300 text-2xl">test</button>
        </div>
        <div className="rounded-xl border border-white/50 h-60 flex flex-col"></div>
        <div className="rounded-xl border border-white/50 h-60 flex flex-col"></div>
        <div className="rounded-xl border border-white/50 h-60 flex flex-col"></div>

        <div className="rounded-xl border border-white/50 h-60 flex flex-col"></div>
        <div className="rounded-xl border border-white/50 h-60 flex flex-col"></div>
        <div className="rounded-xl border border-white/50 h-60 flex flex-col"></div>
        <div className="rounded-xl border border-white/50 h-60 flex flex-col"></div>

        <div className="rounded-xl border border-white/50 h-60 flex flex-col"></div>
        <div className="rounded-xl border border-white/50 h-60 flex flex-col"></div>
        <div className="rounded-xl border border-white/50 h-60 flex flex-col"></div>
        <div className="rounded-xl border border-white/50 h-60 flex flex-col"></div>
      </div>
    </>
  );
}
export default Cards;
