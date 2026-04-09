import { Link } from "react-router-dom";

export default function Mission() {
    return (
        <div className="w-full md: bg-white py-5 px-4 min-h-120.5 items-center flex flex-col space-y-8 min-[780px]:justify-center min-[780px]:min-h-170 min-[780px]:space-y-4">
            <div className="flex flex-col py-4 items-center space-y-6 min-h-[428.833px] min-[780px]:min-h-87.5">
                <span className="border text-sm px-4 py-2 rounded-full tracking-wider  text-white/90 font-medium inline-block bg-black border-white/30">Our mission</span>
                <h2 className="text-4xl font-light leading-tight text-black text-center md:text-5xl md:flex md:flex-col">Leadership Through <span className="bg-black bg-clip-text text-transparent">Excellence</span></h2>
                <hr className="w-32 h-0.5  bg-black mx-auto" />
                 <p className="leading-relaxed text-xl text-black font-light mx-auto text-center max-w-3xl">To translate Olympic-level principles of discipline, resilience, and performance into practical tools and methodologies that empower leaders, organizations, and institutions to thrive in complex, fast-changing environments.</p>
            </div>
             
            <Link to="/podcast" className="rounded-md whitespace-nowrap px-10 py-4 bg-black backdrop-blur-sm border-white/30 w-58 text-center font-medium transition-all duration-300 text-white">Discover Our Podcasts</Link>
        </div>
    )
}
