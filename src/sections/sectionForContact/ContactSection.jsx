import { CiLocationOn, CiMail, CiPhone, CiUser } from "react-icons/ci";
import { TiMessage } from "react-icons/ti";
import { IoIosSend } from "react-icons/io";

export default function ContactSection() {
  return (
    <div className="w-full min-h-screen bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h2 className="text-4xl font-light text-black">
            Send A Message
          </h2>

          <div className="space-y-4">
            <h3 className="text-xl font-medium text-black">
              ReinaFlo Inquiry Form
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Connect with us to explore opportunities in leadership, performance, and transformation. Submit your inquiry below and we’ll get back to you shortly.
            </p>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-6 pt-6 border-t border-gray-200">

            <div className="flex items-start gap-4">
              <span className="text-black text-xl"><CiMail /></span>
              <div>
                <p className="font-medium text-black">Email Address</p>
                <p className="text-gray-600">Reina-Flor.okori@olympian.org</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-black text-xl"><CiLocationOn /></span>
              <address className="not-italic text-gray-600">
                Lutsborgsweg 74, 9752 VX Haren Groningen, The Netherlands <br />
                BTW-id: NL0034763665B41
              </address>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <section className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

          <form className="space-y-6">

            {/* NAME + EMAIL */}
            <div className="grid md:grid-cols-2 gap-6">

              <div className="space-y-2">
                <label className="text-sm text-gray-700 flex items-center gap-2">
                  <CiUser /> Full Name <span className="text-black">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black transition"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-700 flex items-center gap-2">
                  <CiMail /> Email <span className="text-black">*</span>
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black transition"
                  placeholder="Your email"
                />
              </div>

            </div>

            {/* PHONE */}
            <div className="space-y-2">
              <label className="text-sm text-gray-700 flex items-center gap-2">
                <CiPhone /> Phone <span className="text-black">*</span>
              </label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black transition"
                placeholder="Your phone number"
              />
            </div>

            {/* MESSAGE */}
            <div className="space-y-2">
              <label className="text-sm text-gray-700 flex items-center gap-2">
                <TiMessage /> Message <span className="text-black">*</span>
              </label>
              <textarea
                rows="5"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black transition resize-none"
                placeholder="Write your message..."
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 rounded-md font-medium hover:bg-white hover:text-black border border-black transition-all duration-300"
            >
              <IoIosSend />
              Send Message
            </button>

          </form>
        </section>
      </div>
    </div>
  );
}