import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoStar } from "react-icons/io5";

function MovieItem({ data }) {
  return (
    <div className="h-68 mb-2 min-w-36 max-w-48 rounded-lg bg-zinc-900 hover:scale-[1.1] hover:transform hover:cursor-pointer hover:bg-zinc-800 hover:duration-100 hover:ease-in-out md:min-w-44">
      <div className="">
        <img
          src={"http://image.tmdb.org/t/p/w500/" + data.poster_path}
          className="rounded-t-lg"
          loading="lazy"
        />
      </div>
      <div className="m-1">
        <p className="w-full px-1 text-sm">{data.title}</p>
        <div className="flex h-min items-center">
          <p className="my-auto mt-1 p-1 text-sm">
            {Number(data.vote_average).toPrecision(2)}
          </p>
          <IoStar className=" text-yellow-300" />
        </div>
      </div>
    </div>
  );
}

function MovieList({ title, genre, sortBy }) {
  const [Data, setData] = useState([]);
  useEffect(() => {
    axios.get("/api/" + sortBy).then((resp) => {
      setData(resp.data);
    });
  }, []);

  return (
    <div className="w-screen justify-center overflow-scroll rounded-lg p-4">
      <p className="text-xl">{title}</p>
      <div className="mx-auto mt-4 flex w-full gap-4">
        {Data.map((item, val) => {
          return <MovieItem key={val} data={item} />;
        })}
      </div>
    </div>
  );
}

export default MovieList;
