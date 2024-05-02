import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { WATCH_VIDEO_API } from "../utils/constant";
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { UseVideosApi } from "../utils/UseVideosApi";
import { FaUsersViewfinder } from "react-icons/fa6";
import SuggestionVideos from "./SuggestionVideos";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const [isLike, setIsLike] = useState("");
  const [isSubscribe, setIsSubscribe] = useState(false);
  const [watch, setWatch] = useState([]);

  const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
    notation: "compact",
  });

  const { id } = useParams();
  useEffect(() => {
    getVideos();
    setIsLike("");
    setIsSubscribe(false);
    window.scrollTo(0, 0);
  }, [id]);
  const getVideos = async () => {
    const data = await fetch(WATCH_VIDEO_API + id);
    const json = await data.json();
    setWatch(json.items[0]);
  };

  const { videos } = UseVideosApi();

  return (
    <div className=" w-full px-3  bg-yt-black">
      {watch && (
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="w-full">
            <iframe
              className="w-full aspect-video rounded-2xl"
              src={"https://www.youtube.com/embed/" + id + "?autoplay=1"}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              autoPlay
            ></iframe>
            <div className="font-semibold my-2">
              <h1 className="text-xl mb-4 text-yt-white">
                {watch?.snippet?.title}
              </h1>
              <div className="flex gap-2 pr-10">
                <img
                  className="rounded-full h-9 w-9 text-yt-white"
                  alt="channel"
                  src={watch?.snippet?.thumbnails.default.url}
                />
                <div className="flex gap-1 items-center w-fit text-yt-white">
                  <span>{watch?.snippet?.channelTitle}</span>
                  <span>
                    <img
                      className="h-3 w-3"
                      alt="verify"
                      src="https://img.freepik.com/free-icon/check-mark_318-82621.jpg?t=st=1692436411~exp=1692437011~hmac=0352088f7f284ddd21db2ec79f73b4ac6eb439443d1d1090121ec3f7f2c371ce"
                    />
                  </span>
                </div>
                <button
                  onClick={() => setIsSubscribe(!isSubscribe)}
                  className="py-2 h-fit mx-4 px-4 bg-yt-red text-sm text-white rounded-full text-yt-white"
                >
                  {isSubscribe ? (
                    <span className="flex items-center gap-1 text-yt-white">
                      Subscribed{" "}
                      <img
                        className="h-3 w-3 rounded-full bg-transparent"
                        alt="verify"
                        src="https://img.freepik.com/free-icon/check-mark_318-82621.jpg?t=st=1692436411~exp=1692437011~hmac=0352088f7f284ddd21db2ec79f73b4ac6eb439443d1d1090121ec3f7f2c371ce"
                      />
                    </span>
                  ) : (
                    "Subscribe"
                  )}
                </button>
                <div className="text-lg flex gap-5 ml-auto items-center w-fit text-yt-white">
                  <div className="flex gap-2 bg-gray-300 p-2 rounded-full text-sm items-center">
                    <FaUsersViewfinder size={20} />
                    {VIEW_FORMATTER.format(watch?.statistics?.viewCount)} views
                  </div>
                  <div className="flex items-center gap-4 bg-gray-300 p-2 rounded-full">
                    <span
                      onClick={() => {
                        if (isLike === "dislike" || isLike === "") {
                          setIsLike("like");
                        } else if (isLike === "like") {
                          setIsLike("");
                        }
                      }}
                      className="cursor-pointer flex gap-2 text-sm items-center border-r-2 border-gray-500 pr-3"
                    >
                      {isLike === "like" ? (
                        <BiSolidLike size={20} />
                      ) : (
                        <BiLike size={20} />
                      )}{" "}
                      {(watch?.statistics?.likeCount / 1000).toFixed()}K
                    </span>
                    <span
                      className="cursor-pointer flex items-center gap-1 text-sm"
                      onClick={() => {
                        if (isLike === "like" || isLike === "") {
                          setIsLike("dislike");
                        } else if (isLike === "dislike") {
                          setIsLike("");
                        }
                      }}
                    >
                      {isLike === "dislike" ? (
                        <>
                          <BiSolidDislike size={20} /> 1
                        </>
                      ) : (
                        <BiDislike size={20} />
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <CommentsContainer videoId={id} />
          </div>
          <div className="lg:basis-1/2 px-2 my-12 flex flex-col">
            <div className="flex flex-col border border-gray-200 shadow-lg">
              {videos.map((video) => (
                <Link
                  to={"/video/" + video.id}
                  className="my-2 p-1 w-full"
                  key={video.id}
                >
                  <SuggestionVideos result={video} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WatchPage;
