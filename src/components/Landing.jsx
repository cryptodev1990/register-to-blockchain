import React from "react";
import Auth from "../assets/background_svg.svg";

export default function Landing() {
  return (
    <div className="flex flex-col">
      <div className="flex py-32 gap-10 px-12">
        <div className="flex flex-col w-1/2 gap-6 items-center">
          <h1 className="flex items-end font-semibold text-gray-600">
            Land
            <br />
            Registration Using
            <br />
            Blockchain
          </h1>
          <div className="flex gap-12 items-center">
            <div className="rounded-lg px-10 py-4 hover:cursor-pointer bg-blue-400 text-white">
              Learn More
            </div>
            <div className="flex gap-3">
              <svg
                className="h-8 w-8 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h4 className="text-blue-400">Watch demo</h4>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img src={Auth} alt="auth" title="Auth" />
        </div>
      </div>
    </div>
  );
}
