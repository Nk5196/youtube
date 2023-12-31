import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../Utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import RightSideBar from './RightSideBar';
import CommentContainer from './CommentContainer';
import WatchScreenShimmer from './WatchScreenShimmer';

const WatchPage = ({ info }) => {
  const dispatch = useDispatch();
  console.log("watchpage info", { info });

  // Destructure the first value from the useSearchParams hook
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const channelId = searchParams.get("c");
  console.log("channelID", channelId);

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return ( 
    <div className='flex flex-col'>
      <div className='flex p-1'>
        <div className='mt-20'>
          <iframe
            width="1120"
            height="630"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <CommentContainer />
         
        </div>
        <div>
          <RightSideBar channelId={channelId} />
        </div>
      </div>

    </div>
  );
};

export default WatchPage;
