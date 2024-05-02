import moment from "moment";
import React from "react";

const VideoCard = ({ info }) => {
  const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
    notation: "compact",
  });
  if (!info) return null;
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;

  return (
    <div className="flex flex-col max-w-[260px] cursor-pointer">
      <div className="relative w-full ">
        <img
          className=" rounded-lg"
          src={thumbnails?.medium?.url}
          alt="videos"
        />
        <ul className="px-1 py-2">
          <li className=" font-bold text-yt-white text-sm mt-0 mb-0 items-center">
            {title}
          </li>
          <li className=" text-yt-white text-sm mt-0 mb-0 items-center">
            {channelTitle}
          </li>
          <li className=" text-yt-white text-sm mt-0 mb-0 items-center">
            {VIEW_FORMATTER.format(statistics?.viewCount)} views &bull;{" "}
            {moment(snippet?.publishedAt).fromNow()}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;
