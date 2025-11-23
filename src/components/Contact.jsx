function Contact() {
  return (
    <div className="my-50">
      <h1 className="font-black opacity-40 text-red-500 text-6xl text-center mb-20 drop-shadow-[0_0_8px_#ff0000] drop-shadow-[0_0_20px_#ff0000]">
        CONTACT
      </h1>
      <form action="" className="flex flex-col items-center">
        <div className="flex flex-col gap-20">
          <div className="flex gap-20">
            <input
              type="text"
              name=""
              id=""
              placeholder="Your name. . ."
              required
              className="border border-red-500 rounded h-10 w-[450px] placeholder:text-white/40 px-5 text-white drop-shadow-[0_0_8px_#ff0000] drop-shadow-[0_0_20px_#ff0000] transition-all duration-300"
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="example@example.com"
              required
              className="border border-red-500 rounded h-10 w-[450px] placeholder:text-white/40 px-5 text-white drop-shadow-[0_0_8px_#ff0000] drop-shadow-[0_0_20px_#ff0000] transition-all duration-300"
            />
          </div>
          <textarea
            name=""
            id=""
            placeholder="Enter your message. . ."
            required
            className="border border-red-500 rounded w-full placeholder:text-white/40 px-5 pt-5 text-white self-center h-40 drop-shadow-[0_0_8px_#ff0000] drop-shadow-[0_0_20px_#ff0000] transition-all duration-300"
          ></textarea>
        </div>
      </form>
    </div>
  );
}
export default Contact;
