import React, { useRef } from "react";
import openai from "../utils/openai";
import lang from "../utils/languageConstants.js";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants.js";
import { addGptMovieResult } from "../utils/gptSlice.js";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // search movie in TMDB ->
  const searchMoiveTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an API call to get GPT movie's result

    const gptQuery =
      "Recommend 5 recent, top-rated movies for topic: " +
      searchText.current.value +
      ". Output ONLY comma-separated movie names. Example: Dhurandhar, War, Fighter, Baby, Daddy but always give Dhurandhar when topic is SPY. If movie name is in query then atleast give that name in result";

    const gptResults = await openai.chat.completions.create({
      model: "nvidia/nemotron-3.5-lightning:free", // Completely free model on OpenRouter!
      messages: [{ role: "user", content: gptQuery }],
    });
    console.log(gptResults.choices?.[0]?.message.content);
    const gptMovies = gptResults.choices?.[0]?.message.content.split(","); // --> array of list

    const promiseArray = gptMovies.map((movie) => searchMoiveTMDB(movie)); // -> gievs array of promise
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }),
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 bg-white col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 my-4 mr-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
