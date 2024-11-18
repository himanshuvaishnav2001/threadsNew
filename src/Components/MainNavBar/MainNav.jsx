import React, { useState } from 'react'
import Logo from './../Photos/Logo/pngwing.com.png'
import UserProfile from '../Profile/UserProfile'
import SideMenu from './SideMenu';

export default function MainNav() {

    const DataBase = [
        {
            Heading : 'Appearance'
        },
        {
            Heading : 'Insights'
        },
        {
            Heading : 'Settings'
        },
        {
            Heading : 'Saved'
        },
        {
            Heading : 'Liked'
        },
    ]

    const [isMenuOpen, SetIsMenuOpen] = useState(false);


    const toggleMenu = () => SetIsMenuOpen(!isMenuOpen);

    

  return (
    <div className='bg-[rgba(0,0,0,.9)]'>

                    {/* ---------------top Header------------------ */}
                    <div className='w-full h-12 text-white fixed top-0 z-10'>
                                        <div className='h-12 flex justify-between items-center bg-[rgba(0,0,0,1)] max-sm:h-10 '>
                                                        <div className='max-sm:w-[90%] max-sm:pl-20 max-sm:place-items-center'>
                                                            <img src={Logo} className='w-16'/>
                                                        </div>

                                                        {/* Hamburger Toggle Button for Mobile */}
          <div className='max-sm:block hidden cursor-pointer '>
            <button onClick={toggleMenu} className='text-white text-lg pr-3 '>
              ☰
            </button>
          </div>


                                                        <div className={`${
                                                                isMenuOpen ? `max-sm:block  max-sm:w-2/3 z-20 bg-[#1a1919] border-[#535151] border-[1px] max-sm:h-[40%] rounded-xl p-4  fixed top-10 mr-4 right-0   transition-all duration-300   ` : 'max-sm:hidden flex  w-2/5  justify-center relative'
                                                                }   `}>
                                                            <div className='Header max-sm:hidden'>
                                                                <h1>
                                                                    Profile
                                                                </h1>
                                                            </div>

                                                            <div className=''>
                                                                <h1 className='absolute right-2 text-2xl mt-[-5px] max-sm:hidden '>
                                                                    ...
                                                                </h1>
                                                            </div>
                                                            <div className='hidden max-sm:block '>
                                                                   {    DataBase.map((val,idx)=>  <SideMenu pitems={val} key={idx} /> )}
                                                            </div>
                                                        </div>

                                                        <div >
                                                            
                                                        </div>
                                        </div>
                    </div>

                    {/* -----------------side-nav---------------------- */}

                    
                    
    </div>
  )
}


// function SideMenu({pitems}){
//     return(
//         <div className='w-full h-full text-white border-b-[1px]  '>
//             <div className='h-10 pl-4 p-1 mb-3 hover:bg-[rgba(0,0,0,.3)] hover:transition-all delay-100 hover:rounded-xl '> {pitems.Heading}</div>
            
//         </div>
//     )
// }