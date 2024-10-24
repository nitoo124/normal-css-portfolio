import React from 'react'

function Button(props:{text:string}) {
  return (
   <button className='font-semibold px-3 p-2 rounded-xl bg-purple-700 text-white hover:bg-purple-200 hover:text-purple-700 hover:border-2'>{props.text}</button>


  )
}

export default Button