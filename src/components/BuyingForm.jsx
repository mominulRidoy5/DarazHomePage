import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function BuyingForm() {
  return (
  <>
  <div className='BackgroundImg'>
<div className='inline-block'>
  <h1 className='text-white text-2xl sm:me-36  sm:mt-6'>Hi, How can we Help?</h1>
<div className='flex items-center justify-end m-1 '>
<input placeholder='Search for a question. Like: How to use Daraz collection point?' className=' w-screen h-10 ps-2 inputText rounded-md  sm:w-96 relative '></input>
<span className='bg-orange-600 text-white p-3 pe-6 ps-6 rounded-sm absolute'><FaSearch/></span>
</div>
</div>

  </div>
  </>
  )
}
