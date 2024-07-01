import React from 'react'

const Navbar = () => {
    return (
           <div className="p-3"> 
        <nav className="navbar navbar-expand-lg navbar-light ">
         
                <img src="/assets/images/logo.png" className="img-fluid rounded-start" alt="..." />
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Auctions</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Roadmap</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Discover</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Comunity</a>
                        </li>
                    </ul>
                    <form className="d-flex justify-content-center">

                        <button className="btn btn-primary-purple-outline px-3 py-2 mx-1" type="submit">Contact</button>
                        <button className="btn btn-primary-purple px-3 py-2 mx-1" type="submit">My account</button>
                    </form>
                </div>
           
        </nav>
          </div> 
    )
}

export default Navbar