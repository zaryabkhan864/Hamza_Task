import React from 'react'

const Footer = () => {
    return (
        <div className="container mb-5 ">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-4 col-md-10 col-sm-10 col-10 border p-lg-5 p-md-3 p-sm-2 p-1  position-relative footer-border-left">
                    <div className="row d-flex justify-content-center ">
                        <div className="col-12 mb-sm-5 my-4">
                        <img src="/assets/images/logo.png" className='img-fluid ms-lg-0 ms-md-0 ms-sm-3 ms-3' />
                        </div>
                        <div className="row mb-lg-0 mb-md-0 mb-sm-3 mb-4 text-center">
                            <div className="col-3">
                                <span>Support</span>
                            </div>
                            <div className="col-5">
                                <span>Team of service</span>
                            </div>
                            <div className="col-4">
                                <span>License</span>
                            </div>
                        </div>
                    </div>
               
                </div>
                <div className="col-lg-4 col-md-10 col-sm-10 col-10 border  p-lg-5 p-md-3 p-sm-2 p-3  position-relative">
                    <div className="row">
                        <div className="col-12">
                        <ul className='footer-medium-text p-0' style={{ listStyle: 'none' }}>
                            <li className='mb-1'>Auctions</li>
                            <li className='mb-1'>Roadmap</li>
                            <li className='mb-1'>Discover</li>
                            <li className='mb-1'>Community</li>
                        </ul>
                        </div>
                        <div className="col-12 my-3">
                        <button className='btn btn-primary-purple px-4'>My account</button>
                        </div>
                        <div className="col-12">
                        <div className='row d-flex'>
                            <div className='col-lg-1 col-md-1 col-sm-1 col-1 '>
                                <img src="assets/images/fb.png" />
                            </div>
                            <div className='col-lg-1 col-md-1 col-sm-1 col-1'>
                                <img src="assets/images/li.png" />
                            </div>
                            <div className='col-lg-1 col-md-1 col-sm-1 col-1'>
                                <img src="assets/images/re.png" />
                            </div>
                            <div className='col-lg-1 col-md-1 col-sm-1 col-1'>
                                <img src="assets/images/tw.png" />
                            </div>
                            <div className='col-lg-1 col-md-1 col-sm-1 col-1'>
                                <img src="assets/images/insta.png" />
                            </div>
                        </div>
                        </div>

                    </div>
                    {/* <div className='mb-3'>
                        <ul className='footer-medium-text p-0' style={{ listStyle: 'none' }}>
                            <li className='mb-1'>Auctions</li>
                            <li className='mb-1'>Roadmap</li>
                            <li className='mb-1'>Discover</li>
                            <li className='mb-1'>Community</li>
                        </ul>
                        <button className='btn btn-primary-purple px-4'>My account</button>
                    </div> */}
                    {/* <div className='container position-absolute bottom-0 mb-3 g-0'>
                        <div className='row d-flex'>
                            <div className='col-lg-1 col-md-1 col-sm-1 col-1 '>
                                <img src="assets/images/fb.png" />
                            </div>
                            <div className='col-lg-1 col-md-1 col-sm-1 col-1'>
                                <img src="assets/images/li.png" />
                            </div>
                            <div className='col-lg-1 col-md-1 col-sm-1 col-1'>
                                <img src="assets/images/re.png" />
                            </div>
                            <div className='col-lg-1 col-md-1 col-sm-1 col-1'>
                                <img src="assets/images/tw.png" />
                            </div>
                            <div className='col-lg-1 col-md-1 col-sm-1 col-1'>
                                <img src="assets/images/insta.png" />
                            </div>
                        </div>

                    </div> */}
                </div>
                <div className="col-lg-4 col-md-10 col-sm-10 col-10 border  p-lg-5 p-md-3 p-sm-2 p-3  position-relative  footer-border-right">
                   <div className="row">
                       <div className="col-12">
                       <div className='mb-5'>
                   <p >Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis.</p>
                   </div>
                       </div>
                       <div className="col-12">
                       <div className="input-group mb-1 border rounded shadow-lg bg-white ">
                                    <input type="text" className="form-control my-1" style={{border:'none'}} placeholder="Newsletter" aria-label="Newsletter" aria-describedby="button-addon2" />
                                    <button className="btn footer-leftcol-text my-1" type="button" id="button-addon2" >Sign In</button>
                                </div>
                       </div>
                   </div>
                   
                  
                   
                    {/* <div className='container-fluid position-absolute bottom-0 mb-3 g-0 '>
                        <div className='row d-flex'>
                            <div className='col-lg-10 col-md-9 col-sm-5 col-5'>
                                <div className="input-group mb-1 border rounded shadow-lg bg-white ">
                                    <input type="text" className="form-control my-1" style={{border:'none'}} placeholder="Newsletter" aria-label="Newsletter" aria-describedby="button-addon2" />
                                    <button className="btn footer-leftcol-text my-1" type="button" id="button-addon2" >Sign In</button>
                                </div>
                            </div>
           
                        </div>

                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Footer