import React from 'react';
import {BsFillPersonFill} from 'react-icons/bs';
import {BsFillPersonPlusFill} from 'react-icons/bs';
import {BsPersonCheckFill} from 'react-icons/bs';

function Cards() {
  return (
    <div className='bg-white px-4 py-[10rem] w-full'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 cursor-pointer md:my-0'>
                <BsFillPersonFill
                 size={30}
                 className=' mx-auto mt-[-3rem] bg-white text-green-500' 
                />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-green-500 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start trial</button>
            </div>
            {/*                         S e c e n d     C a r d                                             */}
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 cursor-pointer md:my-0'>
                <BsFillPersonPlusFill
                 size={30}
                 className=' mx-auto mt-[-3rem] bg-white text-green-500' 
                />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='text-green-500 bg-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start trial</button>
            </div>
            {/*                                        T h i r d   D i v                                      */}
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 cursor-pointer md:my-0'>
                <BsPersonCheckFill
                 size={30}
                 className=' mx-auto mt-[-3rem] bg-white text-green-500' 
                />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-green-500 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards;