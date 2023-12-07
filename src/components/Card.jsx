import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"

const Card = ({data, reference}) => {
    return (
        <motion.div drag dragConstraints={reference} className='relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white px-5 py-10 overflow-hidden'>
            <FaRegFileAlt />
            <p className='text-sm leading-tight mt-5 font-semibold'>{data.description}</p>
            <div className='footer absolute bottom-0 w-full left-0'>
                <div className='flex items-center justify-between py-3 px-8 mb-3'>
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                        {data.close ? <IoIosClose /> : <MdOutlineFileDownload size=".9em" color="#fff" />}                       
                    </span>
                </div>
                {data.tag.isOpen && <div className={`w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                    <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                </div>}             
            </div>
        </motion.div>
    )
}

export default Card