import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// FIX: motion wrapper for Link
const MotionLink = motion(Link);

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

const socialLinks = [
  { id: 1, icons: <LuFacebook size={22} />, path: "" },
  { id: 2, icons: <FaInstagram size={22} />, path: "" },
  { id: 3, icons: <SlSocialLinkedin size={22} />, path: "" },
  { id: 4, icons: <FaWhatsapp size={22} />, path: "https://wa.me/31657105735" },
];

const navigateLinks = [
  { id: 1, path: "/", icon: <BsDot className="text-white" />, text: "Home" },
  { id: 2, path: "/about", icon: <BsDot className="text-white" />, text: "About" },
  { id: 4, path: "/gallery", icon: <BsDot className="text-white" />, text: "Gallery" },
  { id: 5, path: "/contact", icon: <BsDot className="text-white" />, text: "Contact" },
  { id: 6, path: "/login", icon: <BsDot className="text-white" />, text: "Login" },
  { id: 7, path: "/podcast", icon: <BsDot className="text-white" />, text: "Podcast" },
];

const learningProgram = [
  { id: 1, path: "", icon: <BsDot className="text-white" />, text: "Science & Technology" },
  { id: 2, path: "", icon: <BsDot className="text-white" />, text: "Art & Humanities" },
  { id: 3, path: "", icon: <BsDot className="text-white" />, text: "Science & Technology" },
  { id: 4, path: "", icon: <BsDot className="text-white" />, text: "Sports & Recreation" },
];

export default function Footer() {
  return (
    <footer className="pt-24 min-h-screen w-full bg-black border overflow-hidden min-[780px]:space-y-14">

      {/* HEADER */}
      <div className="px-4 py-6 flex flex-col items-center justify-center space-y-8">
        <p className="text-sm uppercase tracking-[0.3rem] font-light text-white">
          Excellence in human development
        </p>

        <h2 className="text-4xl flex flex-col text-center leading-[0.9] font-light tracking-tight text-white md:text-6xl">
          <span className="inline-block bg-white bg-clip-text text-transparent">
            Join Our
          </span>
          Community
        </h2>

        <hr className="w-32 h-0.5 mx-auto mb-12 bg-white" />

        <p className="max-w-2xl leading-relaxed font-light text-center mx-auto text-white/80 md:text-xl">
          Ready to elevate your leadership journey? Experience excellence through performance and human transformation.
        </p>
      </div>

      {/* GRID */}
      <div className="space-y-6 w-full md:grid md:grid-cols-2 md:min-h-128.25 md:items-center lg:grid-cols-4">

        {/* SOCIAL */}
        <section className="space-y-6 flex flex-col gap-6 px-4">
          <div className="flex flex-col justify-center gap-5">
            <div className="flex items-center space-x-3">
              <hr className="w-8 h-0.5 bg-white" />
              <p className="text-xs font-medium tracking-[0.2rem] uppercase text-white">
                Our school
              </p>
            </div>

            <Link className="text-xl font-light text-white">ReinaFlo</Link>

            <hr className="w-14 h-0.5 bg-white" />

            <p className="text-white/70 leading-relaxed font-light min-[780px]:max-w-md">
              Empowering individuals through elite performance principles, resilience, and a commitment to lasting impact.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map(link => (
              <span
                key={link.id}
                className="border p-3 bg-white/5 border-white/10 text-white/70 hover:text-black hover:border-black/50 hover:bg-white backdrop-blur-sm transition-all duration-300"
              >
                <a href={link.path} target="_blank" rel="noopener noreferrer">
                  {link.icons}
                </a>
              </span>
            ))}
          </div>
        </section>

        {/* ACADEMICS */}
        <section className="flex flex-col space-y-6 mt-10 px-4">
          <div className="flex flex-col gap-5">
            <div className="flex items-center space-x-3">
              <hr className="w-8 h-0.5 bg-white" />
              <h4 className="text-xs font-medium text-white tracking-[0.2rem] uppercase">
                Academics
              </h4>
            </div>

            <h3 className="text-2xl font-light text-white">
              Learning Programs
            </h3>

            <hr className="w-16 h-0.5 bg-white" />
          </div>

          <ul className="flex flex-col gap-4 mt-6">
            {learningProgram.map(link => (
              <li key={link.id} className="flex items-center gap-2">
                {link.icon}
                <Link className="text-white/70 text-[14px] font-light">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* QUICK LINKS */}
        <section className="flex flex-col space-y-6 mt-10 px-4">
          <div className="flex flex-col gap-5">
            <div className="flex items-center space-x-3">
              <hr className="w-8 h-0.5 bg-white" />
              <h4 className="text-xs font-medium text-white tracking-[0.2rem] uppercase">
                Quick Links
              </h4>
            </div>

            <h3 className="text-2xl font-light text-white">
              Navigate
            </h3>

            <hr className="w-16 h-0.5 bg-white" />
          </div>

          <ul className="flex flex-col gap-4 mt-6">
            {navigateLinks.map(link => (
              <li key={link.id} className="flex items-center gap-2">
                {link.icon}
                <Link className="text-white/70 text-[14px] font-light">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* CONTACT */}
        <section className="flex flex-col gap-4 space-y-6 mt-10 px-4 w-full">
          <div className="flex flex-col gap-5">
            <div className="flex items-center space-x-3">
              <hr className="w-8 h-0.5 bg-white " />
              <h4 className="text-xs font-medium text-white tracking-[0.2rem] uppercase">
                Get in touch
              </h4>
            </div>

            <h3 className="text-2xl font-light text-white">
              Contact Us
            </h3>

            <hr className="w-16 h-0.5 bg-white" />
          </div>

          <ul className="space-y-6">
            <address className="flex items-center space-x-4">
              <span className="p-2 bg-white rounded-lg">
                <CiLocationOn className="text-black" />
              </span>
              <p className="text-white/70 font-light leading-relaxed">
                Lutsborgsweg 74, Netherlands
              </p>
            </address>

            <li className="flex items-center space-x-4">
              <span className="p-2 bg-white rounded-lg">
                <LuPhone className="text-black" />
              </span>
              <p className="text-white/70">+234 707 932 3077</p>
            </li>

            <li className="flex items-center space-x-4">
              <span className="p-2 bg-white rounded-lg">
                <CiMail className="text-black" />
              </span>
              <p className="text-white/70">
                Reina-Flor.okori@olympian.org
              </p>
            </li>
          </ul>

          {/* ✅ PREMIUM BUTTON */}
          <MotionLink
            to="/contact"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover={{
              scale: 1.06,
              y: -3,
              backgroundColor: "#ffffff",
              color: "#000000",
              boxShadow: "0px 12px 30px rgba(255,255,255,0.15)",
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="w-full hover:text-white hover:bg-black text-center px-8 py-3 rounded-md bg-white text-black font-medium tracking-[0.2rem] overflow-hidden"
          >
            Apply Now
          </MotionLink>
        </section>

        {/* FOOTER BOTTOM */}
        <div className="w-full px-4 py-6 flex flex-col gap-5 items-stretch md:col-span-2 lg:col-span-4">
          <hr className="w-full h-px bg-white/20" />

          <p className="text-sm text-white/50 text-center font-light">
            Copyright © 2026 ReinaFlor-Okori. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}