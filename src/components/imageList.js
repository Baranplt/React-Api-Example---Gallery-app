import React from 'react'
import ImageItem from './ImageItem'

function imageList({ imagesPlaceholder }) {
    const data = imagesPlaceholder;
    return (

        <div className={`w-full h-full bg-slate-400 grid-cols-3 gap-2 p-5 ${data.length > 0 ? 'grid' : 'hidden'}`}>
            {
                data.map((item, index) => {
                    return <ImageItem key={index} image={item} />
                })
            }
        </div>
    )
}

export default imageList