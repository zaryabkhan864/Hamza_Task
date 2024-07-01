import React, { useEffect, useState } from 'react'
import 'aos/dist/aos.css';
import Aos from 'aos';
import Slider from "react-slick";


const ThreeCards = () => {
    useEffect(() => {
        Aos.init({ duration: 5000 });
    }, [])
    const [imageIndex, setImageIndex] = useState(0);
    const images = [
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },
        { "image": "assets/images/sm1.png", "value": "3.62 ETH" },


    ]
    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next " onClick={onClick}>
                <img src="assets/images/arrow.png" />
            </div>
        );
    };
    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 2,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />,
        prevArrow: false,
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
        <div id="three" className="container mb-5 ">
            {/* <div className="row d-flex justify-content-center ">
                <div className="col-4 ">
                    <img src="assets/images/blacktop.png" />
                </div>
            </div> */}
            {/* <div className="row ">
                <div className="col-12">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100" style={{borderRadius: '10'+"px"}}>
                                <div className='pt-4 ps-4'>
                                    <p className='three-card-top-heading'>Check out the hottest Sale offers</p>
                                </div>
                               
                                <div className="card-body">

                                    <Slider {...settings} >
                                        {images.map((img, idx) => (
                                            <div className={idx === imageIndex ? "slide activeSlide" : "slide"} >
                                                <div className='slick-className'>
                                                    <div className='mx-1'>
                                                        <div className='mb-3'>
                                                            <img src="assets/images/cardimage1.png" className='img-fluid' style={{ borderRadius: '20' + 'px' }} alt="" />
                                                        </div>
                                                        <div className='mb-2'>
                                                            <p className="card-text cards-heading">Faucibus habitasse at et platea massa mauris</p>
                                                        </div>
                                                        <div className='d-flex mb-2'>
                                                            <div>
                                                                <img src='assets/images/v.png' className='me-3' /><span>22:59</span>
                                                            </div>
                                                            <div className='ms-auto'>
                                                                <span>2.55 ETH</span>
                                                            </div>
                                                            <hr className='card-hr' />
                                                        </div>
                                                        <div className='d-flex'>
                                                            <div>
                                                                <span className='cards-last-line'>101 people are bidding</span>
                                                            </div>
                                                            <div className='ms-auto'>
                                                                <img src='assets/images/HeartIcon.png' className='' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        ))}
                                    </Slider>




                                </div>
                                <div className="p-3">
                                    <div className="d-grid gap-2">
                                    <button className="btn btn-primary-purple-outline" type="button">Show me more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
     
                        <div className="col">
                
                            <div className=" h-100 text-white darkbg" >
                                <div  data-aos="fade-down">
                                    <img src="assets/images/hand.png" className="card-img-top img-fluid position-relative" style={{ top: '-83' + 'px' }} alt="..." />
                                </div>
                                <div >
                                    <div className="footer ps-3 pe-5 mb-5">
                                        <p>Get started creating & selling your NFTs</p>
                                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                    <div className="px-3">
                                        <div className="d-grid gap-2">
                                            <button className="btn btn-primary-purple" type="button">Get Started</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 middle-card" style={{borderRadius: '10'+"px"}}>
                                <div className='pt-4 ps-4'>
                                    <p className='three-card-top-heading'>Top NFT at a lower price</p>
                                </div>

                         
                                <div className="card-body">
                                    <div style={{ maxWidth: '540' + 'px' }}>
                                        <div className="row g-0">
                                            <div className="col-md-4 pt-4 ps-4 ">
                                                <img src="assets/images/3r1.png" className="img-fluid" style={{borderRadius: '1.25'+"rem"}} alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <div>
                                                        <p style={{marginBottom: '0.25'+'rem'}}>Vulputate velit viverra volutpat volutpat tristique</p>
                                                    </div>



                                                    <div className='d-flex'>
                                                        <div>
                                                            <img src='assets/images/v.png' className='me-3' /><span>22:59</span>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <span>2.55 ETH</span>
                                                        </div>
                                                        <hr className='card-hr' />
                                                    </div>
                                                    <div className='d-flex'>
                                                        <div>
                                                            <span className='cards-last-line'>101 people are bidding</span>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <img src='assets/images/HeartIcon.png' className='' />
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ maxWidth: '540' + 'px' }}>
                                        <div className="row g-0">
                                            <div className="col-md-4 pt-4 ps-4 ">
                                                <img src="assets/images/3r1.png" className="img-fluid" style={{borderRadius: '1.25'+"rem"}} alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <div>
                                                        <p style={{marginBottom: '0.25'+'rem'}}>Vulputate velit viverra volutpat volutpat tristique</p>
                                                    </div>



                                                    <div className='d-flex'>
                                                        <div>
                                                            <img src='assets/images/v.png' className='me-3' /><span>22:59</span>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <span>2.55 ETH</span>
                                                        </div>
                                                        <hr className='card-hr' />
                                                    </div>
                                                    <div className='d-flex'>
                                                        <div>
                                                            <span className='cards-last-line'>101 people are bidding</span>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <img src='assets/images/HeartIcon.png' className='' />
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ maxWidth: '540' + 'px' }}>
                                        <div className="row g-0">
                                            <div className="col-md-4 pt-4 ps-4 ">
                                                <img src="assets/images/3r1.png" className="img-fluid" style={{borderRadius: '1.25'+"rem"}} alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <div>
                                                        <p style={{marginBottom: '0.25'+'rem'}}>Vulputate velit viverra volutpat volutpat tristique</p>
                                                    </div>



                                                    <div className='d-flex'>
                                                        <div>
                                                            <img src='assets/images/v.png' className='me-3' /><span>22:59</span>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <span>2.55 ETH</span>
                                                        </div>
                                                        <hr className='card-hr' />
                                                    </div>
                                                    <div className='d-flex'>
                                                        <div>
                                                            <span className='cards-last-line'>101 people are bidding</span>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <img src='assets/images/HeartIcon.png' className='' />
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ maxWidth: '540' + 'px' }}>
                                        <div className="row g-0">
                                            <div className="col-md-4 pt-4 ps-4 ">
                                                <img src="assets/images/3r1.png" className="img-fluid" style={{borderRadius: '1.25'+"rem"}} alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <div>
                                                        <p style={{marginBottom: '0.25'+'rem'}}>Vulputate velit viverra volutpat volutpat tristique</p>
                                                    </div>



                                                    <div className='d-flex'>
                                                        <div>
                                                            <img src='assets/images/v.png' className='me-3' /><span>22:59</span>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <span>2.55 ETH</span>
                                                        </div>
                                                        <hr className='card-hr' />
                                                    </div>
                                                    <div className='d-flex'>
                                                        <div>
                                                            <span className='cards-last-line'>101 people are bidding</span>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <img src='assets/images/HeartIcon.png' className='' />
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-primary-purple-outline" type="button">Show me more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="row ">
                <div className="col-12">
                    <div className="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
                        <div className="col-lg-4 col-md-7 col-sm-12 col-12">
                            <div className="card h-100" style={{ borderRadius: '10' + "px" }}>
                                <div className='pt-4 ps-4'>
                                    <p className='three-card-top-heading'>Check out the hottest Sale offers</p>
                                </div>
                                {/* <img src="..." className="card-img-top" alt="..." /> */}
                                <div className="card-body">

                                    <Slider {...settings} >
                                        {images.map((img, idx) => (
                                            <div className={idx === imageIndex ? "slide activeSlide" : "slide"} >
                                                <div className='slick-className'>
                                                    <div className='mx-1'>
                                                        <div className='mb-3'>
                                                            <img src="assets/images/cardimage1.png" className='img-fluid' style={{ borderRadius: '20' + 'px' }} alt="" />
                                                        </div>
                                                        <div className='mb-2'>
                                                            <p className="card-text cards-heading">Faucibus habitasse at et platea massa mauris</p>
                                                        </div>
                                                        <div className='d-flex mb-2'>
                                                            <div>
                                                                <img src='assets/images/v.png' className='me-3' /><span>22:59</span>
                                                            </div>
                                                            <div className='ms-auto'>
                                                                <span>2.55 ETH</span>
                                                            </div>
                                                            <hr className='card-hr' />
                                                        </div>
                                                        <div className='d-flex'>
                                                            <div>
                                                                <span className='cards-last-line'>101 people are bidding</span>
                                                            </div>
                                                            <div className='ms-auto'>
                                                                <img src='assets/images/HeartIcon.png' className='' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        ))}
                                    </Slider>




                                </div>
                                <div className="p-3">
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-primary-purple-outline" type="button">Show me more</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-7 col-sm-12 col-12 my-lg-0 my-0 my-sm-5 my-5">
                            <div className="row d-flex justify-content-center ">
                                <div className="col-12 ">
                                    <img src="assets/images/blacktop.png" />
                                </div>
                            </div>

                            <div className=" h-100 text-white darkbg" >
                                <div data-aos="fade-down">
                                    <img src="assets/images/hand.png" className="card-img-top img-fluid position-relative" style={{ top: '-83' + 'px' }} alt="..." />
                                </div>
                                <div >
                                    <div className="footer ps-3 pe-5 mb-5">
                                        <p>Get started creating & selling your NFTs</p>
                                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                    <div className="px-3">
                                        <div className="d-grid gap-2">
                                            <button className="btn btn-primary-purple" type="button">Get Started</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-7 col-sm-12 col-12">
                            <div className="card h-100 middle-card" style={{ borderRadius: '10' + "px" }}>
                                <div className='pt-4 ps-4'>
                                    <p className='three-card-top-heading'>Top NFT at a lower price</p>
                                </div>

                                {/* <img src="..." className="card-img-top" alt="..." /> */}
                                <div className="card-body">
                                    <div style={{ maxWidth: '540' + 'px' }}>
                                        <div className="row g-0">
                                            <div className="col-md-4 pt-4 ps-4 ">
                                                <img src="assets/images/3r1.png" className="img-fluid" style={{ borderRadius: '1.25' + "rem" }} alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <div>
                                                        <p style={{ marginBottom: '0.25' + 'rem' }}>Vulputate velit viverra volutpat volutpat tristique</p>
                                                    </div>



                                                    <div className='d-flex'>
                                                        <div>
                                                            <img src='assets/images/v.png' className='me-3' /><span>22:59</span>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <span>2.55 ETH</span>
                                                        </div>
                                                        <hr className='card-hr' />
                                                    </div>
                                                    <div className='d-flex'>
                                                        <div>
                                                            <span className='cards-last-line'>101 people are bidding</span>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <img src='assets/images/HeartIcon.png' className='' />
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ maxWidth: '540' + 'px' }}>
                                        <div className="row g-0">
                                            <div className="col-md-4 pt-4 ps-4 ">
                                                <img src="assets/images/3r1.png" className="img-fluid" style={{ borderRadius: '1.25' + "rem" }} alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <div>
                                                        <p style={{ marginBottom: '0.25' + 'rem' }}>Vulputate velit viverra volutpat volutpat tristique</p>
                                                    </div>



                                                    <div className='d-flex'>
                                                        <div>
                                                            <img src='assets/images/v.png' className='me-3' /><span>22:59</span>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <span>2.55 ETH</span>
                                                        </div>
                                                        <hr className='card-hr' />
                                                    </div>
                                                    <div className='d-flex'>
                                                        <div>
                                                            <span className='cards-last-line'>101 people are bidding</span>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <img src='assets/images/HeartIcon.png' className='' />
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ maxWidth: '540' + 'px' }}>
                                        <div className="row g-0">
                                            <div className="col-md-4 pt-4 ps-4 ">
                                                <img src="assets/images/3r1.png" className="img-fluid" style={{ borderRadius: '1.25' + "rem" }} alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <div>
                                                        <p style={{ marginBottom: '0.25' + 'rem' }}>Vulputate velit viverra volutpat volutpat tristique</p>
                                                    </div>



                                                    <div className='d-flex'>
                                                        <div>
                                                            <img src='assets/images/v.png' className='me-3' /><span>22:59</span>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <span>2.55 ETH</span>
                                                        </div>
                                                        <hr className='card-hr' />
                                                    </div>
                                                    <div className='d-flex'>
                                                        <div>
                                                            <span className='cards-last-line'>101 people are bidding</span>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <img src='assets/images/HeartIcon.png' className='' />
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ maxWidth: '540' + 'px' }}>
                                        <div className="row g-0">
                                            <div className="col-md-4 pt-4 ps-4 ">
                                                <img src="assets/images/3r1.png" className="img-fluid" style={{ borderRadius: '1.25' + "rem" }} alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <div>
                                                        <p style={{ marginBottom: '0.25' + 'rem' }}>Vulputate velit viverra volutpat volutpat tristique</p>
                                                    </div>



                                                    <div className='d-flex'>
                                                        <div>
                                                            <img src='assets/images/v.png' className='me-3' /><span>22:59</span>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <span>2.55 ETH</span>
                                                        </div>
                                                        <hr className='card-hr' />
                                                    </div>
                                                    <div className='d-flex'>
                                                        <div>
                                                            <span className='cards-last-line'>101 people are bidding</span>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <img src='assets/images/HeartIcon.png' className='' />
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-primary-purple-outline" type="button">Show me more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ThreeCards