import React from 'react'

export default function Date() :JSX.Element {
  return (
    <div className='mt-14'>
        <h1 className='font-bold mb-2'>Dashboard</h1>
        <input className='shadow-xl rounded outline-none focus:bg-blue-100 cursor-pointer' type="date" />
    </div>
  )
}
