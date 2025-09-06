import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import uberLogo from '../assets/uberlogo.png'

const UserSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState({})


  const submitHandler = (e) =>{
    e.preventDefault()
    const newUserData = {
      fullName: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    }
    setUserData(newUserData)
    console.log(newUserData);
    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')

  }


  return (
    <div>
      <div className='p-7 flex flex-col h-screen justify-between'>
            <div>
             <img className='w-16 mb-10' src={uberLogo} alt="Uber Logo" />
     
           <form onSubmit={(e) =>{
             submitHandler(e)
           }}>

             <h3 className='text-lg font-medium  mb-2'>What's your name</h3>
             <div className='flex gap-2 mb-6'>
                 <input
              required 
              
              className='bg-[#eeee] rounded px-4 py-2  w-1/2 border text-lg placeholder: text-base'
              type="text" 
              placeholder='First name' 
              value={firstName}
              onChange={(e) =>{
                setFirstName(e.target.value)
              }}
              />
                 <input
              required 
              
              className='bg-[#eeee] w-1/2 rounded px-4 py-2  border  text-lg placeholder: text-base'
              type="text" 
              placeholder='Last name'
                value={lastName}
              onChange={(e) =>{
                setLastName(e.target.value)
              }} 
              />
             </div>

             <h3 className='text-lg font-medium  mb-2'>What's your email?</h3>
     
             <input
              required 
                value={email}
              onChange={(e) =>{
                setEmail(e.target.value)
              }}
              
              className='bg-[#eeee] mb-7 rounded px-4 py-2  border w-full text-lg placeholder: text-base'
              type="email" 
              placeholder='email@example.com' 
              />
             
             <h3  className='text-lg font-medium  mb-2'>Enter Password</h3>
             <input
              className='bg-[#eeee] mb-7 rounded px-4 py-2  border w-full text-lg placeholder: text-base'
           
              value={password}
              onChange={(e) =>{
                setPassword(e.target.value)
              }}
              required 
              type="password" 
              placeholder='password' 
              />
             
             <button  
              type="submit"
              className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder: text-lg'
             >Sign Up</button>
           </form>
             <p className='text-center '> Already have a account? <Link to ="/login" className='text-blue-600'>Login here</Link></p>
            </div>
            <div>
           <p  className='text-[10px]  leading-tight'>By proceeding, you Consent to get Calls,  WhatsApp or SMS message, including by automated means, from Uber and its affiliates to the number provided </p>
            </div>
         </div>    
      
    </div>
  )
}

export default UserSignup