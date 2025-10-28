import React from 'react'

const Button = (props) => {
  return (
    <div>
          <button className={`text-amber-300 bg-amber-800 border-double rounded-lg px-2.5 ${props.className}`} >
         {props.title} </button>
    </div>
  )
}

export default Button
