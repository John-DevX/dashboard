import React from 'react';
import Image from 'next/image';
import linkedin from '../public/assets/images/linkedin.png';
import email from '../public/assets/images/email.png';
import instagram from '../public/assets/images/instagram.png';
import twiiter from '../public/assets/images/twiiter.png';
 function Cards() {
  return (
    <div className='overflow-x-auto'>
        <h3 className='font-bold mb-10'>Get Started with our Most Popular Workflows</h3>
        <div className='flex'>
            <CardsF 
            title='Linkedin workflow'
            image={linkedin}
            alt='Linkedin logo'
            />
            <CardsF 
            title='Email workflow'
            image={email}
            alt='Email logo'
            />
            <CardsF 
            title='Instagram workflow'
            image={instagram}
            alt='Instagram logo'
            />
            <CardsF 
            title='twiiter Workflow'
            image={twiiter}
            alt='Twiiter logo'/>
        </div>        
    </div>
  )
}

export default Cards;

export const CardsF = ({title, image, alt}:any)=>{
    return(
        <div>
        <section className='shadow w-44 h-52 p-5 text-center ml-5 transition'>
            <div className='flex justify-center'>
                <Image
                className='rounded-full w-10 h-10'
                 src={image}
                 alt={alt}
                 width='100'
                 height='100'
                />
            </div>
            <h4 className='text-ms mt-2'>{title}</h4>
            <small className='text-xs mt-2 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
        </section>
        </div>
    )
}

