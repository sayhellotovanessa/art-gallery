import React from 'react'
import flickity from 'flickity'

function Gallery() {
    const array = ["https://cdn.pixabay.com/photo/2020/07/09/09/05/cat-5386372_960_720.jpg", "https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg", "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg"];
    const images = array.map(image => { 
           return <div class="gallery-cell">
           <img src={image} class="img-responsive" /></div>
    });


    return (
    <div class="gallery js-flickity" data-flickity='{ "cellAlign": "right", "contain": true }'>
     { images }
    </div>

    )
}

export default Gallery
