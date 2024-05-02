import React from 'react'

const SuggestionVideos = ({result}) => {
  const { snippet, statistics } = result;
  const { title, channelTitle, thumbnails } = snippet;
  
  const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
    notation: "compact",
  });

  return (
    <div className="flex">
      <img
        alt="suggest"
        className="mr-2 h-24 rounded-lg"
        src={thumbnails.medium.url}
      />
      <ul className="text-xs overflow-clip">
        <li className="font-bold text-yt-white ">{title}</li>
        <li className="font-normal text-yt-white ">{channelTitle}</li>
        <li className="font-normal text-yt-white">{VIEW_FORMATTER.format(statistics?.viewCount)} views</li>
      </ul>
    </div>
  );
};

export default SuggestionVideos