import React from "react";
import Container1 from "./images/Container (1).svg";
import Container2 from "./images/Container (2).svg";
import Container3 from "./images/Container (3).svg";
import Container4 from "./images/Container (4).svg";

const TrendingLeft: React.FC = () => {
  return (
    <div className="bg-slate-900 p-8">
      <div className="flex justify-between items-center mb-8">
        <div className="bg-red-500 text-white text-sm font-semibold uppercase px-4 py-2 rounded">
          Trending Gaming News
        </div>
        <button className="bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium px-4 py-2 rounded flex items-center gap-2 transition-colors duration-200">
          VIEW ALL
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div className="flex gap-6">
        <div className="relative flex-1 group cursor-pointer">
          <div className="relative w-full h-96 rounded-xl overflow-hidden">
            <img
              src={Container1}
              alt="War Thunder aerial combat"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>

            <button className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
              </div>
            </button>

            <div className="absolute top-4 left-4">
              <span className="bg-gray-700 text-white text-xs font-semibold uppercase px-3 py-1 rounded tracking-wide">
                FIGHTER
              </span>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-white text-2xl font-bold leading-tight mb-4 group-hover:text-red-400 transition-colors cursor-pointer">
              Exciting New Browned Chocolate Gaming Cookies Daily Breakfast
            </h3>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>
                BY <span className="text-white font-medium">ADMIN</span>
              </span>
              <span className="text-gray-500">•</span>
              <span>27 AUGUST, 2024</span>
            </div>
          </div>
        </div>
        <div className="w-80 space-y-4">
          <div className="group cursor-pointer flex gap-4">
            <div className="relative w-32 h-20 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={Container2}
                alt="Gaming article"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>

              <button className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5"></div>
                </div>
              </button>

              <div className="absolute top-1 right-1">
                <span className=" bg-black/40 text-white text-xs font-semibold uppercase px-2 py-1 rounded tracking-wide">
                  ANIMATION
                </span>
              </div>
            </div>

            <div className="flex-1">
              <h4 className="text-white text-lg font-semibold hover:text-red-400 transition-colors leading-tight mb-2">
                A Guide To Getting Data Visualization Right
              </h4>
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <span>
                  BY <span className="text-white font-medium">ADMIN</span>
                </span>
                <span className="text-gray-500">•</span>
                <span>27 AUGUST, 2024</span>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer flex gap-4">
            <div className="relative w-32 h-20 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={Container3}
                alt="Gaming article"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>

              <button className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5"></div>
                </div>
              </button>

              <div className="absolute top-1 right-1">
                <span className=" bg-black/40 text-white text-xs font-semibold uppercase px-2 py-1 rounded tracking-wide">
                  ACTION
                </span>
              </div>
            </div>

            <div className="flex-1">
              <h4 className="text-white text-lg font-semibold hover:text-red-400 transition-colors leading-tight mb-2">
                Fluid Typography: Predicting A Problem With Your User's Zoom-In
              </h4>
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <span>
                  BY <span className="text-white font-medium">ADMIN</span>
                </span>
                <span className="text-gray-500">•</span>
                <span>27 AUGUST, 2024</span>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer flex gap-4">
            <div className="relative w-32 h-20 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={Container4}
                alt="Gaming article"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>

              <button className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5"></div>
                </div>
              </button>

              <div className="absolute top-1 right-1">
                <span className=" bg-black/40    text-white text-xs font-semibold uppercase px-2 py-1 rounded tracking-wide">
                  RACING
                </span>
              </div>
            </div>

            <div className="flex-1">
              <h4 className="text-white text-lg font-semibold hover:text-red-400 transition-colors leading-tight mb-2">
                Deploying CSS Logical Properties On Web Apps
              </h4>
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <span>
                  BY <span className="text-white font-medium">ADMIN</span>
                </span>
                <span className="text-gray-500">•</span>
                <span>27 AUGUST, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingLeft;
