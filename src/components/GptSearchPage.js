import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestions from "./GptMoviesSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_URL} alt="background pic" />
      </div>

      <GptSearchBar />
      <GptMoviesSuggestions />
    </div>
  );
};

export default GptSearchPage;
