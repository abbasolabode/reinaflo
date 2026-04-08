import { IoBookOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { HiOutlineUsers } from "react-icons/hi2";

export default function OurFacilities() {
  return (
    <div className="py-5 px-4 min-h-130.5">
      <div className="flex flex-col items-center space-y-8 ">
        <div className="flex items-center justify-center space-x-4">
          <hr className="w-12 h-px bg-linear-to-r from-blue-800 to-emerald-800" />
          <p className="text-sm text-center uppercase font-medium text-slate-800 tracking-wider ">
            Olympic Leadership & Performance
          </p>
          <hr className="w-12 h-px bg-linear-to-r from-blue-800 to-emerald-800" />
        </div>

        <h2 className="text-4xl text-slate-900">
          Our{" "}
          <span className="bg-gradient-to-r from-blue-800 to-emerald-800 bg-clip-text text-transparent font-medium">
            Impact
          </span>
        </h2>

        <p className="text-lg text-center text-slate-800 font-light mx-auto">
          Transforming leaders, organizations, and institutions through elite performance principles, resilience, and human-centered development
        </p>

        <p className="text-lg font-light p-6 bg-linear-to-r from-blue-50 to-emerald-50 rounded-2xl mx-auto text-center">
          “From Olympic excellence to leadership transformation”
        </p>

        <div className="flex p-6 items-center justify-center space-x-8 mb-12 ">
          <div className="min-h-21 flex flex-col items-center gap-2 text-center">
            <IoBookOutline className="text-center flex justify-center" size={20} />
            <p className="text-[24px] font-light text-slate-900">20+ Years</p>
            <p className="text-sm text-slate-500 uppercase tracking-wide">
              Elite Experience
            </p>
          </div>

          <div className="min-h-21 flex flex-col items-center gap-2 text-center">
            <HiOutlineUsers className="text-center flex justify-center" size={20} />
            <p className="text-[24px] font-light text-slate-900">Global</p>
            <p className="text-sm text-slate-500 uppercase tracking-wide">
              Organizations Impacted
            </p>
          </div>

          <div className="min-h-21 flex flex-col items-center gap-2 text-center">
            <GoHome className="text-center flex justify-center" size={20} />
            <p className="text-[24px] font-light text-slate-900">Olympic</p>
            <p className="text-sm text-slate-500 uppercase tracking-wide">
              Leadership Standard
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}