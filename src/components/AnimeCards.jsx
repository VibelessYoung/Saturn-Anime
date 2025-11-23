import { useState, useEffect } from "react";
function Cards() {
  const [anime, setAnime] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchAnime() {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.jikan.moe/v4/anime?page=${page}&limit=8`
      );
      const data = await res.json();
      setAnime((prev) => [...prev, ...data.data]);
    } catch (err) {
      setError("something wrong !");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAnime();
  }, [page]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-10 mt-30">
        {anime.map((item) => (
          <div
            key={item.mal_id}
            className="rounded-xl border border-white/50 h-auto flex flex-col bg-gray-950"
          >
            <img
              src={item.images.jpg.image_url}
              alt={item.title}
              className="h-80 w-full object-cover rounded-t-2xl"
            />

            <h1 className="text-white text-xl font-bold text-center border-b py-5 w-full border-white/50">
              {item.title}
            </h1>

            <p className="text-white border-b border-white/50 px-2 line-clamp-4 opacity-60">
              {item.synopsis?.slice(0, 250) || "No description"}
            </p>

            <button className="bg-red-500 text-white self-center p-1.5 rounded-full w-3/4 mt-3 mb-3 cursor-pointer active:bg-red-700 hover:bg-red-600 transition-all duration-300 text-xl">
              More Info
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center my-10">
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="bg-purple-600 text-white px-8 py-3 rounded-xl text-xl hover:bg-purple-700 active:bg-purple-800 transition-all duration-300"
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      </div>

      {error && <p className="text-center text-red-500">{error}</p>}
    </>
  );
}
export default Cards;
