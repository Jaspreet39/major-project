import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Component/Header'
import BannerContainer from '../Component/BannerContainer'
import ButtonCOmponent from '../Component/ButtonCOmponent'
import { auth } from '../firebase'

export default function Login() {
  const navi = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login1 = () => {
    auth.signInWithEmailAndPassword(email, password).then((user) => {
      navi('/')
    })
  }


  return (
    <div >

      <Header />
      <div className='h-[65px] bg-white' />
      <BannerContainer />
      <div className='max-w-5xl mx-auto'>
        <h1>Login</h1>
        <div
          className="bg-gray-100 rounded-md space-y-12 px-4 pt-2 pb-4"
        >
          <h1 className="text-4xl font-semibold text-center">Login Here</h1>

          <div className='space-y-8'>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="border-none w-full p-1 text-3xl"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password]"
              placeholder="Password"
              className="border-none w-full p-1 text-3xl"
            />
          </div>

          <ButtonCOmponent text="Login" onClick={login1} />
        </div>
      </div>
    </div>

  )
}
