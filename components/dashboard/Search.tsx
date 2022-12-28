import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
const Search = () => {
  return (
    <div className='relative'>
        <AiOutlineSearch className='search absolute left-12 top-2'/>
        <input type="text" 
        className='border-solid border rounded outline-none border-color text-sm p-1 ml-10 pl-8 focus:bg-gray-100' 
        placeholder='Search'/>
    </div>
  )
}

export default Search;