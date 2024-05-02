import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { YOUTUBE_SERAHC_API } from './constant';
import { cacheResults } from './searchSlice';

export const UseSearchSuggestion = () => {
    const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]); 

  const dispatch = useDispatch();

  const searchCache = useSelector((state) => state.search);


  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SERAHC_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
};

    useEffect(() => {
        const timer = setTimeout(() => {
          if (searchCache[searchQuery]) {
            setSuggestion(searchCache[searchQuery]);
          } else {
            getSearchSuggestion();
          }
        }, 200);
    
        return () => {
          clearInterval(timer);
        };
      }, [searchQuery]);
    
      return {searchQuery ,setSearchQuery ,suggestion}
    };


