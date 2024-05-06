import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({children,variant="primary",link}) => {

  

  return (
    <Link to={link}>
    <button className={` px-3 py-2 font-semibold text-xl rounded-lg ${variant === "primary"?'bg-[#F9F6EE] hover:bg-[#d1cfc7] text-[#1f306e]':"secondary"?'text-[#F9F6EE] bg-[#f5487f] hover:bg-[#c93c69]':''} hover:scale-95 duration-300 ease-in-out`}>{children}</button>
    </Link>
  )
}

export default Button