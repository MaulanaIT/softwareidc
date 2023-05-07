import React from 'react'

const Video = () => {
  return (
    <div className=' max-[600px]:hidden'>
         <video className='absolute' autoPlay loop style={{ width: '100vw', height: 'auto' }}>
        <source src="/man.mp4" />
      </video>

    </div>
  )
}

export default Video