import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] },
  },
};

export default function HeroContact() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 bg-white overflow-hidden">

      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-black/5 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-black/5 blur-3xl rounded-full bottom-[-120px] right-[-120px]" />

      {/* CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl text-center space-y-10"
      >

        {/* TITLE */}
        <motion.div variants={item} className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-light text-black">
            Let’s Connect
          </h1>

          <p className="text-black/60 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Whether you’re exploring collaboration, leadership programs, or
            transformation coaching — we’re here to build meaningful impact
            together.
          </p>
        </motion.div>

        {/* CONTACT CARDS */}
        <motion.div
          variants={item}
          className="grid sm:grid-cols-3 gap-4"
        >

          <div className="border rounded-xl p-5 hover:bg-black hover:text-white transition duration-300 group">
            <FaPhoneAlt className="mx-auto mb-3 text-black group-hover:text-white" />
            <p className="text-sm font-medium">Call Us</p>
            <p className="text-xs text-black/60 group-hover:text-white/70">
              +31 6 57105735
            </p>
          </div>

          <div className="border rounded-xl p-5 hover:bg-black hover:text-white transition duration-300 group">
            <FaEnvelope className="mx-auto mb-3 text-black group-hover:text-white" />
            <p className="text-sm font-medium">Email</p>
            <p className="text-xs text-black/60 group-hover:text-white/70 break-all">
              reina-flor.okori@olympian.org
            </p>
          </div>

          <div className="border rounded-xl p-5 hover:bg-black hover:text-white transition duration-300 group">
            <FaMapMarkerAlt className="mx-auto mb-3 text-black group-hover:text-white" />
            <p className="text-sm font-medium">Location</p>
            <p className="text-xs text-black/60 group-hover:text-white/70">
              Global / Remote
            </p>
          </div>

        </motion.div>

        {/* CTA BUTTON */}
        <motion.div variants={item}>
          <button className="px-8 py-4 bg-black text-white rounded-md font-semibold hover:bg-white hover:text-black border border-black transition">
            Send a Message
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
}