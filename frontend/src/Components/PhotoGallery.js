import React from 'react'
import './PhotoGallery.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function PhotoGallery() {
    return (
        <div className='photogallery-container'>
            <h1 className='photogallery-title'><b><i>Photo Gallery</i></b></h1>
            <div className="photogallery-images">
                <img src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg" alt='' />
                <img src="https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=" alt='' />
                <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70" alt='' />
                <img src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg" alt='' />
                <img src="https://wallpapers.com/images/hd/beautiful-nature-pictures-koo6sqtrjq723wst.jpg" alt='' />
                <img src="https://img.freepik.com/free-photo/beautiful-natural-view-landscape_23-2150787996.jpg" alt='' />
                <img src="https://e0.pxfuel.com/wallpapers/692/714/desktop-wallpaper-beautiful-nature-latest-beauty-nature.jpg" alt='' />
                <img src="https://media.istockphoto.com/id/1460853386/photo/daisy-meadow-with-butterflies.webp?b=1&s=170667a&w=0&k=20&c=aIJ542xKRdsNFwredBNuMWIEhDfAzyUUU7mjDdELfcI=" alt='' />
                <img src="https://img.freepik.com/premium-photo/summervaporwave_849761-15762.jpg" alt='' />
                <img src="https://img.pikbest.com/origin/08/99/61/20mpIkbEsTV9C.jpg!w700wp" alt='' />
            </div>
            <button>VIEW MORE<ArrowForwardIosIcon style={{ fontSize: 20 }} /></button>
        </div>
    )
}

export default PhotoGallery