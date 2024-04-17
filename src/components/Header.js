import { Bell, Search, Upload, User } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toogleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SERAHC_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();

  const searchCache = useSelector((state) => state.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SERAHC_API + searchQuery);
    const json = await data.json();
    console.log("API Call " + searchQuery);
    setSuggestion(json[1]);
    dispatch(cacheResults({
      [searchQuery]:json[1]
    }));
  };

  const handletooglemenu = () => {
    dispatch(toogleMenu());
  };
  return (
    <>
      <div className="grid grid-flow-col gap-20 lg:gap-80 justify-between pt-2 mb-6 mx-4">
        <div className={"gap-4 flex-grow justify-start p-2  flex  col-span-1"}>
          <img
            onClick={handletooglemenu}
            className=" h-8 cursor-pointer"
            alt="menu icon"
            src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          />
          <img
            className=" h-8 "
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
          />
        </div>

        <div>
          <div className=" flex flex-grow w-[574px] col-span-3">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setShowSuggestion(false)}
            />
            <button className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0">
              <Search />
            </button>
          </div>
          {showSuggestion && (
            <div className="fixed absolute bg-white py-2 px-5 w-[32rem] rounded-lg">
              <ul>
                {suggestion.map((sug, ind) => (
                  <li
                    key={ind}
                    className="flex-shrink-20 flex  py-2 shadow-sm hover:bg-gray-100"
                  >
                    <Search /> {sug}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className={"flex-shrink-0 md:gap-5 flex col-span-1"}>
          <button size="icon" variant="ghost">
            <Upload />
          </button>
          <button size="icon" variant="ghost">
            <Bell />
          </button>
          <button size="icon" variant="ghost">
            <User />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
