import { useState } from 'react';
import { MdNightlightRound } from 'react-icons/md';
import { FaSun } from 'react-icons/fa';
import Head from 'next/head';
import Sidebar from '../components/dashboard/Sidebar';
import Search from '../components/dashboard/Search';
import Profile from '../components/dashboard/Profile';
import Date from '../components/dashboard/Date';
import Cards from '../components/dashboard/Cards';
import Analytics from '../components/dashboard/Analytics';
import Developer from '../components/dashboard/Developer';
import Updates from '../components/dashboard/Updates';
export default function Home() :JSX.Element {
  const [theme,setTheme] = useState(false);
    const changeTheme = () => {
        setTheme(!theme);
    }
  return (
    <div className='sidebar-body-dark'>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./assets/images/favicon.ico" />
      </Head>
      <div className={theme ? 'body-theme' : 'body'}>
        <div className=
        'h mx-auto shadow-xl p-4 md:w-11/12 rounded-xl w-full '
        >
            <header className={!theme ? 'shadow-xl pb-4 pt-4 fixed left-0 top-0  w-full body z-10 border-b-2 border-b-blue-300' : 'shadow-xl pb-4 pt-4 fixed left-0 top-0  w-full body-theme z-10 border-b-2 border-b-blue-300'}  >
              <div className='flex'>
                <Sidebar/>
                <Search/>
                <div className='absolute right-14 md:right-20 top-5 '>
                  <button className='hover:bg-blue-400 hover:text-white duration-500 rounded-full' onClick={changeTheme}>{theme? <FaSun/> : <MdNightlightRound/>}</button>
                </div>
                <Profile/>
              </div>
            </header>
            <main className='mt-5'>
            <Date/>
              <div className='flex justify-center mt-4'>
                <Cards/>
              </div>
              <div className='ml-20 mt-5'>
              <h1 className='font-bold text-xl'>Analytics</h1>
              </div>
              <div>
                <Analytics/>
                <Updates/>
              </div>
            </main>
            <footer className='flex justify-center mt-5'>
              <Developer/>
            </footer>
        </div>
      </div>
    </div>
  )
}


