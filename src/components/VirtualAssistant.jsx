import React from 'react'
import { PiHeadphonesBold } from "react-icons/pi";


export default function VirtualAssistant() {
  return (
   <>
   <div className='mt-5 items-center justify-center flex '>
        
        <p className='pb-3 SubNavText font-semibold border-orange-600 border-b-2  text-gray-600'>Daz,Our Virtual Assistant:24/7</p>
        </div>
<div className='TextSize flex items-center justify-around mt-5'>
<div className=' flex items-center ps-2 hover:shadow-md shadow-gray-100 shadow-xl sm:gap-5 hover:shadow-gray-300 bg-green-500 h-24 w-24 sm:h-16 sm:w-52 m-0.5 sm:pt-4'>
  <h1 className='inline-block mt-1 sm:mt-0 justify-center items-center text-sm sm:text-4xl bg-orange-600 text-white p-0.5 rounded-full border-2 '><PiHeadphonesBold /></h1>
<span className=''>
    <p className='helpDeskText text-gray-600 flex'>Chat with Us</p>
    <p className='SubNavText text-gray-600 flex'> 24 Hours, 7 Days a Week</p>
    </span>
    </div  >
<div className='hover:bg-slate-100 borders border-gray-200 h-14 w-24 sm:h-20 sm:w-44 m-0.5 sm:pt-4'>
  <h1 className='inline-block mt-1 sm:mt-0 justify-center items-center text-sm sm:text-2xl text-orange-600 p-0.5 rounded-full border-2 '></h1>
  <h1 className='font-medium text-gray-500'>Promotions</h1>
</div  >
<div className='hover:bg-slate-100 borders border-gray-200 h-14 w-24 sm:h-20 sm:w-44 m-0.5 sm:pt-4'>
  <h1 className='inline-block mt-1 sm:mt-0 justify-center items-center text-sm sm:text-2xl text-orange-600 p-0.5 rounded-full border-2 '></h1>
  <h1 className='font-medium text-gray-500'>Promotions</h1>
</div  >
<div className='hover:bg-slate-100 borders border-gray-200 h-14 w-24 sm:h-20 sm:w-44 m-0.5 sm:pt-4'>
  <h1 className='inline-block mt-1 sm:mt-0 justify-center items-center text-sm sm:text-2xl text-orange-600 p-0.5 rounded-full border-2 '></h1>
  <h1 className='font-medium text-gray-500'>Promotions</h1>
</div  >




</div>
   
  </>
  )
}
