

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+
  process.env.REACT_APP_YOUTUBE_KEY;

export const YOUTUBE_SERAHC_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";


export const SEARCH_RESULT_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=" +
  process.env.REACT_APP_YOUTUBE_KEY +
  "&q=";


  export const WATCH_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  process.env.REACT_APP_YOUTUBE_KEY+
  "&id=";

  export const COMMENT_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&key=" +
  process.env.REACT_APP_YOUTUBE_KEY+
  "&videoId=";