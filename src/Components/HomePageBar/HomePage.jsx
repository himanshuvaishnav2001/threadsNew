import React from 'react'
import {ThreadsPost} from '../Profile/ThreadsPost'

import {UserData} from './HomeData'
import { PostMethod } from '../Profile/UserProfile'

export default function HomePage() {
  return (
    <div >
        <div className='text-white'>
        
                    <PostMethod />
              

        </div>

        <div className='text-white '>
        {
            UserData.map((val, idx)=>{
                return(
                    <ThreadsPost pitems={val} key={idx} />
                )
            })
        }

    </div>
    </div>
  )
}
