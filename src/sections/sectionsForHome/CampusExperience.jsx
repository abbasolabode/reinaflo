import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { FiEye } from "react-icons/fi";

export default function CampusExperience() {
  return (
    <div className="space-y-8 text-center min-h-[317.333px] lg:h-[233.33px] py-4 md:-mt-20 lg:-mt-25">
        <div className="space-y-4 flex flex-col px-5 py-4">
            <h3 className="text-2xl font-light text-slate-900 lg:text-3xl">
              Experience Elite Leadership
            </h3>

            <p className="text-slate-800 mx-auto max-w-2xl">
              Discover how Olympic-level performance principles drive leadership, resilience, and transformation across organizations and individuals
            </p>

            <div className="min-[780px]:flex-row flex flex-col items-center justify-center gap-4">
                <Link className="group inline-flex items-center px-6 py-3  bg-linear-to-r from-blue-800 to bg-emerald-800 font-medium rounded-md shadow-md text-white gap-2 hover:shadow-xl transition-shadow duration-300">
                  Explore Impact <span>< GoArrowUpRight /></span>
                </Link>

                <Link className="group inline-flex items-center px-6 py-3 border gap-2 border-slate-300 text-slate-700 font-medium rounded-md hover:border-slate-400 hover:slate-50 transition-colors duration-300">
                  <span><FiEye size={20}/></span>
                  View Approach
                </Link>
            </div>

            <p className="text-sm text-slate-50 ">
              Discover the methodology behind high performance and leadership transformation
            </p>
        </div>
    </div>
  )
}