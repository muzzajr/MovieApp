import React from "react";
import { IoStar, IoCloseOutline } from "react-icons/io5";
import { MdHowToVote } from "react-icons/md";

function DetailsPage({ data, closeFunc }) {
  return (
    <div className="fixed top-20 ml-4 w-[95%] max-w-[95%] sm:top-44">
      <div className="relative mx-auto max-h-[90vh] justify-center overflow-scroll rounded-lg bg-zinc-950/95 md:max-h-[60vh] md:max-w-[75vw]">
        <IoCloseOutline
          size={30}
          className="absolute right-0 m-1 mr-1 hover:cursor-pointer"
          onClick={() => closeFunc(false)}
        />
        <div className="gap-2 sm:flex">
          <div className="flex-inline mx-auto w-4/5 pt-8 sm:ml-3 md:ml-4 md:mt-4 md:w-1/3 md:pt-0">
            <img
              src={"http://image.tmdb.org/t/p/w500/" + data.poster_path}
              className="w-full rounded-md"
            />
            <div className=" mr-auto flex">
              <div className="left-0 flex h-min items-center">
                <p className="my-auto mt-1 w-max p-1 text-sm">
                  <span className="text-xs text-zinc-400">Rating: </span>
                  {Number(data.vote_average).toPrecision(2)}
                </p>
                <IoStar className=" text-yellow-300" />
              </div>
              <div className="right-0 ml-auto flex h-min items-center">
                <p className=" my-auto mt-1 w-max p-1 text-sm">
                  <span className="text-xs text-zinc-400">Votes: </span>
                  {data.vote_count}
                </p>
                <MdHowToVote className="text-red-900" />
              </div>
            </div>
          </div>
          <div className="m-2 mx-auto pl-4 pt-4 md:w-4/5 md:pl-0">
            <div className="flex items-baseline py-2">
              <p className="pt-1 text-sm text-zinc-400">Title:</p>
              <p className="break-words px-2 text-4xl">{data.title}</p>
            </div>
            <p className="w-max py-2">
              <span className="text-sm text-zinc-400">Original Language: </span>
              {data.original_language}
            </p>
            <p className="py-2">
              <span className="text-sm text-zinc-400">Realease Date: </span>
              {data.release_date}
            </p>
            <div className="flex py-2">
              <p className="pt-1 text-sm text-zinc-400">Overview:</p>
              <p className="max-w-[80%] px-2">{data.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
