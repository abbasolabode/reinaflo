import { FaPlay, FaHeadphones, FaMicrophone } from "react-icons/fa";

const podcasts = [
  {
    id: 1,
    title: "Elite Performance Mindset",
    desc: "Deep dive into building mental strength and discipline at the highest level.",
    duration: "32 min",
  },
  {
    id: 2,
    title: "Leadership Under Pressure",
    desc: "How elite athletes and leaders perform when everything is on the line.",
    duration: "45 min",
  },
  {
    id: 3,
    title: "Human Transformation Stories",
    desc: "Real stories of resilience, growth, and breakthrough moments.",
    duration: "28 min",
  },
];

export default function PodcastSection() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16">

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

        <p className="text-black/60 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Explore powerful conversations on leadership, performance, and human transformation with world-class insights and real experiences.
        </p>
      </div>

      {/* PODCAST GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {podcasts.map((podcast) => (
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
            <h3
              className="
                text-lg font-semibold text-black mb-2
                group-hover:text-white transition-colors duration-300
              "
            >
              {podcast.title}
            </h3>

            {/* DESCRIPTION */}
            <p
              className="
                text-sm text-black/60 leading-relaxed mb-4
                group-hover:text-white/70 transition-colors duration-300
              "
            >
              {podcast.desc}
            </p>

            {/* FOOTER */}
            <div
              className="
                flex items-center justify-between text-xs text-black/50
                group-hover:text-white/60 transition-colors duration-300
              "
            >
              <span>{podcast.duration}</span>

              <button
                className="
                  flex items-center gap-2 px-3 py-1 rounded-md text-xs
                  bg-black text-white border border-black
                  group-hover:bg-white group-hover:text-black
                  transition-all duration-300
                "
              >
                <FaPlay size={10} />
                Play
              </button>
            </div>

          </div>
        ))}

      </div>

      {/* CTA SECTION */}
      <div className="mt-20 max-w-4xl mx-auto bg-black text-white rounded-xl p-10 text-center space-y-4">

        <h3 className="text-2xl md:text-3xl font-light">
          Want to Be Featured or Collaborate?
        </h3>

        <p className="text-white/70 text-sm md:text-base">
          Join conversations that inspire elite thinking and global transformation.
        </p>

        <button className="
          mt-4 px-6 py-3 bg-white text-black rounded-md font-semibold
          hover:bg-black hover:text-white border border-white
          transition
        ">
          Contact Us
        </button>

      </div>

    </section>
  );
}