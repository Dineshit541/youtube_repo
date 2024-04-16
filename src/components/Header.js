import {  Bell,  Search, Upload, User } from "lucide-react";
import { useDispatch } from "react-redux";
import { toogleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch=useDispatch();
  const handletooglemenu = () =>{
     dispatch(toogleMenu());
  }
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

      <div className="flex flex-grow max-w-[900px] col-span-3 ">
        <input
          type="search"
          placeholder="Search"
          className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
        />
        <button className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0">
          <Search />
        </button>
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