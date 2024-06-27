import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMoviesSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-85">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
      {/* <MovieList title={movieNames[0]} movies={movieResults[0]} /> */}
    </div>
  );
};

export default GptMoviesSuggestions;
