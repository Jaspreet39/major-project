import React from 'react'
import contentImg from '../Assets/join-the-community-illustration.svg'

function BannerContainer() {
    return (
        <div className='bg-gradient-to-r from-sky-200 to-sky-100 rounded-2xl'>
            <div className='max-w-[96%] xl:max-w-[80%] mx-auto flex items-center justify-between'>
                <h1 className='text-lg max-w-[50%] font-semibold md:text-3xl xl:text-4xl md:max-w-[30%] xl:max-w-[25%]'>The Best Products in Every Category</h1>
                <div className='h-[180px] w-[180px] md:h-[300px] md:w-[300px] xl:h-[400px] xl:w-[400px] overflow-hidden'>
                    <img src={contentImg} alt="" className='h-full w-full object-contain' />
                </div>
            </div>
        </div>
    )
}

export default BannerContainer