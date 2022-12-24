import React from 'react'
import { CgProfile } from 'react-icons/cg';
import profile from '../public/assets/images/profile.png';
import Image from 'next/image';
import { useState } from 'react';
export default function Profile() :JSX.Element{
    const [profilee, setProfilee ] = useState(false);
    const showProfile = () => {
            setProfilee(!profilee);
    }
  return (
    <div>
        <CgProfile onClick={showProfile} className='text-2xl absolute right-4 cursor-pointer md:right-14'/>
        <div className={profilee ? 'hidden-profile': 'show-profile'}>
            <section className='absolute right-0 top-10 profile-color h-60 w-32 text-center  p-2 rounded bg-sky-900'>
                <Image
                className='h-16 w-16 rounded-full ml-6 mt-2'
                src={profile}
                alt='profile'
                width='100'
                height='100'
                />
                <h4 className='font-bold ml-2 mt-2 border-b-2 border-b-blue-400 rounded'>User</h4>
            </section>
        </div>
    </div>
  )
}


