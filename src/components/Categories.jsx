import React from 'react'
import { CiBoxList, CiDollar, CiLock, CiMap, CiUser } from 'react-icons/ci'
import {  FaHandHoldingUsd, FaMoneyCheckAlt, FaTag, FaTicketAlt, FaUserAlt } from 'react-icons/fa'
import { RiContactsBook2Line, } from 'react-icons/ri'
import { TbHomeCancel } from 'react-icons/tb'
import { IoIosPricetag } from 'react-icons/io'
import { AiFillShopping } from "react-icons/ai";
import { BsFillBoxSeamFill } from "react-icons/bs"

export default function Categories() {
  return (
   <>
    <div>
    <div className='mt-5 items-center justify-center flex '>
        
        <p className='pb-3 SubNavText font-semibold border-orange-600 border-b-2  text-gray-600'>Categories</p>
        </div>
        <div className='sm:m-5'>
<div className='TextSize flex items-center justify-around mt-5'>
<span className='hover:bg-slate-100 borders border-gray-200 h-14 w-24 sm:h-20 sm:w-44 m-0.5 sm:pt-4'>
  <h1 className='inline-block mt-1 sm:mt-0 justify-center items-center text-sm sm:text-2xl text-orange-600 p-0.5 rounded-full border-2 '><IoIosPricetag/></h1>
  <h1 className='font-medium text-gray-500'>Promotions</h1>
</span  >
<span  className='hover:bg-slate-100 borders border-gray-200 h-14 w-24 sm:h-20 sm:w-44 m-0.5 sm:pt-4'>
  <h1 className=' inline-block mt-0.5 sm:mt-0 justify-center items-center text-sm sm:text-2xl text-orange-600 p-0.5 rounded-full border-2 '><FaUserAlt/></h1>
  <h1 className='font-medium text-gray-500'>Account Management</h1>
</span>
<span  className='hover:bg-slate-100 borders border-gray-200 h-14 w-24 sm:h-20 sm:w-44 m-0.5 sm:pt-4'>
  <h1 className='inline-block mt-1 sm:mt-0 justify-center items-center text-sm sm:text-2xl text-orange-600 p-0.5 rounded-full border-2 '><CiBoxList/></h1>
  <h1 className='font-medium text-gray-500'>Daraz Categories</h1>
</span>
<span  className='hover:bg-slate-100 borders border-gray-200 h-14 w-24 sm:h-20 sm:w-44 m-0.5 sm:pt-4'>
  <h1 className='inline-block mt-1 sm:mt-0 justify-center items-center text-lg sm:text-2xl text-orange-600 p-0.5 rounded-full border-2'><AiFillShopping/></h1>
  <h1 className='font-medium text-gray-500'>Orders</h1>
</span>
</div>
<div className='flex TextSize sm:mt-5  items-center justify-around mt-2'>
<span className='hover:bg-slate-100 borders border-gray-200 h-14 w-24 sm:h-20 sm:w-44 m-0.5 sm:pt-4'>
  <h1 className='inline-block sm:mt-0 justify-center items-center text-sm sm:text-2xl text-orange-600 border-2 p-0.5 rounded-full'><BsFillBoxSeamFill/> </h1>
  <h1 className='font-medium text-gray-500'>Shipping & Delivery</h1>
</span  >
<span  className='hover:bg-slate-100 borders border-gray-200 h-14 w-24 sm:h-20 sm:w-44 m-0.5 sm:pt-4'>
  <h1 className='inline-block mt-1 sm:mt-0 justify-center items-center text-sm sm:text-2xl text-orange-600 border-2 p-0.5 rounded-full'><FaMoneyCheckAlt/></h1>
  <h1 className='font-medium text-gray-500'>Payments</h1>
</span>
<span  className='hover:bg-slate-100 borders border-gray-200 h-14 w-24 sm:h-20 sm:w-44 m-0.5 sm:pt-4'>
  <h1 className='inline-block mt-1 sm:mt-0 justify-center items-center text-lg sm:text-2xl bg-red-200 p-0.5 rounded-full'><RiContactsBook2Line/></h1>
  <h1 className='font-medium text-gray-500'>Returns & Refunds</h1>
</span>
<span  className='hover:bg-slate-100 borders border-gray-200 h-14 w-24 sm:h-20 sm:w-44 m-0.5 sm:pt-4'>
  <h1 className='inline-block sm:mt-0 justify-center items-center text-lg sm:text-2xl bg-red-200 p-0.5 rounded-full'><TbHomeCancel/></h1>
  <h1 className='font-medium text-gray-500'>Sell on Daraz</h1>
</span>
</div>


        </div>
    </div>
   </>
  )
}
