import React from "react";
import MovieList from "../components/movieList";

function BrowsePage() {
  return (
    <>
      <MovieList title={"Top Rated"} genre={"Any"} sortBy={"top-rated"} />
      <MovieList title={"Most Popular"} genre={"Any"} sortBy={"most-popular"} />
      <MovieList title={"Upcoming"} genre={"Any"} sortBy={"upcoming"} />
    </>
  );
}

export default BrowsePage;
