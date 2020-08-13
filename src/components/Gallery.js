import React from 'react'
import flickity from 'flickity'

function Gallery() {
    const array = ["https://source.unsplash.com/780x500/?monet", "https://source.unsplash.com/780x500/?nasa", "https://source.unsplash.com/780x500/?magritte", "https://source.unsplash.com/780x500/?louvre", "https://source.unsplash.com/780x500/?streetart", "https://source.unsplash.com/780x500/?grafitti"];
    const images = array.map(image => { 
           return <div class="gallery-cell">
           <img  data-flickity-lazyload={image} class="img-responsive" /></div>
    });


    return (
    <div class="gallery js-flickity" data-flickity='{"lazyLoad": "true", "cellAlign": "right", "contain": true }'>
     { images }
    </div>

    )
}

export default Gallery
