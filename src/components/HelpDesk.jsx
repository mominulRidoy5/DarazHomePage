import React from 'react'

export default function HelpDesk() {
  return (
<>
<div className='flex p-3  justify-between'>

<a className='text-lg font-semibold cursor-pointer text-gray-600 flex'>Help Center</a>

<span className='SubNavText flex text-slate-700  justify-between gap-5'>
    <a className='hover:text-orange-500 border-orange-600 hover:border-y-2  ToolsBorder' href="">Home Page</a>
    <a className='hover:text-orange-500' href="">FAQ</a>
</span>

</div>

</>

    )
}
