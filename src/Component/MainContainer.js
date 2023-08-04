import React from 'react'
import ButtonsList from './ButtonsList'
import VideosContainer from './VideosContainer'

const MainContainer = () => {
  return (
    <div  className='shadow w-full mt-20 '>
        <ButtonsList />
        <VideosContainer />
       
    </div>
  )
}

export default MainContainer