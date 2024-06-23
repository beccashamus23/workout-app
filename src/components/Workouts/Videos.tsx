import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";

const Videos: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [videos, setVideos] = useState<any[]>([]);
  const [selected, setSelected] = useState<any | null>(null);

  const API_KEY = "AIzaSyAXztObb9VVz6zYAWRaBMItfVuT2xvRhyE";

  const fetchVideos = async () => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            q: query,
            type: "video",
            part: "snippet",
            maxResults: 5,
            key: API_KEY,
          },
        }
      );
      setVideos(response.data.items);
    } catch (e) {
      console.error("Error fetching videos:", e);
    }
  };

  const onVideoSelect = (video: any) => {
    setSelected(video);
  };

  const renderVideoList = () => {
    return videos.map((vid: any) => (
      <div key={vid.id.videoId} onClick={() => onVideoSelect(vid)}>
        <img src={vid.snippet.thumbnails.default.url} alt={vid.snippet.title} />
        <p>{vid.snippet.title}</p>
      </div>
    ));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="video"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="customButton" onClick={fetchVideos}>
        Search Videos
      </button>
      <div className="video-list">{renderVideoList()}</div>
      {selected && (
        <>
          <YouTube videoId={selected.id.videoId} />
        </>
      )}
    </div>
  );
};

export default Videos;
