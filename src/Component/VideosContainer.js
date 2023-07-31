import React, { useEffect, useState } from 'react';
import { youtubeApi } from '../Utils/Config';
import VIdeosCard from './VIdeosCard';
import { Link } from 'react-router-dom';

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

  return (
    <>
      <div className=' flex flex-wrap w-full'>
       {videos.map((video) =>   <Link to={"/watch?v="+video.id}><VIdeosCard key={video.id} info={video} /></Link>)}
       
      </div>
    </>
  );
};

export default VideosContainer;
