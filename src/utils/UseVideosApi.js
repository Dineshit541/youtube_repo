import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "./constant";

export const UseVideosApi = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
   
  };
  return {videos};
};
