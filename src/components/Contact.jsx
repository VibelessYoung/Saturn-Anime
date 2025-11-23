function Contact() {
  return (
    <div className="my-32 px-5">
      <h1
        className="font-black opacity-40 text-red-500 text-5xl md:text-6xl text-center mb-16
        drop-shadow-[0_0_12px_#ff0000]"
      >
        CONTACT
      </h1>

      <form className="flex flex-col items-center max-w-3xl mx-auto w-full">
        <div className="flex flex-col gap-10 w-full">
          {/* دو ورودی کنار هم — فقط در دسکتاپ */}
          <div className="flex flex-col md:flex-row gap-10 w-full">
            <input
              type="text"
              placeholder="Your name..."
              required
              className="border border-red-500 bg-black/20 backdrop-blur-lg rounded-xl h-12 w-full
              placeholder:text-white/40 px-5 text-white transition-all duration-300
              focus:ring-2 focus:ring-red-500 focus:scale-[1.02]
              drop-shadow-[0_0_10px_#ff0000] hover:drop-shadow-[0_0_18px_#ff0000]"
            />

            <input
              type="email"
              placeholder="example@example.com"
              required
              className="border border-red-500 bg-black/20 backdrop-blur-lg rounded-xl h-12 w-full
              placeholder:text-white/40 px-5 text-white transition-all duration-300
              focus:ring-2 focus:ring-red-500 focus:scale-[1.02]
              drop-shadow-[0_0_10px_#ff0000] hover:drop-shadow-[0_0_18px_#ff0000]"
            />
          </div>

          <textarea
            placeholder="Enter your message..."
            required
            className="border border-red-500 bg-black/20 backdrop-blur-lg rounded-xl w-full 
            placeholder:text-white/40 px-5 pt-5 text-white h-40 transition-all duration-300
            focus:ring-2 focus:ring-red-500 focus:scale-[1.02]
            drop-shadow-[0_0_10px_#ff0000] hover:drop-shadow-[0_0_18px_#ff0000]"
          ></textarea>
        </div>

        <button
          className="bg-red-600 hover:bg-red-700 cursor-pointer h-12 flex justify-center items-center 
          mt-10 rounded-full w-40 text-white font-bold tracking-wide shadow-lg
          transition-all duration-300 hover:scale-105 active:scale-95"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
