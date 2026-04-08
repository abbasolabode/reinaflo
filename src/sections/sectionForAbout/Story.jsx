import { IoMdBook } from "react-icons/io";
import { HiUsers } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { GoDotFill } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


const special = [
    {
        id: 1,
        text: "Elite Performance Principles",
        icon: <IoMdBook size={10} className="w-6 h-6 rounded-full text-white bg-black" />,
    },
    {
        id: 2,
        text: "Leadership Architects",
        icon: <HiUsers size={10} className="w-6 h-6 rounded-full text-white bg-black" />
    },

    {
        id: 3,
        text: "Human Transformation",
        icon: <FaHeart size={10} className="w-6 h-6 rounded-full text-white bg-black" />
    },
    {
        id: 4,
        text: "Global Excellence Standards",
        icon: <GiAchievement size={10} className="w-6 h-6 rounded-full text-white bg-black" />
    },
]

const approach = [
    {
        id: 1,
        icon: <GoDotFill className="w-2 h-2 rounded-full bg-black shrink-0 mt-2 hover:scale-150 transition-all duration-300 delay-1200" />,
        header: "Elite Performance Systems:",
        text: "Structured frameworks inspired by Olympic discipline and high-performance environments",
    },

    {
        id: 2,
        icon: <GoDotFill className="w-2 h-2 rounded-full bg-black shrink-0 mt-2 hover:scale-150 transition-all duration-300 delay-1200" />,
        header: "Leadership Intelligence:",
        text: "Development of strategic thinking, decision-making, and adaptive leadership capacity",
    },

    {
        id: 3,
        icon: <GoDotFill className="w-2 h-2 rounded-full bg-black shrink-0 mt-2 hover:scale-150 transition-all duration-300 delay-1200" />,
        header: "Human Transformation:",
        text: "Cultivating resilience, mindset strength, and sustainable personal growth",
    },
]


export default function Story() {
    return (
        <div className="shadow-lg shadow-white min-h-screen flex flex-col gap-5 space-y-6 pb-6 px-4">
            {/* Left container */}
            <section className="flex flex-col gap-16">
                <div className="flex space-x-6 items-center">
                    <hr className="bg-black h-px transition-all duration-300 delay-200 w-12" />
                    <h4 className="text-sm font-medium text-black"> About Our School</h4>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight  transition-all duration-300 opacity-100 translate-y-0 ">Our Story</h2>
                    <hr className=" h-1  w-16 bg-black transition-all duration-300 delay-200" />
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-lg leading-relaxed font-light bg-black bg-clip-text text-transparent transition-all duration-300 delay-700 opacity-100 translate-y-0">
                        Reina-Flor Okori Makendengue is a four-time Olympian, strategist, and change architect working at the intersection of <strong>high performance</strong>, <strong>leadership</strong>, and <strong>human development</strong>.
                    </p>
                    <div className="bg-blue-50/50 rounded p-6 border-l-4 border-black hover:translate-x-2 hover:border-l-8 opacity-100 translate-y-0">
                        <p className="text-base leading-relaxed text-gray-700">
                            Competing at the highest level in track and field for both France and Equatorial Guinea, she is among the fastest women in French history in the 100m hurdles. Her career—spanning over two decades—reflects discipline, resilience, and the ability to perform under pressure at the highest level.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col space-y-5 ">
                    <h3 className="text-xl font-semibold  text-black">What Makes Us Special</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {special.map(item => (
                            <div key={item.id} className="flex items-center gap-2 shrink-0 group:hover:scale-125 group:hover:rotate-180 duration-300 transition-all"> {item.icon} <p className="text-black font-medium ">{item.text}</p></div>
                        ))}
                    </div>
                </div>


                <div className="w-full space-y-4 transition-all duration-300 delay-1000 opacity-100 translate-y-0">
                    <h4 className="text-lg font-medium text-black">Our Educational Approach</h4>
                    {approach.map(item => (
                        <p key={item.id} className="flex items-start gap-2 hover:translate-x-2 transition-all duration-200 delay-1100 leading-relaxed">

                            {item.icon}

                            <span>
                                <strong className="whitespace-nowrap">{item.header}</strong>{" "}
                                {item.text}
                            </span>

                        </p>
                    ))}

                </div>


                <div className="border rounded-md text-white pb-4 flex flex-col items-center justify-start space-y-3 px-3 pt-6 transition-all duration-300 delay-1700 opacity-100 translate-y-0 bg-linear-to-r from-blue-800 to-blue-800 ">
                    <h3 className="text-lg font-semibold w-full ">Ready to Join Our Family?</h3>
                    <p className="text-blue-100 font-medium w-full">
                        Connect with us to explore pathways into elite performance, leadership, and human transformation.
                    </p>
                    <div className="w-full flex items-center justify-start">
                        <span className="flex w-full items-center gap-3 "><FaPhoneAlt className="text-red-500" /><p>+31 6 57105735</p>+33 7 81 89 78 38 (whatsapp)<p></p></span>
                        <span className="flex items-center w-full gap-3 "><IoIosMail /><p>Reina-Flor.okori@olympian.org
                        </p></span>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <hr className=" bg-linear-to-r from-blue-700 to-blue-800 h-px transition-all duration-300 delay-1700 w-8" />
                    <GoDotFill className="w-2 h-2 bg-blue-700 rounded-full" />
                    <hr className=" bg-linear-to-r from-blue-700 to-blue-800 h-px transition-all duration-300 delay-1700 w-12" />
                </div>
            </section>

            {/* Right container for image */}
            <section className="h-200 relative overflow-hidden rounded hover:scale-105 transition-transform duration-300 ">
                <figure className="absolute inset-0 bg-linear-to-br from-black/30 via-blue-900/20 to-black/20 transition-opacity duration-300 delay-700 opacity-100">
                    <img src="./images/reina-flor-flagbearer.webp" alt="" className="object-cover transition-all  duration-300 grayscale-0 scale-100 hover:grayscale-0 w-full h-220" />
                </figure>
            </section>
        </div>
    )
}
