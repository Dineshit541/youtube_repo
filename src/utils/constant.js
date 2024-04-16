

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+
  process.env.REACT_APP_YOUTUBE_KEY;

export const YOUTUBE_SERAHC_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
