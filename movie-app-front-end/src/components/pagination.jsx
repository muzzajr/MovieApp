import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";

function Pagination({ totalPages, pageNum, search }) {
  return (
    <div className="my-4 h-20 w-full">
      <div className="flex items-center justify-center gap-8 text-red-700">
        <IoIosArrowBack
          size={30}
          className="hover:cursor-pointer"
          onClick={() => search(Number(pageNum) - 1)}
        />
        <RxDoubleArrowLeft
          size={25}
          className="hover:cursor-pointer"
          onClick={() => search(1)}
        />
        <p className=" min-w-max text-lg font-thin text-white">
          Page{" "}
          <span className="font font-extrabold text-red-700">{pageNum}</span> of{" "}
          {totalPages}
        </p>
        <RxDoubleArrowRight
          size={25}
          className="hover:cursor-pointer"
          onClick={() => search(Number(totalPages))}
        />
        <IoIosArrowForward
          size={30}
          className="hover:cursor-pointer"
          onClick={() => search(Number(pageNum) + 1)}
        />
      </div>
    </div>
  );
}

export default Pagination;
