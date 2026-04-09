import { motion, AnimatePresence } from "framer-motion";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { useIsOpenMenu } from "../hooks/useIsOpenMenu";
import { useEffect, useState } from "react";

const navLinks = [
  { id: 1, link: "Home", path: "/" },
  { id: 2, link: "About", path: "/about" },
  { id: 4, link: "Podcast", path: "/podcast" },
  { id: 5, link: "Gallery", path: "/gallery" },
  { id: 6, link: "Contact", path: "/contact" },
  { id: 7, link: "login", path: "/login" }
];

const navVariants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.8, 0.25, 1],
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
  exit: {
    x: "-100%",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Header() {
  const { isOpen, setIsOpen, onClose } = useIsOpenMenu();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`relative w-full h-20 z-[1000] transition-all duration-500 sticky top-0 inset-0 ${
        isOpen
          ? "bg-black border-b border-white/10"
          : isScrolled
          ? "bg-gradient-to-r from-black/90 via-zinc-800/80 to-black/90 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_50px_rgba(0,0,0,0.7)]"
          : "bg-gradient-to-r from-black/60 via-zinc-900/50 to-black/60 backdrop-blur-lg border-b border-white/5"
      }`}
    >
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between px-4 py-4">
        <Link to="/" className="font-medium text-white text-2xl">
          Reina-Flo
        </Link>

        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="w-12 h-12 text-white text-2xl flex justify-center items-center"
          >
            <CiMenuBurger />
          </button>
        ) : (
          <button
            onClick={onClose}
            className="w-12 h-12 text-white text-2xl flex justify-center items-center"
          >
            <IoMdClose />
          </button>
        )}
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex w-full h-20 lg:px-6">
        <div className="lg:flex lg:justify-between w-full lg:px-5 items-center space-x-12">
          <Link to="/" className="font-medium text-2xl text-white">
            Reina-Flo
          </Link>

          <nav className="w-135">
            <ul className="flex justify-between w-135">
              {navLinks.map(item => (
                <li key={item.id}>
                  <Link
                    className="text-white text-base font-light tracking-wide"
                    to={item.path}
                  >
                    {item.link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/*  MENU BELOW HEADER */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay (below header) */}
            <motion.div
              onClick={onClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-black z-[900]"
            />

            {/* Menu */}
            <motion.nav
              variants={navVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed lg:hidden top-20 left-0 w-full h-[calc(100vh-80px)] p-6 z-[950]"
            >
              <ul className="flex flex-col gap-10 mt-10 w-full">
                {navLinks.map((link) => (
                  <motion.div key={link.id} variants={linkVariants}>
                    <li>
                      <Link
                        onClick={onClose}
                        className="text-[20px] text-white font-medium"
                        to={link.path}
                      >
                        {link.link}
                      </Link>
                    </li>
                    <hr className="text-white mt-2 w-full" />
                  </motion.div>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}