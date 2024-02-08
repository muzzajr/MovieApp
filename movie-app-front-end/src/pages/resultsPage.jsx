import React, { useState, useEffect } from "react";
import DetailsPage from "../components/detailPage";
import { IoStar, IoCloseOutline } from "react-icons/io5";
import Pagination from "../components/pagination";

function MovieItem({ data, detailPageData, detailPageOpen }) {
  let image = "/Poster_not_available.jpg";
  if (data.poster_path != null) {
    image = "http://image.tmdb.org/t/p/w500/" + data.poster_path;
  }

  const handleDetails = () => {
    detailPageOpen(true);
    detailPageData(data);
  };

  return (
    <div
      onClick={handleDetails}
      className="h-68 mb-2 min-w-36 max-w-48 rounded-lg bg-zinc-900 hover:scale-[1.1] hover:transform hover:cursor-pointer hover:bg-zinc-800 hover:duration-100 hover:ease-in-out md:min-w-44"
    >
      <div className="">
        <img src={image} className="rounded-t-lg" loading="lazy" />
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

function ResultsPage({ data, totalPages, pageNumber, search }) {
  const [DetailsOpen, setDetailsOpen] = useState(false);
  const [DetailsData, setDetailsData] = useState();

  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <div>
        <p className="p-3 text-xl">Results</p>
        <div className="mx-auto flex w-screen flex-wrap justify-center gap-2">
          {data.map((item, val) => {
            return (
              <MovieItem
                key={val}
                data={item}
                detailPageData={setDetailsData}
                detailPageOpen={setDetailsOpen}
              />
            );
          })}
        </div>
      </div>
      <Pagination
        totalPages={totalPages}
        pageNum={pageNumber}
        search={search}
      />
      {DetailsOpen && DetailsData != undefined ? (
        <DetailsPage data={DetailsData} closeFunc={setDetailsOpen} />
      ) : null}
    </>
  );
}

export default ResultsPage;
