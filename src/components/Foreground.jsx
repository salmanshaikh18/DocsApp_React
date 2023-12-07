import { useRef } from 'react'
import Card from './Card'
import { motion } from "framer-motion"

const Foreground = () => {

    const ref = useRef(null)

    const data = [
        {
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, at.",
            filesize: "0.9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
        },
        {
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, at.",
            filesize: "0.9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" }
        },
        {
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, at.",
            filesize: "0.9mb",
            close: true,
            tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" }
        }
    ]

    return (
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
            {data.map((item, index) => (
                <Card key={Date.now()} data={item} reference={ref} />
            ))}
        </div>
    )
}

export default Foreground