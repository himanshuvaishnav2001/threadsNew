import React from 'react'
import {ThreadsPost} from './ThreadsPost'
import post1 from './../Photos/Post/Post1.jpg'
import {Data} from './DataProfile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartArea, faChartBar, faChartLine, faChartSimple, faInstitution } from '@fortawesome/free-solid-svg-icons'
import Logo from './../Photos/Logo/pngwing.com.png'

function UserProfile() {

    
    
  return (
    <div className='text-white rounded-tr-2xl rounded-tl-2xl '>
        <UserDetail />
        <PostMethod />
        {
                Data.map((val, idx)=>{
                        return(
                            <ThreadsPost  pitems={val} key={idx} />
                        )
                })
            }
    </div>
  )
}


function UserDetail(){
    return(
        <div>
            <div className='w-full h-[50%] bg-[#181818] rounded-tr-2xl rounded-tl-2xl max-sm:text-[13px] max-sm:pl-3 pl-10 border-b-[1px] border-[#3f3d3d]'>

                
                                    <div className='w-full h-32 flex content-center pt-8 max-sm:pt-2 relative  text-left'>
                                                    <div className='pt-5 items-center  '>
                                                    <h1 className='text-2xl font-semibold max-sm:text-[20px] max-sm:mr-20 '> Himanshu Vaishnav </h1>
                                                    <p> marvels_avenger__</p>
                                                    </div>
                                                    <div className=''> 
                                                            <h1 className='rounded-[50%] size-24 absolute right-6 overflow-hidden max-sm:size-14 max-sm:mt-6 '> 
                                                                <img src={post1} />
                                                            </h1>
                                                    </div>
                                    </div>


                                                    <div className='max-sm:pr-10'>
                                                    I know what I want, what kind of God I need to be - for you, for all of us 🩶
                                                    </div>


                    <div className='flex place-content-between  pt-5 '>
                                <div>
                                        <h1>
                                            12.4k followers
                                        </h1>
                                </div>

                                <div className='pr-10 max-sm:pr-6 flex'>
                                        <h1>
                                        <FontAwesomeIcon icon={faChartSimple} />
                                        </h1>
                                
                                        <h1 className='pl-5 w-20 mt-[-15px] max-sm:pl-2 max-sm:w-12 max-sm:mt-[-10px] '>
                                        <img src={Logo} />
                                        </h1>
                                </div>
                    </div>


                    <div className='pt-5  pr-5'>
                            <button className='w-full h-11  font-bold rounded-lg border-[2px] border-[white] '>
                                 Edit Profile
                            </button>



                    </div>

                    <div className='w-full h-14 flex place-content-evenly max-sm:place-content-around max-sm:pl-0  max-sm:pr-0    pt-5 pl-10 pr-10 '>
                       
                       
                        <div className=' hover:border-b-2 w-[33%] text-center '>
                             <button className='w-full '>
                                Threads
                             </button>
                        </div>

                        <div className='hover:border-b-2 w-[33%]  text-center '>
                             <button className='w-full'>
                                Replies
                             </button>
                        </div>

                        <div className='hover:border-b-2 w-[33%]  text-center'>
                             <button className='w-full'>
                                Reposts
                             </button>
                        </div>
                    </div>

                

            </div>
        </div>
    )
}


function PostMethod(){
    return(
        <div className='border-b-[1px]  border-[#3f3d3d]'>
            <div className='h-20 flex ml-10 max-sm:ml-4 place-items-center  text-center relative'>
                <div className='flex items-center'>
                    <div className='size-12 max-sm:size-8 bg-black rounded-[50%] overflow-hidden '>
                        <img src={post1} />
                    </div>
                    <div className='pl-3 max-sm:text-[12px] '>
                        <input placeholder="What's New ? " type='text' className='bg-transparent border-none text-[#757272]' />
                           
                        
                    </div>
                </div>

                <div className='absolute right-10 max-sm:right-2'>
                    <button className=' w-16 h-10 border-[1px] rounded-lg max-sm:w-11 max-sm:h-6 max-sm:text-[10px] '>
                        Post
                    </button>
                </div>
            </div>
        </div>
    )
}

export {UserDetail, UserProfile, PostMethod }