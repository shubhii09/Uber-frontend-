import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import uberLogo from '../assets/uberlogo.png'

const CaptainSignup = () => {

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
    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')

  }



  return (
  <div>
       <div className='py-5 px-5 flex flex-col h-screen justify-between'>
             <div>
              <img className='w-16 mb-10' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="Uber Logo" />
      
            <form onSubmit={(e) =>{
              submitHandler(e)
            }}>
 
              <h3 className='text-lg font-medium w-full mb-2'>What's our Captain's name</h3>
              <div className='flex gap-4 mb-7'>
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
 
              <h3 className='text-lg font-medium  mb-2'>What's our Captain's email?</h3>
      
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
              <p className='text-center '> Already have a account? <Link to ="/captain-login" className='text-blue-600'>Login here</Link></p>
             </div>
             <div>
            <p  className='text-[10px]  leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy </span> and  <span className='underline'>Terms of Service apply.</span></p>
             </div>
          </div>    
       
     </div>
  )
}

export default CaptainSignup
