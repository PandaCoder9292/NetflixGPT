import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  // Early Return
  if (!movies) {
    return;
  }

  const mainMovie = movies[3];
  //console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative w-screen ">
      <VideoBackground movieId={id} />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
