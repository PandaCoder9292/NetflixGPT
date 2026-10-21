import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posertPath, name }) => {
  if (!posertPath) {
    return null;
  }
  return (
    <div className="w-48 pr-4">
      <img alt={name} src={IMG_CDN_URL + posertPath} />
    </div>
  );
};

export default MovieCard;
