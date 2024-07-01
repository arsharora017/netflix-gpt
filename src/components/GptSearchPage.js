import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestions from "./GptMoviesSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover md:h-full "
          src={BG_URL}
          alt="background pic"
        />
      </div>
      <div>
        <GptSearchBar />
        <GptMoviesSuggestions />
      </div>
    </>
  );
};

export default GptSearchPage;
