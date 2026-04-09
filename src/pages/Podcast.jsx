import { useEffect, useState } from "react";
import ShowPodcasts from "../sections/podcastSection/ShowPodcasts";

export const podcastEpisodes = [
  {
    id: 1,
    title: "The Future of Creativity",
    desc: "A deep conversation on innovation, imagination, and human expression.",
    videoId: "3fumBcKC6RE",
    thumbnail: "https://img.youtube.com/vi/3fumBcKC6RE/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "Designing for Tomorrow",
    desc: "Exploring modern UI/UX thinking and product design principles.",
    videoId: "LXb3EKWsInQ",
    thumbnail: "https://img.youtube.com/vi/LXb3EKWsInQ/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "Voices of Innovation",
    desc: "How creators and engineers are shaping the future of tech.",
    videoId: "ScMzIvxBSi4",
    thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/maxresdefault.jpg",
  },
  {
    id: 4,
    title: "Breaking Boundaries",
    desc: "Stories of resilience and growth.",
    videoId: "dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
  {
    id: 5,
    title: "The Art of Storytelling",
    desc: "How storytelling shapes human connection.",
    videoId: "hY7m5jjJ9mM",
    thumbnail: "https://img.youtube.com/vi/hY7m5jjJ9mM/maxresdefault.jpg",
  },
];

export default function Podcast() {
  const [activeEpisode, setActiveEpisode] = useState(podcastEpisodes[0]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <section className="min-h-screen bg-linear-to-br from-black via-zinc-900 to-black text-white px-6 py-16 flex justify-center">

      <div className="w-full max-w-6xl space-y-14">

        {/* HERO */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            🎙️ Podcast Studio
          </h1>

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Dive into powerful conversations, elite insights, and stories that shape leadership.
          </p>
          <p className="text-zinc-300 text-sm md:text-base max-w-3xl mx-auto leading-relaxed border-l border-white/10 pl-4"> We’re thrilled to bring you the insider podcast — <span className="text-white font-medium">OLYMPIANS DIARY</span>. This series celebrates extraordinary women in sports who embody excellence, self-improvement, and wellbeing. </p>
        </div>

        {/* FEATURED PLAYER */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">
          <iframe
            className="w-full h-125"
            src={`https://www.youtube.com/embed/${activeEpisode.videoId}`}
            title={activeEpisode.title}
            allowFullScreen
          />

          {/* OVERLAY */}
          <div className="absolute bottom-0 w-full bg-linear-to-t from-black/95 via-black/60 to-transparent p-7">

            <span className="text-xs tracking-widest uppercase text-blue-400 font-medium">
              Featured Episode
            </span>

            <h2 className="text-2xl md:text-4xl font-bold mt-2">
              {activeEpisode.title}
            </h2>

            <p className="text-zinc-300 text-sm md:text-base mt-2 max-w-xl">
              {activeEpisode.desc}
            </p>

          </div>

        </div>

        {/* EPISODES */}
        <div className="grid gap-5 sm:grid-cols-2">
          <ShowPodcasts podcastEpisodes={podcastEpisodes} setActiveEpisode={setActiveEpisode} />
        </div>
      </div>
    </section>
  );
}