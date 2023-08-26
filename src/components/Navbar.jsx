import React from 'react';
import { useState } from 'react';
import {FiMenu} from 'react-icons/fi';
import {AiOutlineCloseCircle} from 'react-icons/ai';



function Navbar() {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

  return (
    <div className='text-white flex justify-spacebetween items-center px-4 max-w-[1240px] mx-auto'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] p-4 cursor-pointer	'>IbraTech</h1>
        <ul className='hidden md:flex'>
            <li className='p-4 cursor-pointer'>Home</li>
            <li className='p-4 cursor-pointer'>Company</li>
            <li className='p-4 cursor-pointer'>About</li>
            <li className='p-4 cursor-pointer'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
           {!nav ? <AiOutlineCloseCircle size={30} className='cursor-pointer text-white'/> : <FiMenu size={30} className='cursor-pointer'/>}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-700' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] p-4 cursor-pointer	'>IbraTech</h1>
            <ul className='pt-12 uppercase p-4'>
                <li className='p-4 cursor-pointer border-b border-gray-600 ease-in-out duration-700'>Home</li>
                <li className='p-4 cursor-pointer border-b border-gray-600 ease-in-out duration-700'>Company</li>
                <li className='p-4 cursor-pointer border-b border-gray-600 ease-in-out duration-700'>About</li>
                <li className='p-4 cursor-pointer'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;