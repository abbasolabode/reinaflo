

const bgHeroImage = {
  backgroundImage: "url('./images/reina-flor-okori.webp')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
export default function AboutHeroSection() {
  return (
    <div style={bgHeroImage} className="px-4 border min-h-screen flex flex-col justify-center items-center gap-10 space-y-9 ">
        <div className="flex flex-col gap-3 items-center justify-center">
            <h2 className='text-xl font-semibold text-blue-600 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl '>Broad Vision. Exceptional Learning. Lasting Impact</h2>
            <p className='font-light text-center text-white/90'>Our mission, both then and now is to provide quality education while upholding the highest standard of integrity, professionalism and student success.</p>
        </div>

        <h1 className='font-bold text-4xl justify-center items-center text-blue-600 md:text-5xl lg:text-6xl'>About</h1>
    </div>
  )
}


// relative z-0 min-h-screen w-full sticky top-0 animate-zoomBlur will-change-[transform,filter]