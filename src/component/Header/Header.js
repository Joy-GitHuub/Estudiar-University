import React from 'react';
import './Header.css'
import TopServices from '../TopServices/TopServices';
import VideoTour from '../VideoTour/VideoTour';


const Header = () => {
    return (
        <div>


            <div className=' banner bg-dark'>
                <div className='p-5 text-light '>
                    <h2>The Best University Of The State..</h2>
                    <h1 className='university-name'>Estudiar <span className='text-primary'>University</span></h1>


                    <button className='btn btn-outline-light text-info mt-5 d-block'>Know More</button>
                </div>

            </div>
            <TopServices></TopServices>
            <VideoTour></VideoTour>

        </div>
    );
};

export default Header;