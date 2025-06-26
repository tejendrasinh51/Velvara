import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img className='mb-5 w-32' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit /amet consectetur, adipisicing elit. Corporis explicabo vitae tenet.   
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMAPNY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91-123456789</li>
                <li>velvara@gmail.com</li>
            </ul>
        </div>
      </div>

      <div> 
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@ Velvara.com -All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
