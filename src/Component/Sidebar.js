import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import { MdSubscriptions } from 'react-icons/md';
import { FiTrendingUp } from 'react-icons/fi';
import { BsMusicNoteBeamed } from 'react-icons/bs';
import { SiYoutubegaming } from 'react-icons/si';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)
  
  if(!isMenuOpen) return null;
  
  
  return (
    <div className='shadow w-48'>
      <ul className=''>
        <li className='py-2 flex px-2'><Link className='flex'><AiFillHome className='w-7 h-7 pr-2' /> Home</Link></li>
        <li className='py-2 flex px-2'><MdSubscriptions className='w-7 h-7 pr-2' />Supscription</li>
        <li className='py-2 flex px-2'><FiTrendingUp className='w-7 h-7 pr-2' />Trending</li>
        <li className='py-2 flex px-2'><BsMusicNoteBeamed className='w-7 h-7 pr-2' />Music</li>
        <li className='py-2 flex px-2'><SiYoutubegaming className='w-7 h-7 pr-2' />Gaming</li>

      </ul>
    </div>
  )
}

export default Sidebar