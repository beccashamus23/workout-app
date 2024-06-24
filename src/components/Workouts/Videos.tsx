import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import { Button, Flex, Input } from "@chakra-ui/react";
import { FaYoutube } from "react-icons/fa";

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
    <Flex gap={3} direction={"column"}>
      <Flex gap={3}>
        <FaYoutube size={56} />
        <Input
          type="text"
          placeholder="search videos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button className="customButton" onClick={fetchVideos} fontWeight={10}>
          go
        </Button>
      </Flex>
      <Flex>{renderVideoList()}</Flex>
      {selected && (
        <>
          <YouTube videoId={selected.id.videoId} />
        </>
      )}
    </Flex>
  );
};

export default Videos;
