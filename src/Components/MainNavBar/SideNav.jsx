import React, { useState } from 'react'
import home from './../Photos/Logo/Home1.png'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faBeer, faHeart, faHome, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import SideMenu from './SideMenu';


export default function SideNav() {
        const navigate = useNavigate();
        const SearchHandler = () =>{
                return(
                        navigate("/search")
                )
        }

        const profileHandler = () =>{
                return(
                        navigate("/profile")
                )
        }

        const HomeHandler  = () =>{
                return(
                        navigate("/")
                )
        }

        const PostHandler  = () =>{
                return(
                        navigate("/addPost")
                )
        }


        // toglle Menu >>>>>>>>>>

        const [isMenuOpen, SetIsMenuOpen] = useState(false);


        const toggleMenu = () => SetIsMenuOpen(!isMenuOpen);

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
        
  return (
    <div className='flex bg-black max-sm:z-10 fixed '>
        
        <div className='w-16 h-screen bg-[rgba(0,0,0,1)] max-sm:w-full max-sm:fixed max-sm:bottom-0 max-sm:h-14 '>

    <div className='h-screen max-sm:h-20 '>
        <div className='h-3/4 max-sm:w-full  flex flex-wrap content-center justify-center place-items-center text-center text-white max-sm:flex max-sm:place-content-around max-sm:gap-1 '>

            <div className='h-14 w-16 max-sm:w-[10%]  max-sm:text-sm  content-center rounded-xl hover:bg-[rgba(214,207,207,0.1)] '>
                    <button onClick={HomeHandler} className='text-center'>
                        <h1 className=''>
                                <FontAwesomeIcon  icon={faHome} />
                        </h1>
                    </button>
            </div>

            <div className='h-14 w-16 max-sm:w-[10%]  max-sm:text-sm content-center rounded-xl hover:bg-[rgba(214,207,207,0.1)] '>
                    <button onClick={SearchHandler} >
                    <FontAwesomeIcon  icon={faSearch} />
                    </button>
            </div>

            <div className='h-14 w-16 max-sm:w-[10%]  max-sm:text-sm content-center rounded-xl bg-[rgba(214,207,207,0.1)] hover:bg-[rgba(214,207,207,0.2)] '>
                    <button onClick={PostHandler}> 
                    <FontAwesomeIcon  icon={faAdd} />
                    </button>
            </div>

            <div className='h-14 w-16 max-sm:w-[10%]  max-sm:text-sm content-center rounded-xl hover:bg-[rgba(214,207,207,0.1)] '>
            <FontAwesomeIcon  icon={faHeart} />
            </div>

            <div className='h-14 w-16 max-sm:w-[10%]  max-sm:text-sm content-center rounded-xl hover:bg-[rgba(214,207,207,0.1)] '>
                    <button onClick={profileHandler}> 
                    <FontAwesomeIcon  icon={faUser} />
                    </button>
            </div>

        </div>


        
            <div className='flex flex-wrap content-center justify-center place-items-center text-center text-white  '>
                
                <div className='h-14 w-12 content-center rounded-xl hover:bg-[rgba(214,207,207,0.1)] cursor-pointer ' onClick={toggleMenu} >
                                <button >
                                                ☰
                                </button>
                                
                 

                <div className={`${
                                                                isMenuOpen ? `max-sm:block w-48  max-sm:w-1/2 z-10 bg-[#1a1919] border-[#535151] border-[1px] h-72 rounded-xl p-4  fixed bottom-32 mr-4 left-14    transition-all duration-300   ` : 'max-sm:hidden hidden'
                                                                }   `}>

                                                                <div className='z-20'>
                                                                   {    DataBase.map((val,idx)=>  <SideMenu pitems={val} key={idx} /> )}
                                                                </div>
                        
                </div>
                </div>
                
            </div>
            
        
    </div>
        
</div>
        {/* <div className='w-full h-screen flex justify-center  pt-5 overflow-y-scroll mt-20 ' >
                <div className='w-1/2 rounded-tr-2xl overflow-hidden rounded-tl-2xl  bg-[#181818] max-sm:w-full overflow-y-scroll '>
                <UserProfile />
                </div>
                
        </div> */}

</div>
  )
}
