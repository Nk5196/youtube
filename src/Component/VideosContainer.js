// No need to import React from 'react'

import { useEffect, useState } from 'react';
import { youtubeApi } from '../Utils/Config';
import VIdeosCard from './VIdeosCard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import { useSelector } from 'react-redux';
const VideosContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    LoadVideos();
  }, []);

  const LoadVideos = async () => {
    const data = await fetch(youtubeApi);
    const jsonData = await data.json();
  //  console.log("jsonData", jsonData.items);
    setVideos(jsonData.items);
  };

  const data = useSelector((state) => state.Results.data);
 // console.log("button is working", data);

  useEffect(() => {
    if (data && data.length > 0) {
      setVideos(data);
    }
  }, [data]);

  return (
    (videos.length === 0) ? <Shimmer/> :
    <>
      <div className='-z-20 flex flex-wrap w-full mt-4 '>
        {videos.map((video) => <Link to={"/watch?v="+video.id+"&c="+video.snippet.channelId}><VIdeosCard key={video.id} info={video} /></Link>)}
      </div>
    </>
  );
};

export default VideosContainer;
