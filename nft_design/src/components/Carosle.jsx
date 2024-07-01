import React, { useState } from 'react'
import Slider from "react-slick";
const Carosle = () => {
    const images = [
        { "image": "assets/images/7.png" },
        { "image": "assets/images/7.png" },
        { "image": "assets/images/7.png" },
        { "image": "assets/images/7.png" },
        { "image": "assets/images/7.png" },
        { "image": "assets/images/7.png" },
        { "image": "assets/images/7.png" },
        { "image": "assets/images/7.png" },
        { "image": "assets/images/7.png" },
    ]
    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next " onClick={onClick}>
                <img src="assets/images/arrow.png" />
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
        slidesToShow: 5,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />,
        prevArrow:false,
        beforeChange: (current, next) => setImageIndex(next),
        responsive: [
            {
              breakpoint: 320,
              settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
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
        <div id="carosle" className="container-fluid my-5">
            <div className="row d-flex justify-content-center">
                <div className="col-12 text-center my-5">
                    <h1>Latest live auctions</h1>
                </div>
                <div className="col-12">
                <Slider {...settings} className="px-5">
                            {images.map((img, idx) => (
                                <div className={idx === imageIndex ? "slide activeSlide" : "slide"} >
                                    <div className='slick-className'>
                                        <img className='img-fluid' src={img.image} alt={img} width="100" height="100" />
                                    </div>

                                </div>
                            ))}
                        </Slider>
                </div>
            </div>
        </div>
    )
}

export default Carosle