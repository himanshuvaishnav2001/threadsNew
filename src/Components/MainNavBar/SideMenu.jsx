import React from 'react'

export default function SideMenu({pitems}){
    return(
        <div className='w-full h-full text-white text-left '>
            <div className='h-10 pl-4 p-1 mb-3 hover:bg-[rgba(0,0,0,.3)] hover:transition-all delay-100 hover:rounded-xl '> {pitems.Heading}</div>
            
        </div>
    )
}
