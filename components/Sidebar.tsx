import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../public/assets/images/logo.png'
import { SiKickstarter } from 'react-icons/si';
import { BsPersonLinesFill, BsFileEarmarkPersonFill } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
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
    <HiOutlineMenuAlt3 className='cursor-pointer text-2xl z-10' onClick={showAside}/>
      <div className={sidebar? 'show-sidebar' : 'hidde-sidebar'}>
        <aside className='aside w-44 h-80 p-3 rounded mt-10'>
            <section className='flex'>
              <Image
              className='rounded-full h-20 w-20'
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
      <li className='ml-5 mb-3 flex cursor-pointer'>
        <SiKickstarter className='mr-2 text-xl text-white'/>
        <a href="#" className='text-xs'>Start</a>
      </li>
      <li className='ml-5 mb-3 flex cursor-pointer'>
        <BsPersonLinesFill className='mr-2 text-xl text-white'/>
        <a href="#" className='text-xs'>Contributors</a>
      </li>
      <li className='ml-5 mb-3 flex cursor-pointer'>
        <BsFileEarmarkPersonFill className='mr-2 text-xl text-white'/>
        <a href="#" className='text-xs'>Depositions</a>
      </li>
      <li className='ml-5 mb-3 flex cursor-pointer'>
        <IoMdSettings className='mr-2 text-xl text-white'/>
        <a href="#" className='text-xs'>Settings</a>
      </li>
    </ul>
  )
} 
