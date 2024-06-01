import React from 'react'
import './ImageSlider.css'
import { Carousel } from 'react-bootstrap'

function ImageSlider() {
    return (
        <div className='slider'>
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://wallpapers.com/images/hd/ultra-wide-4k-hills-m7ask44ioicio7wd.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1><b>“Education is the passport to the future, for tomorrow belongs to those who prepare for it today.”</b></h1>
                        <h3><b>~Malcolm X</b></h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://images.wallpaperscraft.com/image/single/field_sky_grass_122855_2560x1080.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h1><b>"Life is like riding a bicycle. To keep your balance, you must keep moving"</b></h1>
                        <h3><b>~Albert Einstein</b></h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://thumbnails.production.thenounproject.com/tweaZS7b41EiZfSEkaEGIuhWF7A=/fit-in/1000x1000/photos.production.thenounproject.com/photos/D59FC2DB-04BE-4CF2-896A-9F39A3F3C00E.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1><b>"That’s one small step for a man, a giant leap for mankind."</b></h1>
                        <h3><b>~Neil Armstrong</b></h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageSlider
