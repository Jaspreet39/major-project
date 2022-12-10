import React, { useState } from 'react'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navi = useNavigate()

  const [email, setEmail] =useState()
  const [password, setPassword] = useState()

  const login1 = () => {
  auth.signInWithEmailAndPassword(email,password).then(()=> {
    navi("/")
  })}

  const onSubmit = (e) => {
    e.preventDefault()
  }

  

  return (
    <div className='center'>
      <h1>Login</h1>

      <form className='form-main' onSubmit={onSubmit}>
        <h4>Login here</h4>
        <div>
          <input type="email" onChange={(e) => setEmail(e.target.value)} className='form1' placeholder='Enter your email' name="email" value={email} />
        </div>
        <div>
          <input type="password" onChange={(e) => setPassword(e.target.value)} className='form1' placeholder='Enter your password' name="password" value={password} />
        </div>
        <div>
          <input type="button" className='bt' value="Login" onClick={login1} />
        </div>


      </form>

    </div>

)
}
