import dotenv from "dotenv";

dotenv.config();

const KEY = process.env.YOUTUBE_API_KEY;

const config = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

const grabVideosFromChannel = async () => {
  try {
    const params = new URLSearchParams({
      part: "snippet",
      maxResults: "500",
      channelId: "UCYpo_9YatKVoBBoPMDvCBKQ",
      order: "date",
      type: "video",
      key: String(KEY),
    }).toString();

    const req = await fetch(
      `https://www.googleapis.com/youtube/v3/search?` + params,
      config
    );

    const data = await req.json();

    return data.items;
  } catch (error) {
    // alert("Error Grabbing Videos From Channel, Check Console");
    console.log(error);
  }
};

const grabVideoInfo = async (videoId: string) => {
  if (!videoId) return;
  try {
    const params = new URLSearchParams({
      part: "snippet",
      id: videoId,
      key: String(KEY),
    }).toString();

    const req = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?` + params,
      config
    );

    const data = await req.json();

    return data.items[0];
  } catch (error) {
    // alert("Error Grabbing Video Info, Check Console");
    console.log(error);
  }
};

const grabPlaylistVideos = async (playlistId: string) => {
  try {
    const params = new URLSearchParams({
      part: "snippet",
      maxResults: "500",
      playlistId: playlistId,
      key: String(KEY),
    }).toString();

    const req = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?` + params,
      config
    );

    const data = await req.json();

    return data.items;
  } catch (error) {
    // alert("Error Grabbing Playlist Videos, Check Console");
    console.log(error);
  }
};

export { grabVideosFromChannel, grabVideoInfo, grabPlaylistVideos };
