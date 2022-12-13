import React from 'react'

function BottomBar() {
    return (
        <div className='fixed w-full bottom-0 z-30 xl:hidden md:hidden  bg-white'>
            <div className='w-full flex items-center justify-around shadow-lg'>
                <h1 className='text-3xl'>Home</h1>
                <h1 className='text-3xl'>Buy/Sell</h1>
                <h1 className='text-3xl'>About-us</h1>
                <h1 className='text-3xl'>Branches</h1>
            </div>
        </div>
    )
}

export default BottomBar