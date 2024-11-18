import React, { useState } from 'react'
import Pic1 from './../Photos/Post/profile1.jpg'

export default function Suggestion({pitem}) {
    const [follow, SetFollow] = useState(false);
    
  return (
    <div className='text-white flex place-items-center h-24  '>
        <img src={pitem.pic} className='size-10 rounded-[50%] mr-4 mb-8 ' />
        <div className='w-full border-b-[1px] border-[#4b4a4a] pb-3 '>

            <ul className=''> 
                <li className='font-bold'>
                  <h1>  {pitem.Profile} </h1>
                </li>

                <li className='mt-[-4px] max-sm:text-sm text-zinc-400 '>
                    {pitem.Bio}
                </li>

                <li className='text-[14px]  mt-2'>
                    {pitem.followers}
                </li>
            </ul>

        </div>

        <div className='absolute right-4 border-[1px] border-[#4b4a4a] w-28 h-8 rounded-xl  place-content-center max-sm:w-20 max-sm:right-0'>
            <button onClick={()=> SetFollow(!follow)} className='w-full'>
                {
                    follow ? 'following' : 'follow'
                }
            </button>
        </div>

    </div>
  )
}
