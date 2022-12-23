import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../public/assets/images/logo.png'
import { SiKickstarter, SiGoogleanalytics} from 'react-icons/si';
import { BsPersonLinesFill, BsFileEarmarkPersonFill } from 'react-icons/bs';
import { IoMdSettings,IoIosNotifications } from 'react-icons/io';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { MdMessage } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
 const Sidebar = () => {
  return (
    <>
     <Aside/> 
    </>
  )
}

export default Sidebar;

export const Aside = () :JSX.Element => {
  const [sidebar, setSidebar] = useState(false);
  const showAside = () => {
    setSidebar(!sidebar)
  }
  return(
    <>
    <HiOutlineMenuAlt3 className='cursor-pointer text-2xl z-20' onClick={showAside}/>
      <div className={sidebar? 'show-sidebar z-10' : 'hidde-sidebar'}>
        <aside className='aside w-44 h-5/6 p-3 rounded mt-10'>
            <section className='flex'>
              <Image
              className='rounded-full h-16 w-16'
              src={logo}
              alt='logo next'
              height='100'
              width='100'
              />
              <h4 className='font-semibold mt-6 ml-2'>Logo</h4>
            </section>
            <section>
              <List/>
            </section>
        </aside>
      </div>
    </>
  )
}

export const List = () :JSX.Element => {
  return(
    <ul className='text-slate-200 mt-5'>
      <li className='ml-5 mb-3 flex cursor-pointer p-1 hover:bg-blue-400 hover:border-l-2 duration-300'>
        <SiKickstarter className='mr-2 text-sm text-white'/>
        <a href="#" className='text-xs'>Start</a>
      </li>
      <li className='ml-5 mb-3 flex cursor-pointer p-1 hover:bg-blue-400 hover:border-l-2 duration-300'>
        <SiGoogleanalytics className='mr-2 text-sm text-white'/>
        <a href="#" className='text-xs'>Analytics</a>
      </li>
      <li className='ml-5 mb-3 flex cursor-pointer p-1 hover:bg-blue-400 hover:border-l-2 duration-300'>
        <BsPersonLinesFill className='mr-2 text-sm text-white'/>
        <a href="#" className='text-xs'>Contributors</a>
      </li>
      <li className='ml-5 mb-3 flex cursor-pointer p-1 hover:bg-blue-400 hover:border-l-2 duration-300'>
        <BsFileEarmarkPersonFill className='mr-2 text-sm text-white'/>
        <a href="#" className='text-xs'>Depositions</a>
      </li>
      <li className='ml-5 mb-3 flex cursor-pointer p-1 hover:bg-blue-400 hover:border-l-2 duration-300'>
        <MdMessage className='mr-2 text-sm text-white'/>
        <a href="#" className='text-xs'>Message</a>
        <IoIosNotifications className='bg-blue-600 rounded-full ml-5'/>
      </li>
      <li className='ml-5 mb-3 flex cursor-pointer p-1 hover:bg-blue-400 hover:border-l-2 duration-300'>
        <IoMdSettings className='mr-2 text-sm text-white'/>
        <a href="#" className='text-xs'>Settings</a>
      </li>
      <li className='ml-5 mb-3 mt-10 flex cursor-pointer p-1 hover:bg-blue-400 hover:border-l-2 duration-300'>
        <FiLogOut className='mr-2 text-sm text-white'/>
        <a href="#" className='text-xs'>Logout</a>
      </li>
    </ul>
  )
} 
