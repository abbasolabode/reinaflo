import { GoArrowUpRight, GoBook } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";
import { SiMicrostrategy } from "react-icons/si";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaConnectdevelop } from "react-icons/fa";
import { Link } from "react-router-dom";

const cards = [
    {
        id: 1,
        icon: <GoBook size={24}/>,
        header: "Leadership Development",
        parargraph: "Elite frameworks designed to build resilient, high-performing leaders",
        smallText1: "REFORM™ Method",
        smallText2: "Strategic Thinking",
        smallText3: "Decision Making",
    },

    {
        id: 2,
        icon: <SiMicrostrategy size={24} />,
        header: "Performance Strategy",
        parargraph: "Applying Olympic-level discipline and structure to business and leadership",
        smallText1: "High Performance",
        smallText2: "Execution Systems",
        smallText3: "Growth Models",
    },
    {
        id: 3,
        icon: <FaConnectdevelop size={24} />,
        header: "Human Development",
        parargraph: "Empowering individuals through resilience, well-being, and transformation",
        smallText1: "Resilience",
        smallText2: "Well-being",
        smallText3: "Mindset",
    },
    {
        id: 4,
        icon: <AiOutlineGlobal size={24} />,
        header: "Global Impact",
        parargraph: "Driving change across organizations, cultures, and leadership ecosystems",
        smallText1: "Organizations",
        smallText2: "Institutions",
        smallText3: "Communities",
    },
];

export default function Cards() {
    return (
        <div className="min-h-screen w-full px-4 lg:py-[-2rem]">
            <div className="lg:grid-cols-4 justify-center flex flex-col space-y-6 md:gap-4 md:grid md:grid-cols-2 min-[780px]:min-h-176.5">
                {cards.map(card => (
                    <div
                        key={card.id}
                        className="rounded-2xl bg-black flex flex-col space-y-6 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 text-white h-[350px] p-6"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 flex bg-white text-black items-center justify-center rounded-md">
                                  {card.icon}
                                </div>
                                <span className="text-slate-400">0{card.id}</span>
                            </div>

                            <span className="w-8 h-8 rounded-full bg-white border-slate-200 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <GoArrowUpRight size={20} />
                            </span>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold transition-colors duration-300">
                                {card.header}
                            </h3>
                            <p>{card.parargraph}</p>

                            <div className="flex flex-wrap gap-2 pt-2">
                                <span className="px-3 py-1 text-xs font-medium rounded-full">
                                    {card.smallText1}
                                </span>
                                <span className="px-3 py-1 text-xs font-medium rounded-full">
                                    {card.smallText2}
                                </span>
                                <span className="px-3 py-1 text-xs font-medium rounded-full">
                                    {card.smallText3}
                                </span>
                            </div>
                        </div>

                        <Link className="flex border items-center text-blue-800 text-sm font-medium mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Explore More
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}