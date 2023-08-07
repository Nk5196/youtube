import React from 'react'
import { useEffect, useState } from 'react';
import { youtubeApi } from '../Utils/Config';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

const RightSideBar = () => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        LoadVideos();
    }, []);

    const LoadVideos = async () => {
        const data = await fetch( '');
        const jsonData = await data.json();
        console.log("jsonData", jsonData.items);
        setVideos(jsonData.items);
    };

    const shiftedVideos = videos.slice(2);

    return ( videos.length == 0 ? <Shimmer/> :

        <div className=' flex flex-wrap w-64 ml-1 mt-14'>
            {shiftedVideos.map((video) => <Link to={"/watch?v=" + video.id}>
                
              <div key={video.id} className='w-64 m-1'>     
                <div>
                    <img src={video.snippet.thumbnails.medium.url} />
                </div>
                <div>
                    <p className="text-2md font-semibold truncate ">{video.snippet.title}...</p>
                    <h2>{video.snippet.channelTitle}</h2>
                    {/* <p>{Math.floor((video.statistics.viewCount) / 1000)}K - View</p> */}
                </div>
                </div>     
            </Link>)}
           
        </div>

    )
}

export default RightSideBar