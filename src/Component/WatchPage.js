import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../Utils/appSlice'
import { useSearchParams } from 'react-router-dom'

const WatchPage = ({ info }) => {
    const dispatch = useDispatch()
    console.log("watchpage info", { info })
    const [searchParams] = useSearchParams();
    console.log()
    const videoId =searchParams.get("v")
    useEffect(() => {
        dispatch(closeMenu())
    }, [])
    return (
        <div>
            <iframe width="1120" height="630" src={"https://www.youtube.com/embed/"+videoId}
             title="YouTube video player" frameBorder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             allowFullScreen>

            </iframe>
        </div>
    )
}

export default WatchPage