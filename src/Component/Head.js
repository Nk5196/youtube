import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import { BiSolidUser } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from '../Utils/appSlice';
import { Link } from 'react-router-dom';
import { YOUTUBE_SEARCH_SUGG, youtubeApi } from '../Utils/Config';
import { cacheResults } from '../Utils/searchSlice';
import { BtnResults } from '../Utils/Results';


const Head = () => {

    const [searchText, setSearchText] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false)
    console.log("showSuggestion", showSuggestion)
    const searchCache = useSelector((store)=>store.search)


    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }


    useEffect(() => {

        const timer = setTimeout(() => {
          if (searchCache[searchText]){
            setSuggestions(searchCache[searchText])
          } else {
            Searchfunction()
          }         
         } , 1000);

        return () => {
            clearTimeout(timer)
        };
    }, [searchText]);

    const Searchfunction = async () => {
        const data = await fetch(YOUTUBE_SEARCH_SUGG + searchText);
       // console.log("data==>>", data);
        const jsonData = await data.json()
        console.log("jsonData", jsonData[1])

        setSuggestions(jsonData[1]);
        dispatch(cacheResults({
            [searchText]: jsonData[1],
        }))
    };

    const LoadVideos = async () => {
        const data = await fetch(youtubeApi);
        const jsonData = await data.json();
        //console.log("jsonData", jsonData.items);
        dispatch(BtnResults(jsonData.items));
      };

    return (
        <div className='flex fixed bg-white w-full p-2 mt-0 justify-between'>

            <div className='flex gap-4 '>
                <GiHamburgerMenu onClick={() => toggleMenuHandler()} className="w-8 h-7 mt-4" />
                <div>
                    <Link to="/" onClick={LoadVideos}>
                        <img className="h-16" alt="youtube-logo" src='https://images.t3n.de/news/wp-content/uploads/2017/08/new-youtube-logo-2.jpg?class=hero-small' />
                        </Link>
                </div>
            </div>
            <div>
                <div className='flex justify-center mt-3'>
                    <div className='flex items-center border h-9 border-gray-700 rounded-2xl'>
                        <input className=" flex-grow w-[32rem]  rounded-xl focus:outline-none px-2 ml-2"
                            value={searchText} onChange={(e) => setSearchText(e.target.value)}
                            onFocus={() => setShowSuggestion(true)}
                            onBlur={() => setShowSuggestion(false)} /> {/* Use flex-grow to allow the input to take up available space */}
                        <button className='border-r-1  border-gray-700 m-2'>
                            <BsSearch className="w-6 h-6" />
                        </button>
                    </div>
                </div>
                <div >
                    {suggestions && showSuggestion && (<div className=' z-20 border  border-gray-200 shadow-sm fixed bg-white w-[34rem] ml-2 rounded-md '>
                        <ul className='relative z-20 mt-2'>
                            {suggestions.map((item) => <li className='flex hover:bg-gray-200 z-50' key={item} > <BsSearch className="w-3 h-5 m-1 mx-2 " />{item}</li>)}

                        </ul>
                    </div>)}
                </div>

            </div>

            <div>
                <div>
                    <BiSolidUser className="w-8 h-7 mt-4" />
                </div>
            </div>
        </div>
    )
}

export default Head;