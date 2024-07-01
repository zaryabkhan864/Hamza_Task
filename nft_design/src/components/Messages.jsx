import React from 'react'

const Messages = () => {
  return (
    <div className="container-fluid p-lg-0 p-md-5 p-sm-5 p-5 mb-5	">

      <div className="row d-flex justify-content-lg-center" >
        <div className="col-lg-10 col-md-10 col-sm-12 col-12  g-0">
          <img src="assets/images/Pleat.png" className='img-fluid' />
        </div>
        <div className="col-lg-5 p-5" style={{ background: "#F2F3F6" }}>
          <div className='my-3'>
            <span className='paint-left-smallheading'>Overline</span>
          </div>
          <div>
            <span className='paint-left-heading'>Cursus vitae sollicitudin donec nascetur. Join now</span>
          </div>
          <div className='my-3 pe-5' style={{ paddingRight: '10' + 'rem' }}>
            <span className='paint-left-subheading'>Donec volutpat bibendum justo, odio aenean congue est porttitor ut. Mauris vestibulum eros libero amet tincidunt.</span>
          </div>
          <div className=''>
           
            <div className='mb-lg-0 mb-md-0 mb-sm-2 mb-2 w-25 d-inline'>
            <button className='btn btn-primary-purple px-3 py-2 me-1'>Get started</button>
            </div>
            <div className='w-50 d-inline'>
            <button className='btn btn-primary-purple-outline px-3 py-2 ms-lg-1 ms-md-1 ms-sm-0 ms-0 mt-lg-0 mt-md-0 mt-sm-2 mt-2'>Learn more</button>
            </div>
          
          </div>

        </div>
        <div className="col-lg-5 p-5" style={{ background: "#F2F3F6" }}>
          <img src="assets/images/Users.png" className="img-fluid" alt="..." />
        </div>
      </div>
    </div>
  )
}

export default Messages