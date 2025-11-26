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
      <h1 className="text-3xl font-bold mb-4">{anime.title}</h1>
      <img src={anime.images.jpg.large_image_url} className="rounded-xl mb-4" />
      <p className="opacity-80">{anime.synopsis}</p>
    </div>
  );
}

export default AnimeDetails;
