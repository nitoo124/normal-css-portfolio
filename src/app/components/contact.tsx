import React from 'react'
import Button from './button'

function Contact() {
  return (
   <main className='max-w-screen-md  mt-28 mx-auto p-6  bg-purple-700 text-white rounded-3xl '>
<h1 className='text-center text-3xl font-bold mt-5'>Contact me</h1>
   <form action="" className=' w- mx-auto p-8'>
    <div className=''>
        <label className='block mt-2 font-semibold text-sm' >Username: </label>
        <input className='shadow-3xl mt-1 p-2 w-[100%] rounded-lg bg-gray  ' type="text" placeholder='Enter your name' />
    </div>
    <div>
        <label className='block mt-2 font-semibold text-sm' >Email: </label>
        <input className='shadow-3xl mt-1 p-2 w-[100%] rounded-lg  ' type="email" placeholder='Enter your email' />
    </div>

    <div>
        <label className='block mt-2 font-semibold text-sm' >Message: </label>
        <textarea className='shadow-3xl mt-1 p-2 w-[100%] rounded-lg ' name="text" id="" placeholder='Enter your message'></textarea>
    </div>

    <div className='text-center mt-5'>
     <button type='submit' className=' bg-white px-4  py-2 rounded-lg text-purple-700 font-semibold hover:bg-purple-200'>submit</button> 
     </div>
    
    </form>
   </main>
  )
}

export default Contact