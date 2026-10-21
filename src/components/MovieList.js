import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  //console.log(movies);
  if (!movies) {
    return null;
  }
  return (
    <div className="p-6 bg-black">
      <h1 className="text-xl md:text-3xl font-semibold py-6 text-white">
        {title}
      </h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              posertPath={movie.poster_path}
              name={movie.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
