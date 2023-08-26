import React from 'react';
import Typed from 'react-typed';

function Hero() {
  return (
    <div className='text-white '>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-green-500 uppercase font-bold'>Growth with data analytics</p>
            <p className='text-2xl font-bold md:py-6 sm:text-6xl'>Growth With Data.</p>
            <div className='flex items-center justify-center'>
                <p className='font-bold'><span className='text-green-500'>Fast,</span> <span className=''>flexible financing for</span></p>
                <Typed
                className='text-sm font-bold md:py-2 sm:text-xl ml-[5px] text-gray-700 cursor-pointer md:pl-3 pl-1'
                strings={['BTB', 'BTC', 'SAAS']} 
                typeSpeed={120}
                backSpeed={140}
                loop
                />
            </div>
            <div className='flex flex-col justify-center align-center'>
              <p className='md:text-2xl text-xl font-bold text-gray-500 '>
                Monitor your data analystics to increase revenue for BTC, BTC, & SAAS platformes.
              </p>
              <button className='rounded-md bg-green-500 w-[200px] text-black font-medium my-6 mx-auto py-3 hover:bg-green-600 active:opacity-95'>Get started</button>
            </div>
        </div>
    </div>
  )
}

export default Hero;