import React from 'react'
import { LazyLoadImage, trackWindowScroll }
    from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function ImageItem({ image}) {
    return (
        <div className='h-64 w-96 '>
            <LazyLoadImage
                className='w-full h-full max-w-full max-h-full rounded-2xl'
                src={image.links.download} // use normal <img> attributes as props
                effect="blur" 
            />
        </div>
    )
}

export default trackWindowScroll(ImageItem)