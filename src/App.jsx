import { } from 'react'
import './App.css'
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { FaAngleDown, FaGlobe, FaSearch, FaShoppingCart } from "react-icons/fa";
import HelpDesk from './components/HelpDesk';
import BuyingForm from './components/BuyingForm';
import SelfServices from './components/SelfServices';
import Categories from './components/Categories';
import VirtualAssistant from './components/VirtualAssistant';
import EndSite from './components/EndSite';


export function UpperNav() {
  return (
    <>
    <div className='m-0.5 bg-slate-50'>
    <div className='flex justify-between p-1 sm:gap-18 bg-orange-600'>
<div className='upperNav w-screen font-semibold text-white flex justify-between'>
        <div className='flex gap-5 ms-5'>
        <p className='cursor-pointer hover:text-gray-300'>Become a Seller</p>
        <p className='cursor-pointer hover:text-gray-300'>Daraz Donates</p>
        <p className='cursor-pointer hover:text-gray-300'>Help & Support</p>
        </div>
    </div>

    <div className='flex sm:w-screen text-white justify-end items-center'>

    <div className='me-10 sm:-mt-1 p-1  ps-1 pe-1 rounded-md bg-red-800 flex  gap-2'>
   <img className='w-5 cursor-default h-5 rounded-sm' src="./src/assets/daraz_with_bg.png" alt="" />
        <p className='NavbarPara cursor-pointer hover:text-gray-300'>Save More on App</p>
    </div>
    
    </div>
   
 
</div>

<div className='SubNavText lg:h-96 bg-orange-600 pb-1 sm:flex inline-block font-semibold text-white justify-around ps-1 pe-1 items-center'>
     <img className='sm:h-10 mt-2 sm:mt-0 sm:w-20 h-5 w-10 inline-block items-center justify-center' src="./src/assets/daraz logo.png" alt="NavbarImg" />
<span className='flex items-center justify-around gap-1 hover:bg-stone-700 sm:hover:p-1 mt-1 sm:mt-0 rounded-md'>
<h1 className='cursor-pointer'>Categories</h1>
<a className='mt-1  hover:rotate-180'><FaAngleDown/></a>
</span>
<span className='flex items-center  mt-1 sm:mt-0'>
  <input className='relative outline-none md:ms-10 text-black sm:w-96 flex p-1.5 rounded-md' placeholder='Search in Daraz' type="text" />
<h1 className='absolute bg-red-100 text-orange-600 p-1 md:p-0.5 md:ps-2 md:pe-2  rounded-md flex ms-28 sm:ms-96 sm:text-xl'><CiSearch /></h1>
</span>
<span className=' mt-1 sm:mt-0 flex items-center justify-around gap-1 hover:bg-stone-700 hover:rounded-md sm:hover:p-1'>
<a className='font-bold text-lg cursor-pointer'> <CiUser /></a>
<h1>Login</h1>
</span>
<h1 className='inline md:items-center md:justify-center '>|</h1>
<h1 className=' mt-1 sm:mt-0 hover:bg-stone-600 hover:rounded-md sm:hover:p-1'>Sign Up</h1>

<span className=' mt-1 sm:mt-0 flex items-center  justify-center gap-1  hover:bg-stone-700  hover:rounded-md sm:hover:p-1'>
  <a><FaGlobe /></a>
  <h1>EN</h1>
  <a className='mt-2 sm:mt-0 '><FaAngleDown /></a>
</span>

<a className='text-3xl flex items-center justify-center  hover:bg-stone-700 hover:rounded-md sm:hover:p-1' href=""> < CiShoppingCart/></a>

    </div>
    <HelpDesk/>
    <BuyingForm/>
    <SelfServices/>
    <div>
      <div className='mt-2 font-semibold SubNavText flex justify-center text-gray-600 sm:mt-12'>
        <p className='border-orange-600 border-b-2 pb-3'>Top Questions</p>
      </div>
      <div className='cursor-pointer inline-block sm:flex m-1 justify-between sm:ms-12 sm:me-12 items-center'>
        <div className='helpDeskText text-gray-600'>
        <span className='flex items-center gap-1 hover:text-orange-600'>
          <h1 className='mb-4 text-2xl text-orange-500'>.</h1>
          <h1>What are the Terms and Conditions for Buy More,Save More?</h1>
        </span>
        <span className='flex items-center gap-1 hover:text-orange-600'>
          <h1 className='mb-4 text-orange-600 text-2xl'>.</h1>
          <h1>What  are te most common reasons for delivery delays?</h1>
        </span>
        <span className='flex items-center gap-1 hover:text-orange-600'>
          <h1 className='mb-4 text-orange-500 text-2xl'>.</h1>
          <h1>What are the Refund Timelines?</h1>
        </span>
                </div>
                <div className='helpDeskText text-gray-600'>
        <span className='flex  items-center  gap-1 hover:text-orange-600'>
          <h1 className='mb-4 text-orange-500 text-2xl'>.</h1>
          <h1>What are the Terms and Conditions for Any 3 Bundle?</h1>
        </span>
        <span className='flex  items-center gap-1 hover:text-orange-600'>
          <h1 className='mb-4 text-orange-500 text-2xl'>.</h1>
          <h1>How do I return my item?</h1>
        </span>
        <span className='flex items-center  gap-1 hover:text-orange-600'>
          <h1 className='mb-4 text-orange-500 text-2xl'>.</h1>
          <h1>How to use Daraz Collection Point?</h1>
        </span>
                </div>
                <div className='helpDeskText text-gray-600'>
        <span className='flex items-center  gap-1 hover:text-orange-600'>
          <h1 className='mb-4 text-orange-500 text-2xl'>.</h1>
          <h1>What are the 'Delivery Timelines'?</h1>
        </span>
        <span className='flex items-center gap-1 hover:text-orange-600'>
          <h1 className='mb-4 text-orange-500 items-center text-2xl'>.</h1>
          <h1>How can I cancel my order?</h1>
        </span>
        <span className='flex items-center gap-1 hover:text-orange-600'>
          <h1 className='mb-4 text-orange-500 items-center text-2xl'>.</h1>
          <h1>What is Mystery Bos(x)?</h1>
        </span>

                </div>
      </div>
      
    </div>
    <Categories/>
    <VirtualAssistant/>
    <EndSite/>
    </div>

    </>
  )
}



function App() {

  return (
    <>
<UpperNav/>

  
    </>
  )
}

export default App
