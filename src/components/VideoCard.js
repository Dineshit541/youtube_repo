import React from "react";

const VideoCard = ({ info }) => {
  
  const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
    notation: "compact",
  });
  if(!info) return null;
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;

  return (
    <div className=" p-2 m-2 w-72 shadow-lg ">
      <img  className=" rounded-lg" src={thumbnails?.medium?.url} alt="videos" />
      <ul>
        <li className=" font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{VIEW_FORMATTER.format(statistics?.viewCount)} views</li>
      </ul>
    </div>
  ); 
};

export default VideoCard;
