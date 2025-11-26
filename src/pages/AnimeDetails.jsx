import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function AnimeDetails() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    async function fetchOne() {
      const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
      const data = await res.json();
      setAnime(data.data);
    }
    fetchOne();
  }, [id]);

  if (!anime) return <h1 className="text-center text-white">Loading...</h1>;

  return (
    <div className="p-10 text-white">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 border-b border-white/20 pb-6">
        <img
          src={anime.images.jpg.large_image_url}
          className="rounded-xl w-48 h-64 object-cover shadow-lg"
        />

        <div>
          <h1 className="text-2xl font-bold mb-4 text-white">
            {anime.title} ({anime.title_japanese})
          </h1>
          <p className="opacity-90">{anime.synopsis}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="space-y-3 bg-white/5 p-5 rounded-xl backdrop-blur-lg">
          <h2 className="text-xl font-bold mb-3 text-red-500">Information</h2>
          <p>
            <span className="font-bold">Type:</span> {anime.type}
          </p>
          <p>
            <span className="font-bold">Status:</span> {anime.status}
          </p>
          <p>
            <span className="font-bold">Episodes:</span>{" "}
            {anime.episodes || "Unknown"}
          </p>
          <p>
            <span className="font-bold">Duration:</span> {anime.duration}
          </p>
          <p>
            <span className="font-bold">Rating:</span> {anime.rating || "—"}
          </p>
          <p>
            <span className="font-bold">Source:</span> {anime.source}
          </p>
          <p>
            <span className="font-bold">Broadcast:</span>{" "}
            {anime.broadcast?.string || "—"}
          </p>
          <p>
            <span className="font-bold">Premiered:</span>{" "}
            {anime.season ? `${anime.season} ${anime.year}` : "—"}
          </p>
        </div>

        <div className="space-y-3 bg-white/5 p-5 rounded-xl backdrop-blur-lg">
          <h2 className="text-xl font-bold mb-3 text-red-500">Statistics</h2>
          <p>
            <div className="flex gap-1">
              <span className="font-bold">Score:</span> {anime.score || "—"}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="size-5 text-yellow-400"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </p>
          <p>
            <span className="font-bold">Rank:</span> #{anime.rank || "—"}
          </p>
          <p>
            <span className="font-bold">Popularity:</span> #{anime.popularity}
          </p>
          <p>
            <span className="font-bold">Favorites:</span> {anime.favorites}
          </p>

          <div>
            <span className="font-bold">Genres:</span>
            <div className="flex flex-wrap gap-2 mt-1">
              {anime.genres.map((g) => (
                <span
                  key={g.mal_id}
                  className="px-2 py-1 bg-white/10 rounded-lg"
                >
                  {g.name}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="font-bold">Studios:</span>
            <div className="flex flex-wrap gap-2 mt-1">
              {anime.studios.map((s) => (
                <span
                  key={s.mal_id}
                  className="px-2 py-1 bg-white/10 rounded-lg"
                >
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {anime.trailer?.embed_url && (
        <div className="mt-10 border-t border-white/20">
          <h2 className="text-2xl font-bold my-5 text-red-500 text-center">
            Trailer
          </h2>
          <iframe
            className="w-full h-64 md:h-96 rounded-xl"
            src={anime.trailer.embed_url}
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default AnimeDetails;
