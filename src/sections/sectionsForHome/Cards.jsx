import { motion } from "framer-motion";
import { GoArrowUpRight, GoBook } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";
import { SiMicrostrategy } from "react-icons/si";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaConnectdevelop } from "react-icons/fa";
import { Link } from "react-router-dom";

const cards = [
    {
        id: 1,
        icon: <GoBook size={24} />,
        header: "Leadership Development",
        parargraph:
            "Elite frameworks designed to build resilient, high-performing leaders",
        smallText1: "REFORM™ Method",
        smallText2: "Strategic Thinking",
        smallText3: "Decision Making",
    },
    {
        id: 2,
        icon: <SiMicrostrategy size={24} />,
        header: "Performance Strategy",
        parargraph:
            "Applying Olympic-level discipline and structure to business and leadership",
        smallText1: "High Performance",
        smallText2: "Execution Systems",
        smallText3: "Growth Models",
    },
    {
        id: 3,
        icon: <FaConnectdevelop size={24} />,
        header: "Human Development",
        parargraph:
            "Empowering individuals through resilience, well-being, and transformation",
        smallText1: "Resilience",
        smallText2: "Well-being",
        smallText3: "Mindset",
    },
    {
        id: 4,
        icon: <AiOutlineGlobal size={24} />,
        header: "Global Impact",
        parargraph:
            "Driving change across organizations, cultures, and leadership ecosystems",
        smallText1: "Organizations",
        smallText2: "Institutions",
        smallText3: "Communities",
    },
];

/* Container animation (stagger effect) */
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

/* Card entrance animation */
const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.8, 0.25, 1],
        },
    },
};

export default function Cards() {
    return (
        <div className="min-h-screen w-full px-4 bg-black">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="lg:grid-cols-4 justify-center flex flex-col items-center space-y-6 md:gap-4 md:grid md:grid-cols-2 min-[780px]:min-h-176.5"
            >
                {cards.map((card) => (
                    <motion.div
                        key={card.id}
                        variants={cardVariants}
                        whileHover={{
                            y: -10,
                            scale: 1.03,
                            boxShadow: "0px 20px 60px rgba(0,0,0,0.25)",
                        }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 260, damping: 18 }}
                        className="group rounded-2xl bg-white hover:bg-black flex flex-col space-y-6 border border-slate-200 hover:border-slate-300 transition-all duration-500 text-black hover:text-white h-[350px] p-6"
                    >
                        {/* TOP */}
                        <div className="flex items-start justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 flex bg-black text-white group-hover:bg-white group-hover:text-black items-center justify-center rounded-md transition-all duration-500">
                                    {card.icon}
                                </div>
                                <span className="text-slate-400 group-hover:text-slate-300 transition">
                                    0{card.id}
                                </span>
                            </div>

                            <span className="w-8 h-8 rounded-full bg-black text-white group-hover:bg-white group-hover:text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <GoArrowUpRight size={20} />
                            </span>
                        </div>

                        {/* CONTENT */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold transition-colors duration-300">
                                {card.header}
                            </h3>
                            <p className="transition-colors duration-300">
                                {card.parargraph}
                            </p>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {[card.smallText1, card.smallText2, card.smallText3].map(
                                    (text, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-medium rounded-full border border-black/10 group-hover:border-white/20 transition-all duration-300"
                                        >
                                            {text}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}