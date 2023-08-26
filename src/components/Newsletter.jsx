import React from 'react';

function Newsletter() {
  return (
    <div className='w-full bg-black py-16 text-white '>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 ml-[20px]'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full ml-[20px]'>
                    <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter email' required/>
                    <button className='rounded-md bg-green-500 w-[200px] text-black font-medium my-6 mx-auto py-3 hover:bg-green-600 active:opacity-95'>Submit</button>
                </div>
                <p className='ml-[20px]'>We care about the protection of your data. Read our <span className='text-green-500 cursor-pointer active:opacity-90'>Privacy Policy.</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter;