import React from 'react';
import {
BsFacebook,
BsInstagram,
BsGithub
} from 'react-icons/bs'

function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] p-4 cursor-pointer'>IbraTech</h1>
        <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officiis assumenda ducimus ut libero, ab laudantium asperiores accusamus exercitationem aliquid.</p>
        </div>
        <div className='flex justify-between md:w-[75%] my-6'>
            <BsFacebook size={30} />
            <BsInstagram size={30} />
            <BsGithub size={30} />
        </div>
        <div className='lg:col-span-3 flex justify-between '>
            <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Ecomerce</li>
                    <li className='py-2 text-sm'>Insights</li>
                </ul>
            </div>
            {/*                                       S e c o n d   O n e                                       */}
            <div className='lg:col-span-3 flex justify-between '>
                <div>
                    <h6 className='font-medium text-gray-400'>Support</h6>
                    <ul>
                        <li className='py-2 text-sm'>Pricing</li>
                        <li className='py-2 text-sm'>Documentation</li>
                        <li className='py-2 text-sm'>Guides</li>
                        <li className='py-2 text-sm'>API Status</li>
                    </ul>
                </div>
            </div>
            {/*                                        T h i r d    S e r v i c e                                */}
            <div className='lg:col-span-3 flex justify-between '>
                <div>
                    <h6 className='font-medium text-gray-400'>Company</h6>
                    <ul>
                        <li className='py-2 text-sm'>About</li>
                        <li className='py-2 text-sm'>Blogs</li>
                        <li className='py-2 text-sm'>Jobs</li>
                        <li className='py-2 text-sm'>Careers</li>
                    </ul>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Footer;