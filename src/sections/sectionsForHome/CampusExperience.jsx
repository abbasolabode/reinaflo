import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { FiEye } from "react-icons/fi";
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

export default function CampusExperience() {
  return (
    <div className="space-y-8 text-center min-h-[317.333px] lg:h-[233.33px] py-4 ">
      <div className="space-y-4 flex flex-col px-5 py-4">

        <h3 className="text-2xl font-light text-slate-900 lg:text-3xl">
          Experience Elite Leadership
        </h3>

        <p className="text-slate-800 mx-auto max-w-2xl">
          Discover how Olympic-level performance principles drive leadership, resilience, and transformation across organizations and individuals
        </p>

        {/* Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
          className="min-[780px]:flex-row flex flex-col items-center justify-center gap-4"
        >

          {/* Button 1 */}
          <motion.div variants={buttonVariants}>
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                initial={{ backgroundColor: "#000", color: "#fff" }}
                whileHover={{ backgroundColor: "#fff", color: "#000" }}
                transition={{ duration: 0.4 }}
                className="rounded-md"
              >
                <Link to="/gallery" className="group inline-flex items-center px-6 py-3 font-medium shadow-md gap-2 w-full h-full">

                  Explore Impact

                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <GoArrowUpRight />
                  </motion.span>

                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Button 2 */}
          <motion.div variants={buttonVariants}>
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                initial={{ backgroundColor: "#000", color: "#fff", borderColor: "#fff" }}
                whileHover={{ backgroundColor: "#fff", color: "#000", borderColor: "#000" }}
                transition={{ duration: 0.4 }}
                className="rounded-md border"
              >
                <Link className="group inline-flex items-center px-6 py-3 gap-2 font-medium w-full h-full">

                  <motion.span
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FiEye size={20} />
                  </motion.span>

                  View Approach

                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}