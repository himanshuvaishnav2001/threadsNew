import React from 'react'
import Suggestion from './Suggestion'   
import {SuggestionData} from './SuggestionData.jsx'

export default function SearchBar() {
   const suggest = SuggestionData;
  return (
    <div>
        
        <div className='p-10 pb-0 w-full max-sm:p-2 max-sm:pt-10'>
            <input type='text'  className='w-full h-10 bg-transparent border-[1px] rounded-2xl  pl-10 text-lg font-light ' placeholder='search'  />

            <div className='mt-5 relative    ' >

              <h1 className='text-zinc-400 font-medium  text-base pb-5 pl-2 '>
                Follow Suggestions
              </h1>
              
              {
                      suggest.map((val,idx)=>{

              
           return    (<Suggestion pitem={val} key={idx} />)

          })}

{
                      suggest.map((val,idx)=>{

              
           return    (<Suggestion pitem={val} key={idx} />)

          })}
            </div>
        </div> 

    </div>
  )
}
