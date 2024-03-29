import React from 'react'
import { CiDollar, CiLock, CiMap, CiUser } from 'react-icons/ci'
import {  FaHandHoldingUsd, FaTicketAlt } from 'react-icons/fa'
import { RiContactsBook2Line, } from 'react-icons/ri'
import { TbHomeCancel } from 'react-icons/tb'

export default function SelfServices() {
  return (
   <>
    <div>
    <div className='mt-5 items-center justify-center flex '>
        
        <p className='pb-3 SubNavText font-semibold border-orange-600 border-b-2  text-gray-600'>Self Service Tools</p>
        </div>
        <div className='sm:m-5'>
<div className='TextSize flex items-center justify-around mt-5'>
<span className='hover:bg-slate-100 borders border-gray-200 h-14 w-24 sm:h-20 sm:w-44 m-0.5 sm:pt-4'>
  <h1 className='inline-block mt-1 sm:mt-0 justify-center items-center text-lg sm:text-2xl bg-red-200 p-0.5 rounded-full'><CiMap/></h1>
  <h1 className='font-medium text-gray-500'>Track My Order</h1>
</span  >
<span  className='hover:bg-slate-100 borders border-gray-200 h-14 w-24 sm:h-20 sm:w-44 m-0.5 sm:pt-4'>
  <h1 className=' inline-block sm:mt-0 justify-center items-center text-lg sm:text-2xl bg-red-200 p-0.5 rounded-full'><CiLock/></h1>
  <h1 className='font-medium text-gray-500'>My Password Reset</h1>
</span>
<span  className='hover:bg-slate-100 borders border-gray-200 h-14 w-24 sm:h-20 sm:w-44 m-0.5 sm:pt-4'>
  <h1 className='inline-block sm:mt-0 justify-center items-center text-lg sm:text-2xl bg-red-200 p-0.5 rounded-full'><CiDollar/></h1>
  <h1 className='font-medium text-gray-500'>My Payment Options</h1>
</span>
<span  className='hover:bg-slate-100 borders border-gray-200 h-14 w-24 sm:h-20 sm:w-44 m-0.5 sm:pt-4'>
  <h1 className='inline-block mt-1 sm:mt-0 justify-center items-center text-lg sm:text-2xl bg-red-200 p-0.5 rounded-full'><CiUser/></h1>
  <h1 className='font-medium text-gray-500'>My Profile</h1>
</span>
</div>
<div className='flex TextSize sm:mt-5  items-center justify-around mt-2'>
<span className='hover:bg-slate-100 borders border-gray-200 h-14 w-24 sm:h-20 sm:w-44 m-0.5 sm:pt-4'>
  <h1 className='inline-block mt-1 sm:mt-0 justify-center items-center text-lg sm:text-2xl bg-red-200 p-0.5 rounded-full'><FaTicketAlt/> </h1>
  <h1 className='font-medium text-gray-500'>My Vouchers</h1>
</span  >
<span  className='hover:bg-slate-100 borders border-gray-200 h-14 w-24 sm:h-20 sm:w-44 m-0.5 sm:pt-4'>
  <h1 className='inline-block mt-1 sm:mt-0 justify-center items-center text-lg sm:text-2xl bg-red-200 p-0.5 rounded-full'><FaHandHoldingUsd/></h1>
  <h1 className='font-medium text-gray-500'>Return My Order</h1>
</span>
<span  className='hover:bg-slate-100 borders border-gray-200 h-14 w-24 sm:h-20 sm:w-44 m-0.5 sm:pt-4'>
  <h1 className='inline-block mt-1 sm:mt-0 justify-center items-center text-lg sm:text-2xl bg-red-200 p-0.5 rounded-full'><RiContactsBook2Line/></h1>
  <h1 className='font-medium text-gray-500'>My Address Book</h1>
</span>
<span  className='hover:bg-slate-100 borders border-gray-200 h-14 w-24 sm:h-20 sm:w-44 m-0.5 sm:pt-4'>
  <h1 className='inline-block mt-1 sm:mt-0 justify-center items-center text-lg sm:text-2xl bg-red-200 p-0.5 rounded-full'><TbHomeCancel/></h1>
  <h1 className='font-medium text-gray-500'>Cancel My Order</h1>
</span>
</div>


        </div>
    </div>
   </>
  )
}
