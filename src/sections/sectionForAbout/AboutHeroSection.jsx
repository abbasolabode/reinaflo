const bgHeroImage = {
  backgroundImage: "url('./images/reina-flor-okori.webp')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export default function AboutHeroSection() {
  return (
    <div
      style={bgHeroImage}
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 flex flex-col items-center text-center gap-10 max-w-4xl">

        {/* MAIN TEXT CARD */}
        <div className="bg-black/70 backdrop-blur-md border border-white/10 rounded-xl px-6 py-8 space-y-4 shadow-xl">
          <h2 className="text-white font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-snug">
            Broad Vision. Exceptional Learning. Lasting Impact
          </h2>

          <p className="text-white/80 font-light text-sm sm:text-base leading-relaxed">
            Our mission, both then and now is to provide quality education while
            upholding the highest standard of integrity, professionalism and
            student success.
          </p>
        </div>

        {/* HERO TITLE */}
        <h1 className="text-white font-bold tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          About
        </h1>

      </div>
    </div>
  );
}