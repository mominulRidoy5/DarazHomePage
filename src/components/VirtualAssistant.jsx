import React from 'react'
import { PiHeadphonesBold } from "react-icons/pi";


export default function VirtualAssistant() {
  return (
   <>
   <div className='mt-5 items-center justify-center flex '>
        
        <p className='pb-3 SubNavText font-semibold border-orange-600 border-b-2  text-gray-600'>Daz,Our Virtual Assistant:24/7</p>
        </div>
<div className='TextSize flex items-center justify-around mt-5'>
<div className=' bg-white sm:flex items-center sm:ps-2 hover:shadow-md shadow-gray-400 shadow-sm sm:gap-5 hover:shadow-gray-300  h-16 w-32 rounded-sm sm:h-16 sm:w-52 m-0.5'>
  <h1 className='inline-block mt-1 sm:mt-0 justify-center items-center text-sm sm:text-4xl bg-orange-600 text-white p-0.5 rounded-full border-2 '><PiHeadphonesBold /></h1>
<span>
    <p className='helpDeskText items-center justify-center text-gray-600 flex'>Chat with Us</p>
    <p className='SubNavText text-gray-600 flex items-center justify-center'> 24 Hours, 7 Days a Week</p>
    </span>
    </div>
    <div className=' sm:flex items-center sm:ps-2 hover:shadow-md shadow-gray-400 shadow-sm sm:gap-5 hover:shadow-gray-300 h-16 w-32 rounded-sm sm:h-16 sm:w-52 m-0.5'>
<img className='h-5 w-5 mt-1 sm:mt-0 sm:h-11 sm:w-11 inline-block items-center justify-center bg-orange-600  rounded-full' src="./src/assets/daraz_with_bg.png" alt="hello" />
<span>
    <p className='helpDeskText items-center justify-center text-gray-600 flex'>Seller Help Center</p>
    <p className='SubNavText text-gray-600 flex items-center justify-center'> 24 Hours, 7 Days a Week</p>
    </span>
    </div>
 





</div>
   
  </>
  )
}
