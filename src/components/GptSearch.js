import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestions from "./GptMoviesSuggestions";
import { BGImg } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-30">
        <img
          className="h-screen object-cover md:h-screen w-screen object-cover"
          src={BGImg}
          alt="BG img"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMoviesSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
