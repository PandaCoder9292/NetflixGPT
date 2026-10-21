import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video h-full pt-[15%] md:pt-[12%] px-6 md:px-20 absolute top-0 left-0 text-white bg-gradient-to-b md:bg-gradient-to-r from-black via-black/80 md:via-black/60 to-transparent pointer-events-none flex flex-col justify-center md:block">
      {/* Title */}
      <h1 className="text-xl font-bold md:text-5xl">{title}</h1>

      {/* Overview: Hidden on mobile, visible on desktop */}
      <div className="hidden md:inline-block w-1/4 py-6 text-lg">
        <p className="line-clamp-[6]">{overview}</p>
      </div>

      {/* Buttons */}
      <div className="pointer-events-auto flex items-center gap-2 md:gap-3 mt-2 md:mt-0">
        <button className="bg-white text-black font-semibold py-1 px-3 text-xs md:py-2.5 md:px-8 md:text-lg rounded flex items-center gap-1 hover:bg-opacity-80 transition cursor-pointer">
          ▷ Play
        </button>
        <button className="bg-gray-500 bg-opacity-50 text-white font-semibold py-1 px-3 text-xs md:py-2.5 md:px-8 md:text-lg rounded flex items-center gap-1 hover:bg-opacity-30 transition cursor-pointer">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
