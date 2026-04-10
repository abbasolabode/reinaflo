import { useRef, useState } from "react";
import { FaPlay, FaPause, FaHeadphones, FaMicrophone } from "react-icons/fa";

export const podcasts = [
  {
    id: 1,
    title: "Creative Minds Podcast",
    desc: "A conversation on creativity, discipline, and innovation.",
    duration: "2:34",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: 2,
    title: "Leadership Talks",
    desc: "Insights on leadership and decision-making under pressure.",
    duration: "3:12",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    id: 3,
    title: "Growth & Mindset",
    desc: "Building resilience and developing a strong mindset.",
    duration: "4:05",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    id: 4,
    title: "Elite Performance",
    desc: "How top performers stay consistent and disciplined.",
    duration: "5:20",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
];

export default function PodcastSection() {
  const [activeId, setActiveId] = useState(null);
  const audioRef = useRef(null);

  const handlePlay = (podcast) => {
    const audio = audioRef.current;

    if (!audio) return;

    // If clicking same podcast → toggle pause
    if (activeId === podcast.id) {
      audio.pause();
      setActiveId(null);
      return;
    }

    // Switch audio source
    audio.src = podcast.audio;
    audio.play();

    setActiveId(podcast.id);
  };

  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16">

      {/* GLOBAL AUDIO ELEMENT */}
      <audio ref={audioRef} />

      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center space-y-4 mb-14">
        <div className="flex items-center justify-center gap-3 text-black/60">
          <FaHeadphones />
          <span className="text-sm tracking-widest uppercase">
            Podcast Series
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-light text-black">
          Conversations That Shape Excellence
        </h2>

        <p className="text-black/60 max-w-2xl mx-auto text-sm md:text-base">
          Explore powerful conversations on leadership, performance, and transformation.
        </p>
      </div>

      {/* PODCAST GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {podcasts.map((podcast) => {
          const isPlaying = activeId === podcast.id;

          return (
            <div
              key={podcast.id}
              className="
                group border border-black/10 rounded-xl p-6 bg-white
                transition-all duration-300 ease-out
                hover:bg-black hover:text-white
                hover:-translate-y-2 hover:shadow-2xl
              "
            >

              {/* ICON */}
              <div
                className="
                  w-10 h-10 flex items-center justify-center rounded-full
                  bg-black text-white mb-4
                  group-hover:bg-white group-hover:text-black
                  transition-all duration-300
                "
              >
                <FaMicrophone />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold mb-2">
                {podcast.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-black/60 mb-4 group-hover:text-white/70">
                {podcast.desc}
              </p>

              {/* FOOTER */}
              <div className="flex items-center justify-between text-xs text-black/50 group-hover:text-white/60">

                <span>{podcast.duration}</span>

                <button
                  onClick={() => handlePlay(podcast)}
                  className="
                    flex items-center gap-2 px-3 py-1 rounded-md text-xs
                    bg-black text-white border border-black
                    group-hover:bg-white group-hover:text-black
                    transition-all duration-300
                  "
                >
                  {isPlaying ? <FaPause size={10} /> : <FaPlay size={10} />}
                  {isPlaying ? "Pause" : "Play"}
                </button>

              </div>

            </div>
          );
        })}

      </div>

      {/* CTA */}
      <div className="mt-20 max-w-4xl mx-auto bg-black text-white rounded-xl p-10 text-center space-y-4">

        <h3 className="text-2xl md:text-3xl font-light">
          Want to Be Featured or Collaborate?
        </h3>

        <p className="text-white/70 text-sm md:text-base">
          Join conversations that inspire elite thinking and transformation.
        </p>

      </div>

    </section>
  );
}