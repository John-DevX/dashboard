import React from 'react'
import { FaGithubAlt } from 'react-icons/fa';

export default function Developer() :JSX.Element{
  return (
    <div className='shadow-xl w-60 h-20 pt-1 border-b-2 border-b-blue-300'>
        <h4 className='font-bold text-center'>Developer John-DevX</h4>
        <div className='flex justify-center mt-3'>
            <FaGithubAlt className='text-xl github'/>
            <a className='ml-2 font-bold text-sm text-blue-500 border-blue-300 border-b-2' translate='no' href="https://github.com/John-devX">GitHub</a>
        </div>
    </div>
  )
}
