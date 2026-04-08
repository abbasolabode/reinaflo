export default function Vision() {
    return (
        <div className="w-full px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 ">
            {/* Left container */}
            <section className="h-200 relative overflow-hidden rounded hover:scale-105 transition-transform duration-300 ">
                <figure className="absolute inset-0 bg-linear-to-br from-black/30 via-blue-900/20 to-black-50 transition-opacity duration-300 opacity-100">
                    <img src="" alt="" className="w-full h-200 object-cover transition-all duration-300 grayscale-0 scale-100 hover:grayscale-0 " />
                </figure>
            </section>

            {/* Right container */}
            <section className="w-full space-y-6">
                <div className="flex items-center space-x-6 transition-all duration-600 opacity-100 translate-x-0 ">
                    <span className="text-sm font-medium text-gray-400 tracking-[0.2rem]">01</span>
                    <hr className="bg-gray-200 group-hover:bg-blue-400 h-px transition-all duration-300 delay-1000 w-8"/>
                    <h4 className="text-sm font-medium text-blue-700 tracking-[0.15rem] uppercase transition-opacity duration-600 delay-1200 opacity-100">Educational Excellence</h4>
                </div>

                <div className="flex flex-col space-y-6">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight tracking-tight group-hover:from from-blue-800/80  group-hover:to-blue-900 group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 delay-700 backdrop-opacity-100 translate-y-0">Our Vision</h3>
                        <p className="sm:text-lg text-gray-600 leading-relaxed font-light transition-all duration-600 delay-1100 opacity-100 translate-y-0">At EarlyGrip High School, our vision is to be a leading educational institution that nurtures the uniqueness of every child, developing their academic, spiritual, and moral values in an environment that feels like home away from home.</p>
                    </div>

                    <div className="flex flex-col gap-4">
                      
                        <p className="text-base text-gray-700 leading-relaxed font-light border-l-2 border-gray-200 pl-6 group-hover:border-blue-400 transition-all duration-300 delay-1200 opacity-100 translate-y-0">We strive to create well-educated and well-rounded young ladies and gentlemen who will become accomplished, well-informed future leaders of tomorrow.</p>
                        <hr className="flex items-center space-x-4 pt-4 transition-all duration-600 delay-1400 opacity-100 translate-y-0" />
                    </div>
                </div>

            </section>
        </div>
    )
}
