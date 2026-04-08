import { Link } from "react-router-dom";

export default function Mission() {
    return (
        <div className="w-full md: bg-gray-500/30 py-5 px-4 min-h-120.5 items-center flex flex-col space-y-8 min-[780px]:justify-center min-[780px]:min-h-170 min-[780px]:space-y-4">
            <div className="flex flex-col py-4 items-center space-y-6 min-h-[428.833px] min-[780px]:min-h-87.5">
                <span className="border text-sm px-4 py-2 rounded-full tracking-wider  text-white/90 font-medium inline-block border-white/30">Our mission</span>
                <h2 className="text-4xl font-light leading-tight text-white text-center md:text-5xl md:flex md:flex-col">Leadership Through <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Excellence</span></h2>
                <hr className="w-32 h-0.5  bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto" />
                 <p className="leading-relaxed text-xl text-white/90 font-light mx-auto text-center max-w-3xl">To translate Olympic-level principles of discipline, resilience, and performance into practical tools and methodologies that empower leaders, organizations, and institutions to thrive in complex, fast-changing environments.</p>
            </div>
             
            <Link to="/Services" className="borderpx-10 py-4 bg-white/20 backdrop-blur-sm border-white/30 w-58 text-center font-medium transition-all duration-300 text-white  ">Discover Our Programs</Link>
        </div>
    )
}
