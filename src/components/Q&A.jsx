import { useState } from "react";

function Questions() {
  const data = [
    {
      id: 1,
      question: "WHY ANIME?",
      answer:
        "Anime offers powerful storytelling, unique art styles, deep emotions, and unforgettable characters.",
    },
    {
      id: 2,
      question: "IS ANIME FOR EVERYONE?",
      answer: "Yes, because there are genres for all ages and tastes.",
    },
    {
      id: 3,
      question: "WHAT MAKES ANIME SPECIAL?",
      answer:
        "Its creativity, world-building, and connection with the audience.",
    },
    {
      id: 4,
      question: "HOW LONG DOES IT TAKE TO GET INTO ANIME?",
      answer:
        "Usually just 1–2 episodes of the right show is enough to get you hooked.",
    },
    {
      id: 5,
      question: "WHAT GENRE IS BEST FOR BEGINNERS?",
      answer:
        "Action, romance, slice of life, and comedy are perfect for newcomers.",
    },
  ];

  const [openId, setOpenId] = useState(null);

  function toggle(id) {
    setOpenId(openId === id ? null : id);
  }

  return (
    <div className="flex flex-col items-center mx-50 mt-20 gap-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="w-full border border-white/50 rounded-2xl px-5 transition-all duration-300 bg-gray-900"
        >
          <div
            className="h-20 flex justify-between items-center cursor-pointer"
            onClick={() => toggle(item.id)}
          >
            <p className="text-white font-bold text-2xl">{item.question}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`size-6 text-white transition-all duration-300 ${
                openId === item.id ? "rotate-180" : ""
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              openId === item.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-white text-lg px-2 pb-5">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Questions;
