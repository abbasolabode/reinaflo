export default function Philosophy() {
    return (
        <div className="w-full min-h-screen overflow-hidden">
            {/* Left container */}
            <section className="flex flex-col gap-16 px-4 ">
                <div className="flex space-x-6 items-center ">
                    <hr className="bg-black h-px transition-all duration-300 delay-200 w-12" />
                    <h4 className="text-sm font-medium text-black">Experience Elite Leadership</h4>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light transition-all duration-300 opacity-100 translate-y-0 text-gray-900 leading-[0.9] tracking-tight ">
                        Reina-Flor Okori
                        <br />
                        <span className="bg-black bg-clip-text text-transparent">Lecture topics</span>
                    </h2>
                    <hr className=" h-1  w-16 bg-black transition-all duration-300 delay-200" />
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-light max-w-3xl mt-8 transition-all duration-300 delay-700 opacity-100 translate-y-0">Reina-Flor Okori delivers lectures and workshops that blend excellence with humanity, offering practical strategies on high performance, resilient leadership in the age of AI, leadership psychology, cross-cultural collaboration, and the empowerment of women and young people to drive meaningful and sustainable impact. <br /> <br /> <p>Through her REFORM™ methodology and ‘5 Circles of Resilience,’ Reina-Flor Okori equips leaders and organizations with a blueprint for sustainable high performance, while leveraging her multicultural background, global experience, and work across sport, technology, and social impact to drive transformation, innovation, and empowerment worldwide.</p>
                    </p>
                </div>
            </section>
        </div>
    )
}
