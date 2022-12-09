import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

const mockData = [
    {
        path: "	https://ultra.md/storage/banners/G49k3UwfquLWJwNYCD2eOFJkWtiMJWf8f67qr3cl.webp",
    },
    {
        path: "	https://ultra.md/storage/banners/DX8WIMF2jyiPU7oVVHLchl5MkIM5O42FAhaOLJOc.webp",
    },
    {
        path: "https://ultra.md/storage/banners/WOv7a7Sm7wSoASsRFaCCCFW7EN7CASYZm4KAfFAw.webp",
    }
];

export default function SlickSlider () {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true
    };
    return (
        <div className='slider-container'>
            <Slider {...settings}>
                {mockData.map(({path}) =>
                <img src={path}/>)}
            </Slider>
        </div>
    )
}




