import React from 'react';


const Footer = () => {



    return (
        <div className='bg-dark text-light pt-5'>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="left-container text-start">
                                <h1>Estudiar University</h1>
                                <div className="icons-container d-flex text-center mt-4 ">
                                    <div className="icon me-5">
                                        <i class="fab fa-facebook fs-4 text-info"></i>
                                    </div>
                                    <div className="icon me-5">
                                        <i class="fab fa-youtube fs-4 text-info"></i>
                                    </div>
                                    <div className="icon me-5">
                                        <i class="fab fa-twitter fs-4 text-info"></i>
                                    </div>
                                    <div className="icon">
                                        <i class="fab fa-linkedin fs-4 text-info"></i>
                                    </div>
                                </div>
                                <p className="mt-4 ">
                                    <small className='my-3'>
                                        *Wake up with determination. Go to bed with satisfaction..
                                    </small>
                                    <br />
                                    <small className='my-3'>
                                        *The successful warrior is the average man, with laser-like focus..
                                    </small>
                                    <br />
                                    <small className='my-3'>
                                        * Discipline is just choosing between what you want now and what you want most.
                                    </small>
                                </p>

                                <p className="mt-5 text-primary">
                                    <small>Copyright © 2021 Estudiar University. All rights reserved.</small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-menu-container">
                                <ul>
                                    <li className="footer-menu">Home</li>
                                    <li className="footer-menu">Services</li>
                                    <li className="footer-menu">Blog</li>
                                    <li className="footer-menu">Contact us</li>
                                    <li className="footer-menu"> About us</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="right-footer-container">
                                <h3>Sign up for the Estudiar University</h3>
                                <input
                                    className="footer-input"
                                    type="text"
                                    placeholder="Enter Email"
                                />
                                <div className="phone d-flex align-items-center justify-content-center mt-4">
                                    <div className="foter-phone-icon">

                                    </div>
                                    <div>
                                        <h5>+2345 2345 2343</h5>
                                    </div>
                                </div>
                                <div className="map d-flex align-items-center justify-content-center">
                                    <div className="foter-phone-icon">

                                    </div>
                                    <div>
                                        <p>
                                            4400 Massachusetts Ave NW, Washington, DC 20016, United States
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;