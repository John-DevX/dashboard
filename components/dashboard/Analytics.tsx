import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { RiHandbagFill } from "react-icons/ri";
import { BsPersonCircle } from "react-icons/bs";

export default function Analytics() {
  return (
    <div>
        <div className='theme shadow-xl md:w-3/4 h-60 mx-auto relative hover:border-b-4 hover:border-b-blue-400 duration-500 rounded-xl'>
          <h4 className='font-bold text-sm text-center pt-5'>Workflow history</h4>
          <section className='flex'>
            <ul className='text-xs'>
              <li className='mb-10'>800</li>
              <li className='mb-10'>600</li>
              <li className='mb-10'>400</li>
              <li>200</li>
            </ul>
            <div>
              <div className='text-blue-300 bg-blue-300 h-5 absolute bottom-4 left-10 rounded'>|</div>
              <small className='absolute bottom-0 left-10 text-xs'>w-1</small>
              <div className='text-blue-300 bg-blue-300 h-14 absolute bottom-4 left-20 rounded'>|</div>
              <small className='absolute bottom-0 left-20 text-xs'>w-2</small>
          
              <div className='text-blue-300 bg-blue-300 h-16 absolute bottom-4 left-32 rounded'>|</div>
              <small className='absolute bottom-0 left-32 text-xs'>w-3</small>
          
              <div className='text-blue-300 bg-blue-300 h-20 absolute bottom-4 left-44 rounded'>|</div>
              <small className='absolute bottom-0 left-44 text-xs'>w-4</small>
          
              <div className='text-blue-300 bg-blue-300 h-20 absolute bottom-4 left-56 rounded'>|</div>
              <small className='absolute bottom-0 left-56 text-xs'>w-5</small>
          
              <div className='text-blue-300 bg-blue-300 h-32 absolute bottom-4 left rounded'>|</div>
              <small className='absolute bottom-0 left text-xs'>w-6</small>
          
              <div className=' hidden md:flex text-blue-300 bg-blue-300 h-16 absolute bottom-4 left_W7 rounded'>|</div>
              <small className='hidden md:flex absolute bottom-0 left_W7 text-xs'>w-7</small>
          
              <div className=' hidden md:flex text-blue-300 bg-blue-300 h-24 absolute bottom-4 left_W8 rounded'>|</div>
              <small className='hidden md:flex absolute bottom-0 left_W8 text-xs'>w-8</small>
          
              <div className=' hidden md:flex text-blue-300 bg-blue-300 h-32 absolute bottom-4 left_W9 rounded'>|</div>
              <small className='hidden md:flex absolute bottom-0 left_W9 text-xs'>w-9</small>
          
              <div className=' hidden md:flex text-blue-300 bg-blue-300 h-32 absolute bottom-4 left_W10 rounded'>|</div>
              <small className='hidden md:flex absolute bottom-0 left_W10 text-xs'>w-10</small>
          
              <div className=' hidden md:flex text-blue-300 bg-blue-300 h-44 absolute bottom-4 left_W11 rounded'>|</div>
              <small className='hidden md:flex absolute bottom-0 left_W11 text-xs'>w-11</small>
            </div>
          </section>
        </div>
        <section className='mt-16'>
        <h1 className='font-bold text-xl ml-20'>Sales Analytics</h1>
          <div className='flex flex-wrap justify-center'>
            <Sales 
            icon={<FaShoppingCart />}
            title='Online Ordes'
            percentage='+50%'
            value='5050'
            color='rgb(43, 239, 239)'
            colorIcon='blue'
            classes='border-efect theme shadow-xl w-60 h-14 mt-5 mr-5 rounded-md'
            />
            <Sales
            icon={<RiHandbagFill />}
            title='Offline Ordes'
            percentage='-17%'
            value='1100'
            color='red'
            colorIcon='red'
            classes='border-efect2 theme shadow-xl w-60 h-14 mt-5 mr-5 rounded-md'
            />
            <Sales
            icon={<BsPersonCircle />}
            title='New Customers'
            percentage='+20%'
            value='2240'
            color='rgb(43, 239, 239)'
            colorIcon='rgb(54, 217, 217)'
            classes='border-efect theme shadow-xl w-60 h-14 mt-5 mr-5 rounded-md'
            />
          </div>
        </section>
    </div>
  )
}

export function Sales({icon,title, percentage, value, color, colorIcon, classes} :any){
  return(
            <div className={classes}>
              <section className='flex mt-1'>
                <div style={{color: `${colorIcon}`}}>
                  {icon}
                </div>
                <h4 className='font-semibold ml-2'>{title}</h4>
                <small className='text-xs ml-5 mt-1'>
                  <small style={{color: `${color}`}}>{percentage}</small>
                  </small>
                <small className='text-xs ml-2 mt-1'>{value}</small>
              </section>
                <small className='text-xs ml-7'>Last 24 hours</small>
            </div>
  )
}