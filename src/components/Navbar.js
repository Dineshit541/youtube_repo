import React, { useEffect, useState } from "react";
import { MdMic } from "react-icons/md";
import { HiOutlineBars3, HiMagnifyingGlass } from "react-icons/hi2";
import { BiVideoPlus } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import logo from "../assets/yt-logo-white.png";
import { Link } from "react-router-dom";
import { UseSearchSuggestion } from "../utils/UseSearchSuggestion";

const Navbar = () => {

  const [showSuggestion, setShowSuggestion] = useState(false);
  const {searchQuery ,setSearchQuery ,suggestion}=UseSearchSuggestion();
 


  return (
    <div className="bg-yt-black h-14 flex items-center pl-4 pr-5 justify-between fixed w-full z-10">
      <div className="flex justify-between items-center">
        <div className="text-yt-white p-2 w-10 text-2xl text-center hover:bg-yt-light-black rounded-full cursor-pointer">
          <HiOutlineBars3 />
        </div>
        <div className="py-5 w-32 pr-3">
          <Link to="/">
            <img src={logo} alt="" className="object-contain" />
          </Link>
        </div>
      </div>

      <div className="h-10 flex flex-row items-center">
        <div className="w-[593px] bg-yt-black flex border border-yt-light-black items-center rounded-3xl h-10">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-yt-black h-6 ml-6 text-yt-white text-start focus:outline-none pl-4"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
           <Link to={"/results?search_query=" + searchQuery}>
          <button className="w-16 h-10 bg-yt-light-black px-2 py-0.5 rounded-r-3xl border-l-2 border-yt-light-black">
            <HiMagnifyingGlass
              size={22}
              className="text-yt-white inline-block text-center font-thin"
            />
          </button>
          </Link>
        </div>

        {showSuggestion && (
          <div className="fixed bg-white py-5 w-[34rem] my-6 p-3  h-10 rounded-lg -mt-8">
            <ul className="  shadow-sm  bg-yt-white m-[2.5rem] w-[30rem] rounded-lg">
              {suggestion.map((sug, ind) => (
                <li key={ind} className="flex flex-row py-1 hover:bg-yt-gray">
                  <HiMagnifyingGlass /> {sug}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="text-yt-white bg-yt-light w-10 h-10 items-center flex justify-center rounded-full ml-4 hover:bg-yt-light-black cursor-pointer">
          <MdMic className="text-center " size={23} />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-row items-center">
          <div className="mr-2 p-2 w-10 hover:bg-yt-light-black rounded-full cursor-pointer">
            <BiVideoPlus size={25} className="text-yt-white text-center" />
          </div>
          <div className="mx-3 p-2 w-10 hover:bg-yt-light-black rounded-full cursor-pointer">
            <FaRegBell size={20} className="text-center text-yt-white" />
          </div>
          <div className="mx-3 items-center cursor-pointer">
            <img
              src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
              alt="user"
              className="object-contain rounded-full cursor-pointer w-9 h-9"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
