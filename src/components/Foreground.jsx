import React, { useState } from 'react'
import Card from './Card'

const Foreground = () => {

    // const data = [
    //     description, filesize, closeOrDownload, tagdetails
    // ]

    const data = [
        {
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, at.",
            filesize: "0.9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
        }
    ]

    return (
        <div className='fixed top-0 left-0 z-[3] w-full h-full'>
            {/* <Card /> */}
            {data.map((item, index) => (
                <Card key={Date.now()} data={item} />
            ))}
        </div>
    )
}

export default Foreground