import React, { useState } from 'react'
import Slider from "react-slick";

const SmallSlider = () => {
    const images = [
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },

    ]
    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next " onClick={onClick}>
                <img src="assets/images/right.png" />
            </div>
        );
    };
    const [imageIndex, setImageIndex] = useState(0);
    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <img src="assets/images/left.png" />
            </div>
        );
    };
    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 15,
        centerMode: true,
        centerPadding: 0,
        nextArrow: false,
        prevArrow: false,
        beforeChange: (current, next) => setImageIndex(next),
        responsive: [
            {
                breakpoint: 320,
                settings: { slidesToShow: 2, slidesToScroll: 1, infinite: false }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2, slidesToScroll: 2, infinite: false }
            },
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3, slidesToScroll: 3, infinite: false }
            }
        ]

    };
    return (
        <div id="small-carsole" className="container">
            <div className="row ">
                <div className="col-lg-12 col-md-12 col-sm-10 col-10 py-2">
                    <Slider {...settings} >
                        {images.map((img, idx) => (
                            <div className={idx === imageIndex ? "slide activeSlide" : "slide"} >
                                <div className='slick-className'>
                                    <img className='img-fluid' src={img.image} alt={img} width="100" height="100" />
                                    <p>{img.value}</p>
                                </div>

                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default SmallSlider