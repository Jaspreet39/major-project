import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'

export default function Register() {
  const navi = useNavigate()

  const [email, setEmail] = useState()
  const [password, setPassword] =useState()

  const signup =() => {
  auth.createUserWithEmailAndPassword(email,password).then(() => {
    navi("/")
  })}


  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='center'>
      <h1>Register</h1>

      <form className='form-main' onSubmit={onSubmit}>
        <h4>Create an account</h4>
        <div>
          <input type="text" className='form1' placeholder='Enter your name' name="name" />
        </div>
        <div>
          <input type="email" onChange={(e) => setEmail(e.target.value) } className='form1' placeholder='Enter your email' name="email" value={email} />
        </div>
        <div>
          <input type="password" onChange={(e) => setPassword(e.target.value)} className='form1' placeholder='Enter your password' name="password" value={password} />
        </div>
        <div>
          <input type="button" className='bt' onClick={signup} value="Register" />
        </div>


      </form>

    </div>
  )
}