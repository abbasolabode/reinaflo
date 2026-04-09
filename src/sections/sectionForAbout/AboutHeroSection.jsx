

const bgHeroImage = {
  backgroundImage: "url('./images/reina-flor-okori.webp')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
export default function AboutHeroSection() {
  return (
    <div style={bgHeroImage} className=" px-4 min-h-screen flex flex-col justify-center items-center gap-10 space-y-9 ">
        <div className="flex border rounded py-5 bg-black flex-col gap-3 items-center justify-center">
            <h2 className='text-xl font-semibold text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl '>Broad Vision. Exceptional Learning. Lasting Impact</h2>
            <p className='px-3 font-light text-center text-white'>Our mission, both then and now is to provide quality education while upholding the highest standard of integrity, professionalism and student success.</p>
        </div>

        <h1 className=' w-80 text-center py-3 rounded bg-black font-bold text-4xl justify-center items-center text-white md:text-5xl lg:text-6xl'>About</h1>
    </div>
  )
}

