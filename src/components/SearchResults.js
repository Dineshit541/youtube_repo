import { Link, useSearchParams } from "react-router-dom";
import SearchVideoCard from "./SearchVideoCard";
import { SEARCH_RESULT_API } from "../utils/constant";
import { useEffect, useState } from "react";

const SearchResults = () => {
  const [videos, setVideos] = useState([]);

  const [searchParams] = useSearchParams();

  const params = searchParams.get("search_query");

  useEffect(() => {
    getSearchVideos();
  }, [params]);

  const getSearchVideos = async () => {
    const data = await fetch(SEARCH_RESULT_API + params);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-col m-auto bg-yt-black">
      {videos.map((video) => (
        <Link
          className="m-2 p-2 mr-4 shadow-2xl rounded-lg"
          key={video.id.videoId}
          to={"/video/" + video.id.videoId}
        >
          <SearchVideoCard result={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
