import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// animation variants
const buttonVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

export default function WelcomeSection() {
  return (
    <div className="px-4 lg:px-8 py-5 z-50 min-h-screen w-full flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-24">
      
      {/* Left container */}
      <section className='lg:max-w-120 min-h-screen flex flex-col gap-8 w-full'>
        
        <div className="flex items-center gap-3">
          <hr className="w-12 bg-linear-to-r from-blue-800 h-0.5 to-gray-800" />
          <p className="uppercase tracking-wide font-medium text-black">
            Where knowledge builds excellence
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <h2 className="text-4xl max-w-60 font-light leading-12 lg:text-[60px] lg:min-w-[353.32px] lg:leading-relaxed lg:min-h-38.75">
            <span className="bg-linear-to-r from-blue-800 to-emerald-800 bg-clip-text leading-tight">
              Welcome to
            </span>{" "}
            Reina-Flor
          </h2>
          <hr className="w-55 bg-linear-to-r from-blue-800 h-0.5 to-gray-800" />
        </div>

        <h2 className="text-2xl font-light leading-relaxed text-gray-800">
          Scientia Pro Excellentiae et Ministerio
        </h2>

        <p className="text-sm font-medium text-gray-800">
          "Knowledge for Excellence and Service"
        </p>

        <div className="space-y-6 w-full">
          <p className="text-gray-700 text-lg leading-relaxed">
            Reina-Flor Okori Makendengue is a four-time Olympian, strategist,
            and change architect working at the intersection of high performance,
            leadership, and human development.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Competing at the highest level in track and field for both France
            and Equatorial Guinea, she is among the fastest women in French
            history in the 100m hurdles. Her career—spanning over two decades—
            reflects discipline, resilience, and the ability to perform under
            pressure at the highest level.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Today, she translates that experience into her work with leaders,
            organizations, and institutions navigating complex and fast-changing
            environments.
          </p>
        </div>

        {/* ✅ ONLY BUTTON ANIMATION UPDATED */}
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              to="/about"
              className="bg-black px-8 py-4 font-medium hover:bg-white hover:text-black transition-all duration-700 shadow-lg text-white flex items-center whitespace-nowrap gap-3 w-70"
            >
              Learn More About ReinaFlor
              <motion.span
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <GoArrowRight size={20} />
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Right container */}
      <section className="relative min-w-full shadow-2xl">
        <figure className="shadow-2xl min-w-full lg:max-w-80 h-full object-cover">
          <img
            className="w-full h-full object-cover"
            src="/images/Reina-Flor-Okori.jpg"
            alt="athletic"
          />
        </figure>

        <div className="absolute -top-4 -right-4 w-12 h-12 border-2 border-blue-300 rounded-full"></div>
      </section>

    </div>
  );
}