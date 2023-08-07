import React from 'react'
import { YOUTUBE_SEARCH, youtubeApi } from '../Utils/Config'
import { useDispatch } from 'react-redux';
import { BtnResults } from '../Utils/Results';
const ButtonsList = () => {
  const dispatch = useDispatch();


  const selectionFunction = async (item ) => {
     
    const data =  await fetch(YOUTUBE_SEARCH+item)
    const jsonData = await data.json()
   //console.log("jsonDataButton", jsonData);
   dispatch(BtnResults(jsonData.items));
  }

  const LoadVideos = async () => {
    const data = await fetch(youtubeApi);
    const jsonData = await data.json();
   // console.log("jsonData", jsonData.items);
    dispatch(BtnResults(jsonData.items));
  };

  return (
    <div className=" z-0 bg-white p-2" >
      <ul className='flex'>
        <li> <button className='px-3 py-1 m-1 mx-2 bg-slate-100 rounded-lg' value={"All"} onClick={()=>LoadVideos()}>All</button></li>
        <li> <button className='px-3 py-1 m-1 mx-2 bg-slate-100 rounded-lg' value={"music"} onClick={()=>selectionFunction("music")}>Music</button></li>
        <li> <button className='px-3 py-1 m-1 mx-2 bg-slate-100 rounded-lg'value={"comedy"} onClick={()=>selectionFunction("comedy")}>Comedy</button></li>
        <li> <button className='px-3 py-1 m-1 mx-2 bg-slate-100 rounded-lg' onClick={()=>selectionFunction("Tourism")}>Tourism</button></li>
        <li> <button className='px-3 py-1 m-1 mx-2 bg-slate-100 rounded-lg' onClick={()=>selectionFunction("Bollywood Music")}>Bollywood Music</button></li>
        <li> <button className='px-3 py-1 m-1 mx-2 bg-slate-100 rounded-lg' onClick={()=>selectionFunction("News")}>News</button></li>
        <li> <button className='px-3 py-1 m-1 mx-2 bg-slate-100 rounded-lg' onClick={()=>selectionFunction("Dramedy")}>Dramedy</button></li>
        <li> <button className='px-3 py-1 m-1 mx-2 bg-slate-100 rounded-lg' onClick={()=>selectionFunction("Movies")}>Movies</button></li>
        <li> <button className='px-3 py-1 m-1 mx-2 bg-slate-100 rounded-lg' onClick={()=>selectionFunction("kids videos")}>Youtube Kids</button></li>
        <li> <button className='px-3 py-1 m-1 mx-2 bg-slate-100 rounded-lg' onClick={()=>selectionFunction("Sales")}>Sales</button></li>
        <li> <button className='px-3 py-1 m-1 mx-2 bg-slate-100 rounded-lg' onClick={()=>selectionFunction("JavaScript")}>JavaScript</button></li>
        {/* <li> <button className='px-3 py-1 m-1 mx-2 bg-slate-100 rounded-lg'>Marketing</button></li> */}


      </ul>
    </div>
  )
}

export default ButtonsList