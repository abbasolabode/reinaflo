import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const bgHeroImage = {
  backgroundImage: "url('./images/reina-h1.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

// Animation variants (text only)
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

// Button animation (UX feel)
const buttonMotion = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
  },
  hover: {
    scale: 1.04,
    y: -2,
    boxShadow: "0px 10px 30px rgba(0,0,0,0.25)",
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

export default function Herosection() {
  return (
    <main
      style={bgHeroImage}
      className="min-h-screen z-0 w-full animate-zoomBlur will-change-[transform,filter]"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="w-full h-205.5 flex flex-col items-center px-12 py-10 gap-30 lg:flex-row"
      >
        {/* LEFT */}
        <motion.h1
          variants={item}
          className="font-extralight text-7xl text-white/90 lg:text-8xl leading-none z-0"
        >
          Reina-Flor <span className="block">Okori</span>
        </motion.h1>

        {/* RIGHT */}
        <section className="flex flex-col h-125 justify-evenly items-center gap-14 z-0">
          <motion.div
            variants={container}
            className="flex flex-col items-center gap-6"
          >
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
              Reina-Flor Okori Makendengue is a four-time Olympian redefining
              excellence at the intersection of elite performance, leadership,
              and human transformation.
            </motion.p>
          </motion.div>

          {/* BUTTON */}
          <div className="min-h-50 w-full flex flex-col items-center gap-9">
            <div className="flex w-full flex-col uppercase items-center gap-6">

              <motion.div
                className="w-full"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <motion.div
                  variants={buttonMotion}
                  className="w-full bg-black text-white rounded-md overflow-hidden"
                  style={{ transition: "background-color 0.3s ease, color 0.3s ease" }}
                  whileHover={{
                    backgroundColor: "#ffffff",
                    color: "#000000",
                  }}
                >
                  <Link
                    to="/about"
                    className="w-full flex justify-center items-center min-h-14 font-semibold tracking-wide"
                  >
                    Explore Reina-Flor
                  </Link>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </section>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="w-full min-h-16 flex flex-col gap-2 items-center text-center"
      >
        <p className="text-sm tracking-wide font-light text-white/80">
          SCROLL
        </p>

        <button className="border relative w-5 h-8 rounded-full">
          <div className="absolute animate-bounce h-1 top-0 left-2 text-white">
            |
          </div>
        </button>
      </motion.div>
    </main>
  );
}