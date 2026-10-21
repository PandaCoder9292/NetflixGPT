import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[12%] px-20 absolute top-0 left-0 text-white bg-gradient-to-r from-black pointer-events-none">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4 line-clamp-[7]">{overview}</p>
      <div className="pointer-events-auto flex items-center gap-3">
        <button className="bg-white text-black font-semibold py-2.5 px-8 text-lg rounded flex items-center gap-2 hover:bg-opacity-80 transition">
          ▷ Play
        </button>
        <button className="bg-gray-500 bg-opacity-50 text-white font-semibold py-2.5 px-8 text-lg rounded flex items-center gap-2 hover:bg-opacity-30 transition">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
