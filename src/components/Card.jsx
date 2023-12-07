import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";

const Card = () => {
  return (
    <div className='relative w-60 h-72 bg-zinc-900/90 rounded-[50px] text-white p-5 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, at.</p>
        <div className='footer absolute bottom-0 bg-sky-200 w-full h-20 left-0'>Footer</div>
    </div>
  )
}

export default Card