import React from "react";
import SideBar from "./SideBar";
import { CategoryItems } from "../data/categories";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { UseVideosApi } from "../utils/UseVideosApi";

const Home = () => {
  const { videos } = UseVideosApi();

  if (!videos) return null;
  return (
    <>
      <SideBar />
      <div className="w-[calc(100%-240px)]  h-[calc(100%-53px)] pt-16 bg-yt-black ml-60">
        <div className="flex flex-row px-3 overflow-x-scroll relative no-scrollbar">
          {CategoryItems.map((item, i) => (
            <h2
              className="text-yt-white font-normal text-sm py-2 px-4 break-keep whitespace-nowrap bg-yt-light mr-3 cursor-pointer rounded-lg hover:bg-yt-light-1"
              key={i}
            >
              {item}
            </h2>
          ))}
        </div>

        <div className="pt-12 px-5 grid grid-cols-yt gap-x-3 gap-y-8">
          {videos.map((video) => (
            <Link to={`/video/${video.id}`}>
              <VideoCard key={video.id} info={video} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
