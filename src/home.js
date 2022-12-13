import React from 'react'
import Header from './Component/Header'
import contentImg from './Assets/join-the-community-illustration.svg'
import BannerContainer from './Component/BannerContainer'
import BottomBar from './Component/BottomBar'
import BuildBase from './Component/BuildBase'
import WhyUs from './Component/WhyUs'




export default function Home() {
  return (
    <>
      <Header />
      <div className='h-[65px] bg-white' />
      <div className='space-y-10 pb-10 mb-10 xl:mb-0 md:mb-0 mx-2'>
        <div id="header" className='flex items-center justify-center'>
          <img className='h-[435px] w-full object-contain' src="https://publistagram.com/wp-content/uploads/2020/07/real-mobile-2x-1400x770-1.png" alt="" />
        </div>
        <BannerContainer />
        <BuildBase />
        <WhyUs />
      </div>
      <BottomBar />
    </>
  )
}