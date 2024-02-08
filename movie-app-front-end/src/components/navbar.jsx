import React, { useState } from "react";
import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import { SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import Dropdown from "./dropdown";
import axios from "axios";

function Navbar({
  loggedIn,
  setPage,
  currentPage,
  searchFunc,
  setPageAmount,
  setPageNumber,
}) {
  const isMobile = useMediaQuery({
    query: "(min-width: 800px)",
  });

  if (currentPage != "browse" || currentPage != "myList") {
    currentPage = "browse";
  }

  const handleSearch = () => {
    const title = document.getElementById("SearchBox").value;
    const genre = document.getElementById("dropdown-selection").innerHTML;
    let genreId = "";
    if (genre != "Genre") {
      genreId = document.getElementById(genre + "-id-value").innerHTML;
    } else {
      genreId = 0;
    }

    axios
      .get("/api/search/movie/" + title + "/genre/" + genreId + "/page/" + 1)
      .then((resp) => {
        setPage("resultPage");
        console.log(resp.data);
        searchFunc(resp.data["movie_data"]);
        setPageAmount(resp.data["total_pages"]);
        setPageNumber(resp.data["current_page"]);
      });
  };

  const pageHandler = (page) => {
    setPage(page);
  };

  const [Open, setOpen] = useState(false);

  return (
    <div className="max-w-screen sticky top-0 flex w-full items-center bg-gradient-to-b from-black from-[45%] to-transparent p-4 sm:w-full">
      <div className="flex w-full items-center sm:mx-auto sm:max-w-[1920px]">
        <div className="w-1/6">
          <img src="./logo.webp" className="w-14 sm:w-20" />
        </div>
        <div className="mx-auto flex h-min w-4/6 justify-center">
          <input
            type="text"
            id="SearchBox"
            autoComplete="off"
            className="text-md w-[80%] rounded-l-3xl bg-zinc-800/70 pl-3 text-left focus:outline-none md:w-[50%] lg:text-center"
          />
          <Dropdown />
          <div
            onClick={handleSearch}
            className="flex items-center rounded-r-3xl bg-zinc-800/70 hover:cursor-pointer hover:bg-zinc-700/70 hover:text-zinc-400"
          >
            <IoSearchOutline size={20} className="m-2 mr-3" />
          </div>
        </div>
        <ul className="right-0 mx-auto hidden w-max items-center justify-center gap-8 text-lg md:flex">
          {loggedIn ? (
            <>
              <li
                className="w-max hover:cursor-pointer"
                onClick={() => pageHandler("myList")}
              >
                <p className="ml-1 justify-center">My List</p>
                <p
                  className={
                    (currentPage == "myList" ? "" : "hidden") +
                    " h-[0.1rem] w-[107%] rounded-xl bg-red-700/60"
                  }
                ></p>
              </li>
              <li
                className="hover:cursor-pointer"
                onClick={() => pageHandler("browse")}
              >
                <p className="ml-1 justify-center">Browse</p>
                <p
                  className={
                    (currentPage == "browse" ? "" : "hidden") +
                    " h-[0.1rem] w-[107%] rounded-xl bg-red-700/60"
                  }
                ></p>
              </li>
              <li>
                <UserButton afterSignOutUrl="/" />
              </li>
            </>
          ) : (
            <>
              <li>
                <SignInButton>Login</SignInButton>
              </li>
              <li className="w-max rounded-md bg-red-700 px-2 py-1">
                <SignUpButton />
              </li>
            </>
          )}
        </ul>
        {Open ? (
          <IoCloseOutline
            size={30}
            className="hover:cursor-pointer md:hidden"
            onClick={() => setOpen(!Open)}
          />
        ) : (
          <IoIosMenu
            size={30}
            className="hover:cursor-pointer md:hidden"
            onClick={() => setOpen(!Open)}
          />
        )}
      </div>
      {isMobile ? null : (
        <div
          className={
            (Open ? "left-0" : "left-[-100%]") +
            " fixed top-0 h-screen w-1/2 bg-black/90 duration-200 ease-in-out"
          }
        >
          <div className="flex w-full">
            <img src="./logo.webp" className="m-4 w-14 sm:w-20" />
            <div className=" m-4 ml-auto">
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
          <ul className="mt-20 w-full text-center text-white">
            <li
              className={
                (currentPage == "browse" ? "bg-red-950/80 " : null) +
                "border-b-2 border-red-950/50 p-4 hover:cursor-pointer hover:bg-red-950/80"
              }
              onClick={() => pageHandler("browse")}
            >
              Browse
            </li>
            <li
              className={
                (currentPage == "myList" ? "bg-red-950/80 " : null) +
                "border-b-2 border-red-950/50 p-4 hover:cursor-pointer hover:bg-red-950/80"
              }
              onClick={() => pageHandler("myList")}
            >
              My List
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
