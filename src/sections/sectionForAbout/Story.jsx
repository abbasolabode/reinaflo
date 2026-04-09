import { IoMdBook } from "react-icons/io";
import { HiUsers } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { GoDotFill } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const special = [
  {
    id: 1,
    text: "Elite Performance Principles",
    icon: <IoMdBook className="w-6 h-6 text-white bg-black rounded-full p-1" />,
  },
  {
    id: 2,
    text: "Leadership Architects",
    icon: <HiUsers className="w-6 h-6 text-white bg-black rounded-full p-1" />,
  },
  {
    id: 3,
    text: "Human Transformation",
    icon: <FaHeart className="w-6 h-6 text-white bg-black rounded-full p-1" />,
  },
  {
    id: 4,
    text: "Global Excellence Standards",
    icon: <GiAchievement className="w-6 h-6 text-white bg-black rounded-full p-1" />,
  },
];

const approach = [
  {
    id: 1,
    header: "Elite Performance Systems:",
    text: "Structured frameworks inspired by Olympic discipline and high-performance environments",
  },
  {
    id: 2,
    header: "Leadership Intelligence:",
    text: "Development of strategic thinking, decision-making, and adaptive leadership capacity",
  },
  {
    id: 3,
    header: "Human Transformation:",
    text: "Cultivating resilience, mindset strength, and sustainable personal growth",
  },
];

export default function Story() {
  return (
    <div className="min-h-screen w-full bg-white px-6 py-16 lg:px-16">
      
      {/* MAIN LAYOUT */}
      <div className="flex flex-col lg:flex-row gap-12">

        {/* LEFT CONTENT */}
        <section className="flex-1 space-y-10">

          {/* HEADER */}
          <div className="flex items-center gap-4">
            <hr className="w-12 h-px bg-black" />
            <h4 className="text-sm font-medium tracking-wide text-black">
              About Our School
            </h4>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-light text-black leading-tight">
              Our Story
            </h2>
            <div className="w-16 h-1 bg-black mt-3"></div>
          </div>

          {/* INTRO */}
          <p className="text-lg leading-relaxed text-black/80 font-light">
            Reina-Flor Okori Makendengue is a four-time Olympian, strategist,
            and change architect working at the intersection of{" "}
            <strong>high performance</strong>,{" "}
            <strong>leadership</strong>, and{" "}
            <strong>human development</strong>.
          </p>

          {/* HIGHLIGHT BOX */}
          <div className="border-l-4 border-black bg-gray-50 p-6 hover:translate-x-2 transition-all duration-300">
            <p className="text-black/70 leading-relaxed">
              Competing at the highest level in track and field for both France
              and Equatorial Guinea, she is among the fastest women in French
              history in the 100m hurdles. Her career reflects discipline,
              resilience, and elite performance under pressure.
            </p>
          </div>

          {/* SPECIAL */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-black">
              What Makes Us Special
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {special.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-3 border rounded-md hover:shadow-md transition"
                >
                  {item.icon}
                  <p className="text-sm font-medium text-black">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* APPROACH */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-black">
              Our Educational Approach
            </h3>

            <div className="space-y-4">
              {approach.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 hover:translate-x-2 transition"
                >
                  <GoDotFill className="mt-2 text-black shrink-0" />
                  <p className="text-black/80 leading-relaxed">
                    <strong>{item.header}</strong> {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-black text-white p-6 rounded-md space-y-3">
            <h3 className="text-lg font-semibold">
              Ready to Join Our Family?
            </h3>
            <p className="text-white/80">
              Connect with us to explore pathways into elite performance,
              leadership, and human transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 text-sm pt-2">
              <div className="flex items-center gap-2">
                <FaPhoneAlt />
                <span>+31 6 57105735</span>
              </div>

              <div className="flex items-center gap-2">
                <IoIosMail />
                <span>Reina-Flor.okori@olympian.org</span>
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT IMAGE (STICKY) */}
        <section className="flex-1 lg:sticky lg:top-10 h-[500px] lg:h-[700px] overflow-hidden rounded-xl">
          <img
            src="./images/reina-flor-flagbearer.webp"
            alt="Reina Flor Okori"
            className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition duration-500"
          />
        </section>

      </div>
    </div>
  );
}