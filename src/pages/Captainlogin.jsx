import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Captainlogin = () => {
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [userData, setuserData] = useState({})
  
  
  
    const submitHandler = (e) =>{
      e.preventDefault()
      
      // Create the user data object
      const newUserData = {
        email: email,
        password: password
      }
      
      // Log the data directly (not from state)
      console.log("Captain Login Data:", newUserData);
      
      // Update state
      setuserData(newUserData);
      
      // Clear form
      setEmail('')
      setpassword('')
    }
  return (
    <div>
       <div className='p-7 flex flex-col h-screen justify-between'>
             <div>
              <img className='w-16 mb-10' src="src/assets/uberlogo.png" alt="" />
      
            <form onSubmit={(e) =>{
              submitHandler(e)
            }}>
              <h3 className='text-lg font-medium  mb-2'>What's your email ?</h3>
      
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
              value={password }
               onChange={(e) =>{
                setpassword(e.target.value)
               }}
             
               required 
               type="password" 
               placeholder='password' 
               />
              
              <button  
               type="submit"
               className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder: text-base'
              >Login</button>
            </form>
              <p className='text-center '> New here? <Link to ="/signup" className='text-blue-600'>Create new Account</Link></p>
             </div>
             <div>
              <Link
              to='/user-login'
               className='bg-[#10b461] flex items-center justify-center  text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder: text-base'
               >Sign in as User</Link>
             </div>
          </div>
    </div>
  )
}

export default Captainlogin
