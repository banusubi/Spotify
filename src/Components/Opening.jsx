import React from 'react'
import { assets } from '../assets/assets/assets'
import background from '../assets/assets/background-intro.mp4'

const Opening = () => {
  return (
    <div className='h-screen bg-[#121212] flex item-center justify-center'>
        <video className='w-[75%] object-cover mix-blend-screen' src={background} preload='auto' autoPlay loop muted></video>

    </div>
  )
}

export default Opening