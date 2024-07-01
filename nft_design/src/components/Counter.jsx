import React, { useState } from 'react'
import CountUp from 'react-countup';
import { useCountUp } from 'react-countup';
const Counter = () => {
    useCountUp({ ref: 'counter', end: 300 });
    useCountUp({ ref: 'artist', end: 300 });
    useCountUp({ ref: 'artwork', end: 300 });
    useCountUp({ ref: 'wallet', end: 300 });

  return (
  <div className="container-fluid my-5">
      <div className="row d-flex justify-content-center">
 
          <div className="col-lg-2 col-md-2 col-sm-6 col-12 text-center ">
              <img src="assets/images/u.png"/>
           
              <p className='counter-heading'> <span id="counter" /></p>
              <p>Users Active</p>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-6 col-12 text-center ">
              <img src="assets/images/artwork.png"/>
           
              <p className='counter-heading'> <span id="artwork" /></p>
              <p>Artworks</p>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-6 col-12 text-center ">
              <img src="assets/images/artist.png"/>
           
              <p className='counter-heading'> <span id="artist" /></p>
              <p>Artists</p>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-6 col-12 text-center ">
              <img src="assets/images/wallet.png"/>
           
              <p className='counter-heading'> <span id="wallet" /></p>
              <p>ETH Spent</p>
          </div>
      </div>
  </div>
  )
}

export default Counter