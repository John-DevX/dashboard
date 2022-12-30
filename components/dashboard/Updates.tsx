import React from 'react'
import Image from 'next/image';
import profile0 from '../../public/assets/images/profile0.png' 
import profile1 from '../../public/assets/images/profile1.png' 
import profile2 from '../../public/assets/images/profile2.jpg' 
export default function Updates() :JSX.Element {
  return (
    <div className='theme mt-10 flex justify-center mx-auto shadow-xl h-52 w-full md:w-96 border-l-2 border-l-blue-400' >
        <section className='text-center'> 
            <h1 className='text-xl font-bold mb-2'>Recentes Updates</h1>
            <ul>
                <li className='relative'>
                    <div className='flex'>
                        <Image
                        className='rounded-full'
                        src={profile0}
                        width='40'
                        height='40'
                        alt='profile0'
                        />
                        <h3 className='ml-2 mt-2 font-semibold'>Mike</h3>
                        <p className='mt-2 ml-1'>received his poco f4 order</p>
                    </div>
                    <small className='absolute top-8 left-12 text-slate-500'>1 week ago</small>
                </li>
                <li className='relative mt-4'>
                    <div className='flex'>
                        <Image
                        className='rounded-full'
                        src={profile1}
                        width='40'
                        height='40'
                        alt='profile1'
                        />
                        <h3 className='ml-2 mt-2 font-semibold'>Ashley</h3>
                        <p className='mt-2 ml-1'>received his iphone 12 pro order</p>
                    </div>
                    <small className='absolute top-8 left-12 text-slate-500'>1 month ago</small>
                </li>
                <li className='relative mt-4'>
                    <div className='flex'>
                        <Image
                        className='rounded-full'
                        src={profile2}
                        width='40'
                        height='40'
                        alt='profile2'
                        />
                        <h3 className='ml-2 mt-2 font-semibold'>John</h3>
                        <p className='mt-2 ml-1'>received his MacBook pro order</p>
                    </div>
                    <small className='absolute top-8 left-12 text-slate-500'>2 month ago</small>
                </li>
            </ul>
        </section>
    </div>
  )
}
