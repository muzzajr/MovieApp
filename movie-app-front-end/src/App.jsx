import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/navbar";
import BrowsePage from "./pages/browsePage";
import { SignedOut, SignedIn, useUser } from "@clerk/clerk-react";
import ResultsPage from "./pages/resultsPage";

function App() {
  const [CurrentPage, setCurrentPage] = useState("browse");
  const [SearchResults, setSearchResults] = useState([]);
  const [TotalPages, setTotalPages] = useState(1);
  const [PageNum, setPageNum] = useState(1);
  const currentUser = useUser();

  useEffect(() => {
    if (currentUser.isSignedIn != undefined && currentUser.isSignedIn) {
      axios.get("/db/user-exists/" + currentUser.user.id).then((resp) => {
        console.log("user exists: ", resp.data);
        if (resp.data == "false") {
          axios.get("/db/create/" + currentUser.user.id).then((resp) => {
            console.log(resp.data);
          });
        }
      });
    }
  }, [currentUser]);

  const handleSearch = (pageNumber) => {
    const title = document.getElementById("SearchBox").value;
    const genre = document.getElementById("dropdown-selection").innerHTML;
    let genreId = "";
    let page = "1";
    if (genre != "Genre") {
      genreId = document.getElementById(genre + "-id-value").innerHTML;
    } else {
      genreId = 0;
    }
    if (pageNumber < 1) {
      setPageNum("1");
      page = "1";
    } else if (pageNumber > Number(TotalPages)) {
      setPageNum(TotalPages);
      page = totalPages;
    } else {
      setPageNum(String(pageNumber));
      page = String(pageNumber);
    }
    console.log("Current pageNumber: ", PageNum);
    console.log("New pageNumber: ", page);

    axios
      .get("/api/search/movie/" + title + "/genre/" + genreId + "/page/" + page)
      .then((resp) => {
        console.log(resp.data);
        setCurrentPage("resultPage");
        setSearchResults(resp.data["movie_data"]);
        setTotalPages(resp.data["total_pages"]);
      });
  };

  return (
    <div className="w-full overflow-x-hidden bg-[url(../public/background-1080p.webp)] bg-cover bg-no-repeat font-nunito text-white">
      <SignedOut>
        <Navbar
          loggedIn={false}
          setPage={setCurrentPage}
          currentPage={CurrentPage}
          searchFunc={setSearchResults}
          setPageAmount={setTotalPages}
          setPageNumber={setPageNum}
        />
      </SignedOut>
      <SignedIn>
        <Navbar
          loggedIn={true}
          setPage={setCurrentPage}
          currentPage={CurrentPage}
          searchFunc={setSearchResults}
          setPageAmount={setTotalPages}
          setPageNumber={setPageNum}
        />
      </SignedIn>
      {CurrentPage == "browse" ? <BrowsePage /> : null}
      {CurrentPage == "resultPage" && SearchResults != undefined ? (
        <ResultsPage
          data={SearchResults}
          totalPages={TotalPages}
          pageNumber={PageNum}
          search={handleSearch}
        />
      ) : null}
    </div>
  );
}

export default App;
