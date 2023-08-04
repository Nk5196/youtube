import React, { useEffect, useState } from 'react';
import { youtubeApi } from '../Utils/Config';
import VIdeosCard from './VIdeosCard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

const VideosContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    LoadVideos();
  }, []);

  const LoadVideos = async () => {
    const data = await fetch(youtubeApi);
    const jsonData = await data.json();
    console.log("jsonData", jsonData.items);
    setVideos(jsonData.items);
  };

  return ( (videos.length==0) ? <Shimmer/> :
    <>
      <div className='-z-20 flex flex-wrap w-full mt-4 '>
       {videos.map((video) =>   <Link to={"/watch?v="+video.id+"&c="+video.snippet.channelId}><VIdeosCard key={video.id} info={video} /></Link>)}
       
      </div>
    </>
  );
};

export default VideosContainer;
