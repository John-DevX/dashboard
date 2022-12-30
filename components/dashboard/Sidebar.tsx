import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../../public/assets/images/logo.png'
import { SiKickstarter, SiGoogleanalytics} from 'react-icons/si';
import { BsPersonLinesFill, BsFileEarmarkPersonFill } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';
import { HiOutlineMenuAlt3, HiX} from 'react-icons/hi';
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
    <button className='cursor-pointer text-2xl z-20 ml-4' onClick={showAside}>
      {sidebar ? <HiX className='sidebar-body-dark-icon x ml-36'/> : <HiOutlineMenuAlt3/>}
    </button>
      <div className={sidebar? 'show-sidebar z-10 w-full sidebar-body-dark': 'hidde-sidebar'}>
        <aside className='h-full bg-black shadow-xl w-52 p-3 rounded'>
            <section className='p-2 sidebar-header flex'>
              <Image
              className='rounded-full h-16 w-16 ml-1'
              src={logo}
              alt='logo next'
              height='100'
              width='100'
              />
              <h4 className='font-semibold mt-6 ml-2 text-white'>Logo</h4>
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
      <li className='ml-5 mb-3 flex cursor-pointer p-1 hover:bg-blue-400 hover:border-l-4  duration-300 hover:ml-8 hover:text-white'>
        <SiKickstarter className='mr-2 text-lg text-white'/>
        <a href="#" className='text-xs'>Start</a>
      </li>
      <li className='ml-5 mb-3 flex cursor-pointer p-1 hover:bg-blue-400 hover:border-l-4 duration-300 hover:ml-8 hover:text-white'>
        <SiGoogleanalytics className='mr-2 text-lg text-white'/>
        <a href="#" className='text-xs'>Analytics</a>
      </li>
      <li className='ml-5 mb-3 flex cursor-pointer p-1 hover:bg-blue-400 hover:border-l-4 duration-300 hover:ml-8 hover:text-white'>
        <BsPersonLinesFill className='mr-2 text-lg text-white'/>
        <a href="#" className='text-xs'>Contributors</a>
      </li>
      <li className='ml-5 mb-3 flex cursor-pointer p-1 hover:bg-blue-400 hover:border-l-4 duration-300 hover:ml-8 hover:text-white'>
        <BsFileEarmarkPersonFill className='mr-2 text-lg text-white'/>
        <a href="#" className='text-xs'>Depositions</a>
      </li>
      <li className='ml-5 mb-3 flex cursor-pointer p-1 hover:bg-blue-400 hover:border-l-4 duration-300 hover:ml-8 hover:text-white'>
        <MdMessage className='mr-2 text-lg text-white'/>
        <a href="#" className='text-xs'>Message</a>
        <div className='bg-blue-600 flex ml-5 justify-center w-10 h-5 rounded-full'>
          <h4 className='text-xs p-1 text-white'>20</h4></div>
      </li>
      <li className='ml-5 mb-3 flex cursor-pointer p-1 hover:bg-blue-400 hover:border-l-4 duration-300 hover:ml-8 hover:text-white'>
        <IoMdSettings className='mr-2 text-lg text-white'/>
        <a href="#" className='text-xs'>Settings</a>
      </li>
      <li className='ml-5 mb-3 mt-10 flex cursor-pointer p-1 hover:bg-blue-400 hover:border-l-4 duration-300 hover:ml-8 hover:text-white'>
        <FiLogOut className='mr-2 text-lg text-white'/>
        <a href="#" className='text-xs'>Logout</a>
      </li>
    </ul>
  )
} 
