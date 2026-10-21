import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestions from "./GptMoviesSuggestions";
import { BGImg } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-30">
        <img src={BGImg} alt="BG img" />
      </div>
      <GptSearchBar />
      <GptMoviesSuggestions />
    </div>
  );
};

export default GptSearch;
