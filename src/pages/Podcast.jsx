import { useState } from "react";

export default function Podcast() {
  const [activeEpisode, setActiveEpisode] = useState(null);

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white px-6 py-16 flex justify-center">
      
      <div className="w-full max-w-6xl space-y-14">

        {/* HERO SECTION */}
        <div className="text-center space-y-6">
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            🎙️ Podcast Studio
          </h1>

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Dive into powerful conversations, elite insights, and stories that shape leadership, creativity, and innovation.
          </p>

          <p className="text-zinc-300 text-sm md:text-base max-w-3xl mx-auto leading-relaxed border-l border-white/10 pl-4">
            We’re thrilled to bring you the insider podcast — <span className="text-white font-medium">OLYMPIANS DIARY</span>. 
            This series celebrates extraordinary women in sports who embody excellence, self-improvement, and wellbeing.
          </p>

        </div>

        {/* FEATURED PODCAST */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">

          <video
            className="w-full h-[420px] md:h-[520px] object-cover"
            controls
          >
            <source type="video/mp4" />
          </video>

          {/* OVERLAY */}
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/95 via-black/60 to-transparent p-7">
            
            <span className="text-xs tracking-widest uppercase text-blue-400 font-medium">
              Featured Episode
            </span>

            <h2 className="text-2xl md:text-4xl font-bold mt-2">
              The Future of Creativity
            </h2>

            <p className="text-zinc-300 text-sm md:text-base mt-2 max-w-xl">
              Episode 01 • Deep conversation on innovation, expression, and human potential.
            </p>

          </div>

        </div>

        {/* EPISODES GRID */}
        <div className="grid gap-5 sm:grid-cols-2">

          {[
            { title: "Episode 02", desc: "Designing for Tomorrow" },
            { title: "Episode 03", desc: "Voices of Innovation" },
            { title: "Episode 04", desc: "Breaking Boundaries" },
            { title: "Episode 05", desc: "The Art of Storytelling" },
          ].map((ep, i) => (
            
            <button
              key={i}
              onClick={() => setActiveEpisode(ep)}
              className="group relative text-left p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
            >

              <div className="flex items-center gap-4">

                {/* ICON */}
                <div className="w-12 h-12 rounded-xl bg-black/40 flex items-center justify-center text-lg shadow-inner border border-white/10">
                  🎧
                </div>

                {/* TEXT */}
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold group-hover:text-blue-400 transition">
                    {ep.title}
                  </h3>
                  <p className="text-sm text-zinc-400">
                    {ep.desc}
                  </p>
                </div>

              </div>

              {/* subtle glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 to-transparent pointer-events-none" />

            </button>

          ))}

        </div>

      </div>
    </section>
  );
}