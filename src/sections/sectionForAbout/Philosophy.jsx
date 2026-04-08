export default function Philosophy() {
    return (
        <div className="w-full min-h-screen overflow-hidden">
            {/* Left container */}
            <section className="flex flex-col gap-16 px-4 ">
                <div  className="flex space-x-6 items-center ">
                    <hr className="bg-linear-to-r from-blue-800 to-blue-800 h-px transition-all duration-300 delay-200 w-12"/>
                    <h4 className="text-sm font-medium text-blue-700">EarlyGrip Educational Philosophy</h4>
                </div>
                <div  className="flex flex-col space-y-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light transition-all duration-300 opacity-100 translate-y-0 text-gray-900 leading-[0.9] tracking-tight ">
                        Nurturing, Innovative,
                        <br />
                        <span className="bg-linear-to-r from-blue-800/80 via-blue-900 bg-clip-text text-transparent">Excellence-Driven</span>
                    </h2>
                    <hr className=" h-1  w-16 bg-linear-to-r from-blue-700 to-blue-800 transition-all duration-300 delay-200"/>
                    <p  className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-light max-w-3xl mt-8 transition-all duration-300 delay-700 opacity-100 translate-y-0">Our educational philosophy is centered on nurturing each child's uniqueness, innovative teaching methods, and a relentless pursuit of excellence. We believe in creating an environment that develops not just academic prowess, but also strong moral and spiritual foundations.</p>
                </div>
            </section>
        </div>
    )
}
