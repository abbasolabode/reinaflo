import { GoDotFill } from "react-icons/go";
export default function Mission() {
    return (
        <div className="hidden w-full flex-col px-4 min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 ">
            {/* Left container */}
            <section className=" relative overflow-hidden rounded hover:scale-105 transition-transform duration-300 ">
                <figure className="absolute inset-0 bg-linear-to-br from-black/30 via-blue-900/20 to-black-50 transition-opacity duration-300 opacity-100">
                    <img src="" alt="" className="w-full h-200 object-cover transition-all duration-300 grayscale-0 scale-100 hover:grayscale-0 " />
                </figure>
            </section>

            {/* Right container */}
            <section className="space-y-8 lg:col-start-1 lg:row-start-1">
                <div className="flex items-center space-x-6 transition-all duration-600 delay-1000 opacity-100 translate-x-0">
                    <span>02</span>
                    <hr />
                    <h4>Holistic Development</h4>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight tracking-tight group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 delay-1100 opacity-100 translate-y-0">Our Mission</h2>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light transition-all duration-600 delay-1300 opacity-100 translate-y-0">Our mission is to deliver impeccable world-class education using innovative and model educators who understand the importance of sound education.</p>
                    <p className="text-base text-gray-700 leading-relaxed font-light border-l-2 border-gray-200 pl-6  transition-all duration-300 delay-1400 opacity-100 translate-y-0">We are driven by a passion for grooming each child's uniqueness, ensuring comprehensive development through structured policies, curriculum, and extra-curricular activities that showcase international standards.</p>
                </div>

                <div className="flex flex-col space-y-6 bg-blue-50/50 rounded p-4 border-l-4 border-blue-700 hover:translate-x-2 hover:border-l-6 transition-all duration-300 delay-1500 opacity-100 translate-y-0">
                    <h3 className="text-sm font-semibold text-blue-700 mb-2">Key Features:</h3>
                        <div className="flex items-center space-x-2">
                            <GoDotFill  className="w-1.5 h-1.5 bg-blue-700 rounded-full" />
                            <p className="text-sm">Full boarding mixed school for boys and girls</p>
                        </div>
                </div>
            </section>
        </div>
    )
}
