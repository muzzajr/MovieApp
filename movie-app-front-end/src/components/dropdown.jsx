import React, { useState } from "react";

function Dropdown() {
  const [Open, setOpen] = useState(false);
  const [Genre, setGenre] = useState("Genre");

  const genreHandler = (genreItem) => {
    setGenre(genreItem);
  };

  return (
    <div className="relative inline-block text-left">
      <div
        className="inline-flex w-max justify-center gap-x-1.5 bg-zinc-800/70 px-3 py-2 text-sm font-semibold hover:cursor-pointer hover:rounded-sm hover:bg-zinc-700/70"
        onClick={() => setOpen(!Open)}
      >
        <button
          type="button"
          className=""
          id="dropdown-selection"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {Genre}
        </button>
        <svg
          className="-mr-1 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div
        className={
          (Open ? null : "hidden") +
          " absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-zinc-800/95 text-center shadow-lg focus:outline-none"
        }
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
      >
        <div className="py-1" role="none" id="dropdown-list">
          {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
          <a
            className="mx-4 block rounded-md py-2 text-sm hover:cursor-pointer hover:bg-zinc-700/70"
            role="menuitem"
            tabIndex="-1"
            id="Any"
            value="Any"
            onClick={() => {
              genreHandler("Any");
              setOpen(!Open);
            }}
          >
            <div className="hidden" id="Any-id-value">
              Any
            </div>
            Any
          </a>
          <a
            className="mx-4 block rounded-md py-2 text-sm hover:cursor-pointer hover:bg-zinc-700/70"
            role="menuitem"
            tabIndex="-1"
            id="Action"
            onClick={() => {
              genreHandler("Action");
              setOpen(!Open);
            }}
          >
            <div className="hidden" id="Action-id-value">
              28
            </div>
            Action
          </a>
          <a
            className="mx-4 block rounded-md py-2 text-sm hover:cursor-pointer hover:bg-zinc-700/70"
            role="menuitem"
            tabIndex="-1"
            id="Adventure"
            onClick={() => {
              genreHandler("Adventure");
              setOpen(!Open);
            }}
          >
            <div className="hidden" id="Adventure-id-value">
              12
            </div>
            Adventure
          </a>
          <a
            className="mx-4 block rounded-md py-2 text-sm hover:cursor-pointer hover:bg-zinc-700/70"
            role="menuitem"
            tabIndex="-1"
            id="Animation"
            onClick={() => {
              genreHandler("Animation");
              setOpen(!Open);
            }}
          >
            <div className="hidden" id="Animation-id-value">
              16
            </div>
            Animation
          </a>
          <a
            className="mx-4 block rounded-md py-2 text-sm hover:cursor-pointer hover:bg-zinc-700/70"
            role="menuitem"
            tabIndex="-1"
            id="Comedy"
            onClick={() => {
              genreHandler("Comedy");
              setOpen(!Open);
            }}
          >
            <div className="hidden" id="Comedy-id-value">
              35
            </div>
            Comedy
          </a>
          <a
            className="mx-4 block rounded-md py-2 text-sm hover:cursor-pointer hover:bg-zinc-700/70"
            role="menuitem"
            tabIndex="-1"
            id="Crime"
            onClick={() => {
              genreHandler("Crime");
              setOpen(!Open);
            }}
          >
            <div className="hidden" id="Crime-id-value">
              80
            </div>
            Crime
          </a>
          <a
            className="mx-4 block rounded-md py-2 text-sm hover:cursor-pointer hover:bg-zinc-700/70"
            role="menuitem"
            tabIndex="-1"
            id="Documentary"
            onClick={() => {
              genreHandler("Documentary");
              setOpen(!Open);
            }}
          >
            <div className="hidden" id="Documentary-id-value">
              99
            </div>
            Documentary
          </a>
          <a
            className="mx-4 block rounded-md py-2 text-sm hover:cursor-pointer hover:bg-zinc-700/70"
            role="menuitem"
            tabIndex="-1"
            id="Drama"
            onClick={() => {
              genreHandler("Drama");
              setOpen(!Open);
            }}
          >
            <div className="hidden" id="Drama-id-value">
              18
            </div>
            Drama
          </a>
          <a
            className="mx-4 block rounded-md py-2 text-sm hover:cursor-pointer hover:bg-zinc-700/70"
            role="menuitem"
            tabIndex="-1"
            id="Family"
            onClick={() => {
              genreHandler("Family");
              setOpen(!Open);
            }}
          >
            <div className="hidden" id="Family-id-value">
              10751
            </div>
            Family
          </a>
          <a
            className="mx-4 block rounded-md py-2 text-sm hover:cursor-pointer hover:bg-zinc-700/70"
            role="menuitem"
            tabIndex="-1"
            id="Fantasy"
            onClick={() => {
              genreHandler("Fantasy");
              setOpen(!Open);
            }}
          >
            <div className="hidden" id="Fantasy-id-value">
              14
            </div>
            Fantasy
          </a>
          <a
            className="mx-4 block rounded-md py-2 text-sm hover:cursor-pointer hover:bg-zinc-700/70"
            role="menuitem"
            tabIndex="-1"
            id="History"
            onClick={() => {
              genreHandler("History");
              setOpen(!Open);
            }}
          >
            <div className="hidden" id="History-id-value">
              36
            </div>
            History
          </a>
          <a
            className="mx-4 block rounded-md py-2 text-sm hover:cursor-pointer hover:bg-zinc-700/70"
            role="menuitem"
            tabIndex="-1"
            id="Horror"
            onClick={() => {
              genreHandler("Horror");
              setOpen(!Open);
            }}
          >
            <div className="hidden" id="Horror-id-value">
              27
            </div>
            Horror
          </a>
          <a
            className="mx-4 block rounded-md py-2 text-sm hover:cursor-pointer hover:bg-zinc-700/70"
            role="menuitem"
            tabIndex="-1"
            id="Music"
            onClick={() => {
              genreHandler("Music");
              setOpen(!Open);
            }}
          >
            <div className="hidden" id="Music-id-value">
              10402
            </div>
            Music
          </a>
          <a
            className="mx-4 block rounded-md py-2 text-sm hover:cursor-pointer hover:bg-zinc-700/70"
            role="menuitem"
            tabIndex="-1"
            id="Mystery"
            onClick={() => {
              genreHandler("Mystery");
              setOpen(!Open);
            }}
          >
            <div className="hidden" id="Mystery-id-value">
              9648
            </div>
            Mystery
          </a>
          <a
            className="mx-4 block rounded-md py-2 text-sm hover:cursor-pointer hover:bg-zinc-700/70"
            role="menuitem"
            tabIndex="-1"
            id="Romance"
            onClick={() => {
              genreHandler("Romance");
              setOpen(!Open);
            }}
          >
            <div className="hidden" id="Romance-id-value">
              10749
            </div>
            Romance
          </a>
          <a
            className="mx-4 block rounded-md py-2 text-sm hover:cursor-pointer hover:bg-zinc-700/70"
            role="menuitem"
            tabIndex="-1"
            id="Science Fiction"
            onClick={() => {
              genreHandler("Science Fiction");
              setOpen(!Open);
            }}
          >
            <div className="hidden" id="Science Fiction-id-value">
              878
            </div>
            Science Fiction
          </a>
          <a
            className="mx-4 block rounded-md py-2 text-sm hover:cursor-pointer hover:bg-zinc-700/70"
            role="menuitem"
            tabIndex="-1"
            id="TV Movie"
            onClick={() => {
              genreHandler("TV Movie");
              setOpen(!Open);
            }}
          >
            <div className="hidden" id="TV Movie-id-value">
              10770
            </div>
            TV Movie
          </a>
          <a
            className="mx-4 block rounded-md py-2 text-sm hover:cursor-pointer hover:bg-zinc-700/70"
            role="menuitem"
            tabIndex="-1"
            id="Thriller"
            onClick={() => {
              genreHandler("Thriller");
              setOpen(!Open);
            }}
          >
            <div className="hidden" id="Thriller-id-value">
              53
            </div>
            Thriller
          </a>
          <a
            className="mx-4 block rounded-md py-2 text-sm hover:cursor-pointer hover:bg-zinc-700/70"
            role="menuitem"
            tabIndex="-1"
            id="War"
            onClick={() => {
              genreHandler("War");
              setOpen(!Open);
            }}
          >
            <div className="hidden" id="War-id-value">
              10752
            </div>
            War
          </a>
          <a
            className="mx-4 block rounded-md py-2 text-sm hover:cursor-pointer hover:bg-zinc-700/70"
            role="menuitem"
            tabIndex="-1"
            id="Western"
            onClick={() => {
              genreHandler("Western");
              setOpen(!Open);
            }}
          >
            <div className="hidden" id="Western-id-value">
              37
            </div>
            Western
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
