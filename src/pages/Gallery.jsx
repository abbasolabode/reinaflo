const images = [
  {
    id: 1,
    src: "./images/gallery1.jpg",
    title: "Elite Training Session",
    desc: "High-performance coaching environment",
  },
  {
    id: 2,
    src: "./images/gallery2.jpg",
    title: "Leadership Workshop",
    desc: "Strategic thinking development",
  },
  {
    id: 3,
    src: "./images/gallery3.jpg",
    title: "Athlete Preparation",
    desc: "Focused mental conditioning",
  },
  {
    id: 4,
    src: "./images/gallery4.jpg",
    title: "Global Seminar",
    desc: "Speaking on human transformation",
  },
  {
    id: 5,
    src: "./images/gallery5.jpg",
    title: "Performance Lab",
    desc: "Data-driven elite training",
  },
  {
    id: 6,
    src: "./images/gallery6.jpg",
    title: "Team Strategy",
    desc: "Building winning systems",
  },
];

export default function Gallery() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-14 space-y-4">
        <h2 className="text-4xl md:text-5xl font-light text-black">
          Gallery
        </h2>

        <p className="text-black/60 text-sm md:text-base leading-relaxed">
          Moments of excellence, leadership, and transformation captured through
          our journey across performance and impact.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">

        {images.map((img) => (
          <div
            key={img.id}
            className="
              group relative overflow-hidden rounded-xl bg-black
              h-72 sm:h-80 md:h-96
            "
          >
            {/* IMAGE */}
            <img
              src={img.src}
              alt={img.title}
              className="
                w-full h-full object-cover
                transition-transform duration-500
                group-hover:scale-110
              "
            />

            {/* DARK OVERLAY */}
            <div className="
              absolute inset-0 bg-black/20
              group-hover:bg-black/60 transition duration-300
            " />

            {/* TEXT */}
            <div className="
              absolute bottom-0 left-0 right-0 p-5
              translate-y-6 opacity-0
              group-hover:translate-y-0 group-hover:opacity-100
              transition-all duration-300
            ">
              <h3 className="text-white text-lg font-semibold">
                {img.title}
              </h3>
              <p className="text-white/70 text-sm">
                {img.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}