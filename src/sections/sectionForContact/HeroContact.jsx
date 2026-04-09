
const bgHeroImage = {
  backgroundImage: "url('./images/reina-flor-okori-premium-speaker.webp')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export default function HeroContact() {
    return (
        <div style={bgHeroImage} className="border w-full h-150">
            <div className="w-full flex items-center h-150">
                <h2 className="relative w-full text-center transition-transform duration-[30ms] ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] will-change-transform font-bold text-black bg-clip-text text-4xl md:text-5xl ">Contact</h2>
            </div>
        </div>
    )
}
