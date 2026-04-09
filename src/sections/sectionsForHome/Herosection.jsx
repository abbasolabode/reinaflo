import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const bgHeroImage = {
  backgroundImage: "url('./images/reina-h1.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

//Animation variants
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

const button = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Herosection() {
  return (
    <main
      style={bgHeroImage}
      className="min-h-screen z-0  w-full animate-zoomBlur will-change-[transform,filter]"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="w-full h-205.5 flex flex-col items-center px-12 py-10 gap-30 lg:flex-row"
      >

        {/* Left container */}
        <motion.h1
          variants={item}
          className="font-extralight text-7xl text-white/90 lg:text-8xl leading-none z-0"
        >
          Reina-Flor <span className="block">Okori</span>
        </motion.h1>

        {/* Right container */}
        <section className="flex flex-col h-125 justify-evenly items-center gap-14 z-0">

          <motion.div variants={container} className="flex flex-col items-center gap-6">
            
            <motion.h2
              variants={item}
              className="text-xl sm:text-3xl xs:text-2xl font-light leading-tight text-white/90"
            >
              Four-time Olympian. Strategist. Change architect.
            </motion.h2>

            <motion.p
              variants={item}
              className="text-center font-light text-sm leading-relaxed text-white/90"
            >
              Reina-Flor Okori Makendengue is a four-time Olympian redefining excellence at the intersection of elite performance, leadership, and human transformation.
            </motion.p>

          </motion.div>

          <motion.div
            variants={container}
            className="min-h-50 w-full justify-evenly items-center flex flex-col gap-9 z-0"
          >
            <div className="flex w-full flex-col uppercase items-center gap-6">

              <motion.div variants={button} className="w-full">
                <Link className="w-full bg-black text-white font-semibold min-h-14 flex justify-center items-center">
                  Explore Reina-Flor
                </Link>
              </motion.div>

              <motion.div variants={button} className="w-full">
                <Link className="w-full border bg-white/10 backdrop-blur-md border-black/20 text-white font-light w-50 min-h-14 flex justify-center items-center">
                  Discover facilities
                </Link>
              </motion.div>

            </div>
          </motion.div>
        </section>
      </motion.div>

      {/* mouse */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="w-full min-h-16 flex flex-col gap-2 items-center text-center"
      >
        <p className="text-sm tracking-wide font-light text-white/80">SCROLL</p>
        <button className="border relative group-hover:border-white/40 transition-colors w-5 h-8 rounded-full">
          <div className="absolute transition-all duration-300 animate-bounce h-1 top-0 left-2 text-white">
            |
          </div>
        </button>
      </motion.div>
    </main>
  );
}