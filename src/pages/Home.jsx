import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
       <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1677042927963-64bb36f06348?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHViZXIlMjB0cmFmZmljJTIwaW1hZ2VzJTIwZ29vZHxlbnwwfHwwfHx8MA%3D%3D)]     h-screen pt-8  flex justify-between flex-col w-full'>
       <img className='w-16 ml-8' src="src/assets/uberlogo.png" alt="" />
        <div className='bg-white pb-7 py-4 px-4'>
          <h2 className='text-[30px] font-semibold'>Get Started  with Uber</h2>
          <Link to = "/login"  className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
       </div>
    </div>
  </div>
  )
}

export default Home
