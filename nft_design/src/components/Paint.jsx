import React, { useEffect } from 'react'
import 'aos/dist/aos.css'; 
import Aos from 'aos';
const Paint = () => {
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center ">
                <div className="col-lg-5 col-md-10 col-sm-10 col-10 d-none d-lg-block" data-aos="fade-right">
                    <div className='my-3'>
                    <span className='paint-left-smallheading'>Overline</span>
                    </div>
                  <div>
                  <span className='paint-left-heading'>Sapien ipsum scelerisque convallis fusce</span>
                  </div>
                    <div className='my-3 pe-5' style={{paddingRight: '10'+'rem'}}>
                    <span className='paint-left-subheading'>Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</span>
                    </div>
                <div>
                <button className='btn btn-primary-purple px-3 py-2 me-1'>Get started</button>
                <button className='btn btn-primary-purple-outline px-3 py-2 ms-1'>Learn more</button>
                </div>
                 
                </div>
                <div className="col-lg-5 col-md-10 col-sm-10 col-10 d-none d-lg-block" data-aos="fade-left">
                    <img src="assets/images/paint.png" className="img-fluid" alt="..." />
                </div>
            </div>
            {/* for small screen */}
            <div className="row d-flex justify-content-center">
                <div className="col-lg-5 col-md-10 col-sm-10 col-10  d-lg-none d-sm-block">
                    <div className='my-3'>
                    <span className='paint-left-smallheading'>Overline</span>
                    </div>
                  <div>
                  <span className='paint-left-heading'>Sapien ipsum scelerisque convallis fusce</span>
                  </div>
                    <div className='my-3 pe-5' style={{paddingRight: '10'+'rem'}}>
                    <span className='paint-left-subheading'>Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</span>
                    </div>
                <div>
                <button className='btn btn-primary-purple px-3 py-2 me-1'>Get started</button>
                <button className='btn btn-primary-purple-outline px-3 py-2 ms-1'>Learn more</button>
                </div>
                 
                </div>
                <div className="col-lg-5 col-md-10 col-sm-10 col-10  d-lg-none d-sm-block" >
                    <img src="assets/images/paint.png" className="img-fluid" alt="..." />
                </div>
            </div>
        </div>
    )
}

export default Paint