import React from 'react'

const Header = () => {
    return (
        // <div className=" ">
            <div className="row position-relative header-bg ">
                <div className="col-12 text-center mt-5">
                    <span className='header-top-heading'>Non Fungible Tokens</span>
                </div>
                {/* <div className="col-12 my-5">
                    <div className='header-square my-5'>
                        <div className='my-5'>
                        <div className='d-flex justify-content-center'>
                        <span className='header-heading'>A new NFT<img className='img-fluid' src='assets/images/hr.png' /></span>
                        </div>
                        <div className='d-flex justify-content-center'>
                        <span className='header-heading'><img className='img-fluid' src='assets/images/hl.png' />Experience</span>
                        </div>
                        </div>
                     
                  
                  
                    </div>
                </div> */}
                <div className="col-12 g-0">
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="assets/images/Squares.png" className="d-block w-100" alt="..." />
                                <div className="carousel-caption  text-dark header-padding" >
                                    <div className="">
                                        <span className='header-heading'>A new NFT<img className='img-fluid' src='assets/images/hr.png' /></span>
                                    </div>
                                    <div className=''>
                                        <span className='header-heading'><img className='img-fluid' src='assets/images/hl.png' />Experience</span>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>


        // </div>
    )
}

export default Header