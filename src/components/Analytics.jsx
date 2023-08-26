import React from 'react';
import Data from '../assests/data.png';

function Analytics() {
  return (
    <div className='w-full bg-white py-6 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={Data} alt="Data-anaystics"  className='cursor-pointer rounded-md w-[500px] mx-auto my-4'/>
            <div className='flex flex-col justify-center'>
                <p className='text-green-500 text-xl font-bold'>Data analystics Dashboard</p>
                <h1 className='text-2xl py-1 font-bold'>Manage Data Analystics Centrally</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut possimus, ad iure rem ipsam odio aliquam quasi optio magni veniam eum quos rerum tempore amet facere laboriosam esse quisquam non.
                </p>
                <button className='rounded-md bg-black w-[200px] text-green-500 font-medium my-6 mx-auto py-3 active:opacity-90 mx-auto md:mx-0'>Get started</button>

            </div>
        </div>
    </div>
  )
}

export default Analytics;