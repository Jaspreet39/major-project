import React from 'react'
import BannerContainer from './Component/BannerContainer'
import BottomBar from './Component/BottomBar'
import Header from './Component/Header'
// import Home from './home'

export default function Page() {
  return (
    <>

      <Header />
      <div className='h-[65px] bg-white' />
      <BannerContainer />
      <div class="container">
        <h2>Specifications:</h2>
        <p>We Provide Best Price in Just Few Minutes</p>
        <br></br>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Brand Name</th>
              <th>Mobile Name</th>
              <th>Phone Condition</th>
              <th>Warranty</th>
              <th>Details </th>
              <th></th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
      <BottomBar />
    </>

  )
} 