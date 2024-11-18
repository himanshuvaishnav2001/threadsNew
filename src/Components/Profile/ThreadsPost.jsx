import React from 'react'
import post1 from './../Photos/Post/Post1.jpg'
import {Data} from './DataProfile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart, faRepeat, faShare } from '@fortawesome/free-solid-svg-icons'

export function ThreadsPost({pitems}) {
    return(


        <div className='w-full h-[520px] max-sm:h-[450px] border-b-[1px] border-[#3f3d3d]'>
        
        <div className=' bg-red '>
            
        <div className=' mt-5'>
            <div className='h-14 flex ml-10 max-sm:ml-4 place-items-center  text-center relative max-sm:text-[12px] '>
                <div className='flex items-center'>
                    <div className='size-12 bg-black rounded-[50%] overflow-hidden max-sm:size-8 '>
                        <img src={pitems.profile} className=' ' />
                    </div>
                    <div className='pl-3 '>
                        <button >
                        
                           <h1>
                           {pitems.title}
                            </h1> 
                            
                        </button>
                    </div>
                    
                </div>

                <div className='absolute right-10 max-sm:right-0'>
                    <button className=' w-16 h-10 mt-[-10px] text-4xl text-center max-sm:text-xl'>
                        ...
                    </button>
                </div>
            </div>
        </div>

        <div className='w-3/4 h-full max-sm:h-4/5'>

        <div className='   pl-24 bg-cover max-sm:pl-10'>
                    <img src={pitems.post} className='h-96 max-sm:h-80  rounded-xl' />
        </div>

        <div className='pt-5 pl-24 max-sm:pl-10 max-sm:text-sm'>
            <button className='pr-6 max-sm:pr-3'>
                <FontAwesomeIcon icon={faHeart} />
            </button>
            <button className='pr-6 max-sm:pr-3'>
            <FontAwesomeIcon icon={faComment} />
            </button>
            <button className='pr-6 max-sm:pr-3'>
            <FontAwesomeIcon icon={faRepeat} />
            </button >

            <button className='pr-6 max-sm:pr-3'>
            <FontAwesomeIcon icon={faShare} />
            </button >
        </div>
            
        </div>

        
                
            </div>

    </div>
        
    )
}

function ProfileUser(){
    return(
        <div>
            
        </div>
    )
}