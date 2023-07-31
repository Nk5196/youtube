import React from 'react'
import { BsSearch } from 'react-icons/bs';
import { BiSolidUser } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useDispatch } from "react-redux";
import { toggleMenu } from '../Utils/appSlice';
import { Link } from 'react-router-dom';

const Head = () => {

    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }


    return (
        <div className='flex justify-between '>
            <div className='flex gap-4'>
                <GiHamburgerMenu onClick={() => toggleMenuHandler()} className="w-8 h-7 mt-4" />
               <div>
                <img className="h-16" alt="youtube-logo" src='https://images.t3n.de/news/wp-content/uploads/2017/08/new-youtube-logo-2.jpg?class=hero-small' />
                </div>
            </div>
            <div className='flex justify-center mt-3'>
                <div className='flex items-center border h-9 border-gray-700 rounded-2xl'>
                    <input className=" flex-grow w-[32rem]  rounded-xl focus:outline-none px-2 ml-2" /> {/* Use flex-grow to allow the input to take up available space */}
                    <button className='border-r-1  border-gray-700 m-2'>
                        <BsSearch className="w-6 h-6" />
                    </button>
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