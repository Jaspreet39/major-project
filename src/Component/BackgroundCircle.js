import React from 'react'

function BackgroundCircle() {
    return (
        <div className=' absolute top-1/2 left-1/2 flex justify-center items-center'>
            <div className='absolute md:hidden border border-white rounded-full h-[70px] w-[70px]  animate-ping ' />
            <div className='absolute border border-white rounded-full h-[120px] w-[120px]  animate-ping ' />
            <div className='absolute border border-white rounded-full h-[200px] w-[200px] animate-ping' />
            <div className='hidden md:inline absolute border border-white rounded-full h-[300px] w-[300px] animate-ping' />
            {/* <div className='absolute border border-[#333333] rounded-full h-[400px] w-[400px] animate-ping' /> */}
        </div>
    )
}

export default BackgroundCircle