import { } from 'react'
import './App.css'
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { FaAngleDown, FaGlobe, FaSearch, FaShoppingCart } from "react-icons/fa";
import HelpDesk from './components/HelpDesk';
import BuyingForm from './components/BuyingForm';
import SelfServices from './components/SelfServices';


export function UpperNav() {
  return (
    <>
    <div className='m-0.5 fixed w-screen'>
    <div className='flex justify-between p-1 sm:gap-18 bg-orange-600'>
<div className='upperNav w-screen font-semibold text-white flex justify-between'>
        <div className='flex gap-5 ms-5'>
        <p className='cursor-pointer hover:text-gray-300'>Become a Seller</p>
        <p className='cursor-pointer hover:text-gray-300'>Daraz Donates</p>
        <p className='cursor-pointer hover:text-gray-300'>Help & Support</p>
        </div>
    </div>

    <div className='-mt-1 flex w-screen text-white justify-end items-center'>

    <div className='me-10 p-1  ps-1 pe-1 rounded-md bg-red-800 flex  gap-2'>
   <img className='w-5 cursor-default h-5 rounded-sm' src="./src/assets/daraz_with_bg.png" alt="" />
        <p className='NavbarPara cursor-pointer hover:text-gray-300'>Save More on App</p>
    </div>
    
    </div>
   
 
</div>

<div className='SubNavText bg-orange-600 pb-1 sm:flex inline-block font-semibold text-white justify-around ps-1 pe-1 items-center'>
     <img className='sm:h-10 sm:w-20 h-5 w-10 inline-block items-center justify-center' src="./src/assets/daraz logo.png" alt="NavbarImg" />
<span className='flex items-center justify-around gap-1'>
<h1 className='cursor-pointer'>Categories</h1>
<h1 className='mt-1 hover:rotate-180'><FaAngleDown/></h1>
</span>
<span className='flex items-center '>
  <input className='relative outline-none md:ms-10 text-black sm:w-96 flex p-1.5 rounded-md' placeholder='Search in Daraz' type="text" />
<h1 className='absolute bg-red-100 text-orange-600 p-1 md:p-0.5 md:ps-2 md:pe-2  rounded-md flex ms-28 sm:ms-96 sm:text-xl'><CiSearch /></h1>
</span>
<span className='flex items-center justify-around gap-1 hover:bg-stone-600 hover:rounded-md hover:pt-0.5 hover:pb-0.5'>

<h1 className='font-bold text-xl'> <CiUser /></h1>
<h1>Login</h1>
</span>
<h1 className='inline md:items-center md:justify-center '>|</h1>
<h1 className=' hover:bg-stone-600 hover:rounded-md hover:pt-0.5 hover:pb-0.5'>Sign Up</h1>

<span className='flex items-center sm:justify-around gap-1  hover:bg-stone-600 hover:rounded-md hover:pt-0.5 hover:pb-0.5'>
  <a><FaGlobe /></a>
  <h1>EN</h1>
  <a className='mt-1 '><FaAngleDown /></a>
</span>

<a className='text-3xl flex items-center justify-center  hover:bg-stone-600 hover:rounded-md hover:pt-0.5 hover:pb-0.5' href=""> < CiShoppingCart/></a>

    </div>
    <HelpDesk/>
    <BuyingForm/>
    <SelfServices/>
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
