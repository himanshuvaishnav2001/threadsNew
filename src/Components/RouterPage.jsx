import React from 'react'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import MainNav from './MainNavBar/MainNav'
import SideNav from './MainNavBar/SideNav'
import SearchBar from './SearchPage/SearchBar'
import { UserProfile } from './Profile/UserProfile'
import HomePage from './HomePageBar/HomePage'
import AddPost from './AddPostBar/AddPost'

export default function RouterPage() {
  return (
    <div className='h-screen'>
        <Router>
        <MainNav />
        <div className='flex h-full bg-black'>

        <SideNav/>
                    <Routes>
                        <Route path='/' element={<HomePagesComponent />} />
                    </Routes>

                    <Routes>
                        <Route path='/search' element={<SearchPagesComponent />} />
                    </Routes>

                    <Routes>
                        <Route path='/profile' element={<UserPagesComponent />} />
                    </Routes>

                    <Routes>
                        <Route path='/AddPost' element={<AddPostPagesComponent />} />
                    </Routes>

        </div>
        </Router>
    </div>
  )
}

function SearchPagesComponent(){
    return(
      
          <div className='w-full   flex justify-center  pt-5 overflow-y-scroll scrollbar-hide mt-12 max-sm:mt-2  ' >
                  <div className='xl:w-1/2 lg:w-3/4 max-lg:w-3/4  max-md:w-3/4  rounded-tr-2xl overflow-hidden rounded-tl-2xl  bg-[#181818] max-sm:w-full overflow-y-scroll '>
                  {/* <UserProfile /> */}
                  <SearchBar />
                  </div>
                  
          </div>
      
    )
  }
  
  function UserPagesComponent(){
    return(
      
          <div className='w-full  flex justify-center  pt-5 overflow-y-scroll scrollbar-hide mt-12 max-sm:mt-2  ' >
                  <div className='xl:w-1/2 lg:w-3/4 max-lg:w-3/4  max-md:w-3/4 rounded-tr-2xl overflow-hidden rounded-tl-2xl  bg-[#181818] max-sm:w-full overflow-y-scroll '>
                  <UserProfile />
                  
                  </div>
                  
          </div>
      
    )
  }
  
  function HomePagesComponent(){
    return(
      
          <div className='w-full  flex justify-center  pt-5 overflow-y-scroll scrollbar-hide mt-12 max-sm:mt-2 ' >
                  <div className='xl:w-1/2 lg:w-3/4 max-lg:w-3/4  max-md:w-3/4 rounded-tr-2xl overflow-hidden rounded-tl-2xl  bg-[#181818] max-sm:w-full overflow-y-scroll '>
                  <HomePage />
                  
                  </div>
                  
          </div>
      
    )
  }

  function AddPostPagesComponent(){
    return(
      
          <div className='w-full  flex justify-center  pt-5 overflow-y-scroll scrollbar-hide mt-12 max-sm:mt-2 ' >
                  <div className='xl:w-1/2 lg:w-3/4 max-lg:w-3/4  max-md:w-3/4  rounded-tr-2xl overflow-hidden rounded-tl-2xl  bg-[#181818] max-sm:w-full overflow-y-scroll '>
                  <AddPost />
                  
                  </div>
                  
          </div>
      
    )
  }
