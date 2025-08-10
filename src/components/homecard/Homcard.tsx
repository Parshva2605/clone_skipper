import React from 'react'
import { CardCarousel } from '../ui/card-carousel'

const Homcard = () => {
    const images = [
    { src: "/img/card1.webp", alt: "Image 1" },
    { src: "/img/card2.webp", alt: "Image 2" },
    { src: "/img/card3.webp", alt: "Image 3" },
  ]
  return (
    <div className='mt-10'>
        <CardCarousel images={images}
        
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}  />
    </div>
  )
}

export default Homcard