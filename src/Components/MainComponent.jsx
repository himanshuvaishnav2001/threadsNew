import React from 'react'
import MainNav from './MainNavBar/MainNav';
import {UserProfile} from './Profile/UserProfile';
import SideNav from './MainNavBar/SideNav';
import SearchBar from './SearchPage/SearchBar';
import HomePage from './HomePageBar/HomePage';
import RouterPage from './RouterPage';

function MainComponent() {
  return (
    <div className='h-screen'>


      <RouterPage />


        {/* <MainNav />
        <div className='flex h-full bg-black'> */}

        {/* <SideNav/> */}

        {/* <div className='w-full  flex justify-center  pt-5 overflow-y-scroll scrollbar-hide mt-12 ' >
                <div className='w-1/2 rounded-tr-2xl overflow-hidden rounded-tl-2xl  bg-[#181818] max-sm:w-full overflow-y-scroll '>
                <UserProfile />
                <SearchBar />
                </div>
                
        </div> */}

        {/* <SearchPagesComponent /> */}

        {/* <UserPagesComponent /> */}

        {/* <HomePagesComponent /> */}

        
       

        {/* </div> */}
        
        
    </div>
  )
}


// function SearchPagesComponent(){
//   return(
    
//         <div className='w-full  flex justify-center  pt-5 overflow-y-scroll scrollbar-hide mt-12 ' >
//                 <div className='w-1/2 rounded-tr-2xl overflow-hidden rounded-tl-2xl  bg-[#181818] max-sm:w-full overflow-y-scroll '>
//                 {/* <UserProfile /> */}
//                 <SearchBar />
//                 </div>
                
//         </div>
    
//   )
// }

// function UserPagesComponent(){
//   return(
    
//         <div className='w-full  flex justify-center  pt-5 overflow-y-scroll scrollbar-hide mt-12 ' >
//                 <div className='w-1/2 rounded-tr-2xl overflow-hidden rounded-tl-2xl  bg-[#181818] max-sm:w-full overflow-y-scroll '>
//                 <UserProfile />
                
//                 </div>
                
//         </div>
    
//   )
// }

// function HomePagesComponent(){
//   return(
    
//         <div className='w-full  flex justify-center  pt-5 overflow-y-scroll scrollbar-hide mt-12 ' >
//                 <div className='w-1/2 rounded-tr-2xl overflow-hidden rounded-tl-2xl  bg-[#181818] max-sm:w-full overflow-y-scroll '>
//                 <HomePage />
                
//                 </div>
                
//         </div>
    
//   )
// }

export default MainComponent;