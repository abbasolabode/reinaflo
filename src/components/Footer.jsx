import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";

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

      <div className="px-4 py-6 flex flex-col items-center justify-center space-y-8">
        <p className="text-sm uppercase tracking-[0.3rem] font-light text-white">
          Excellence in human development
        </p>

        <h2 className="text-4xl flex flex-col text-center leading-[0.9] font-light tracking-tight text-white md:text-6xl">
          <span className="inline-block bg-white bg-clip-text text-transparent md:text-6xl">
            Join Our
          </span>
          Community
        </h2>

        <hr className="w-32 h-0.5 mx-auto mb-12 bg-white" />

        <p className=" max-w-2xl leading-relaxed font-light text-center mx-auto text-white/80 md:text-xl">
          Ready to elevate your leadership journey? Experience excellence through performance and human transformation.
        </p>
      </div>

      <div className="space-y-6 w-full md:grid md:grid-cols-2 md:min-h-128.25 md:items-center lg:grid-cols-4">

        {/* Logo + social links */}
        <section className="space-y-6 flex flex-col gap-6 px-4">
          <div className="flex flex-col justify-center gap-5">
            <div className="flex items-center space-x-3">
              <hr className="w-8 h-0.5 bg-white" />
              <p className="text-xs font-medium tracking-[0.2rem] uppercase text-white">
                Our school
              </p>
            </div>

            <Link className="text-xl font-light text-">ReinaFlo</Link>

            <hr className="w-14 h-0.5 bg-white" />

            <p className="text-white/70 leading-relaxed font-light min-[780px]:max-w-md">
              Empowering individuals through elite performance principles, resilience, and a commitment to lasting impact.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map(link => (
              <span
                key={link.id}
                className="border p-3 bg-white/5 border-white/10 text-white/70 hover:border-blue-700/50 hover:bg-blue-700/50 backdrop-blur-sm transition-all duration-300 group"
              >
                <a href={link.path} rel="noopener noreferrer" target="_blank">{link.icons}</a>
              </span>
            ))}
          </div>
        </section>

        {/* Academics +31 6 57105735 */}
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

          <nav className="space mt-6">
            <ul className="flex flex-col gap-4">
              {learningProgram.map(link => (
                <li key={link.id} className="flex items-center">
                  {link.icon}
                  <Link className="text-white/70 text-[14px] font-light">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        {/* Quick Links */}
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

          <nav className="mt-6">
            <ul className="flex flex-col gap-4">
              {navigateLinks.map(link => (
                <li key={link.id} className="flex items-center">
                  {link.icon}
                  <Link className="text-white/70 text-[14px] font-light">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        {/* Contact Us */}
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
              <span className="p-2 bg-white rounded-lg backdrop-blur-sm">
                <CiLocationOn className="text-black" />
              </span>
              <p className="text-white/70 font-light leading-relaxed">
                Lutsborgsweg 74, 9752 VX Haren Groningen The Netherlands,
                Registered under BTW-id: NL0034763665B41

              </p>
            </address>

            <li className="flex items-center space-x-4">
              <span className="p-2 bg-white rounded-lg backdrop-blur-sm">
                <LuPhone className="text-black" />
              </span>
              <p className="text-white/70 font-light leading-relaxed">
                +234 707 932 3077
              </p>
            </li>

            <li className="flex items-center space-x-4">
              <span className="p-2 bg-white rounded-lg backdrop-blur-sm">
                <CiMail className="text-black" />
              </span>
              <p className="text-white/70 font-light whitespace-nowrap leading-relaxed">
                Reina-Flor.okori@olympian.org
              </p>
            </li>
          </ul>

          <Link
            className="group font-medium tracking-[0.2rem] rounded relative px-8 py-3 bg-white text-black b text-base transition-all duration-300 overflow-hidden w-full backdrop-blur-sm text-center"
            to="/contact"
          >
            Apply Now
          </Link>
        </section>



        <div className="w-full  px-4 py-6 flex flex-col gap-5 items-stretch md:col-span-2 lg:col-span-4">
          <hr className="w-full h-px bg-linear-to-r from-transparent via-blue-700/50 to-transparent" />

          <p className="w-full text-sm text-white/50 text-center font-light">
            Copyright © 2026 ReinaFlor-Okori. <span>All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}