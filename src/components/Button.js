import React from 'react'

const Button = ({data}) => {
    
  return (
    <div>
        <button className=' px-5 py-2 m-2 bg-gray-200 rounded-lg '>{data}</button>
    </div>
  )
}

export default Button