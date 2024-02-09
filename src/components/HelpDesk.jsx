import React from 'react'

export default function HelpDesk() {
  return (
<>
<div className='flex p-2 items-center justify-between'>

<h1 className='text-xl text-gray-600 flex'>Help Center</h1>

<span className='SubNavText flex text-slate-700 items-center justify-between gap-5'>
    <a className='hover:text-orange-500' href="">Home Page</a>
    <a className='hover:text-orange-500' href="">FAQ</a>
</span>

</div>

</>

    )
}
