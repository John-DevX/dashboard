import React from 'react'
import { FaGithubAlt } from 'react-icons/fa';

export default function Developer() :JSX.Element{
  return (
    <div className='theme shadow-xl w-full md:w-60 h-20 pt-4 border-b-2 border-b-blue-400 md:mt-10 rounded-md'>
        <h4 className='font-bold text-center mb-2'>Developer John-DevX</h4>
        <div className='flex justify-center'>
            <FaGithubAlt className='text-xl github'/>
            <a className='ml-2 font-bold text-sm border-blue-400 border-b-2' translate='no' href="https://github.com/John-devX">GitHub</a>
        </div>
    </div>
  )
}
