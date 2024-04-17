import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";

const WatchPage = ({ info }) => {
  const [searchParam] = useSearchParams();
  console.log(searchParam.get("v"));
  const dipatch = useDispatch();

  useEffect(() => {
    dipatch(closeMenu());
  }, []);
  return (
    
    <div className=" flex flex-col m-2">
      <div>
        <iframe
          width="1200"
          height="600"
          src={"https://www.youtube.com/embed/" + searchParam.get("v")}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <Comments />
    </div>
  );
};

export default WatchPage;
