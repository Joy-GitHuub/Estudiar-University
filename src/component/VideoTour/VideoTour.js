import React from 'react';
import './VideoTour.css'
import videoLogo from '../../header-section/slider-video.png'

const VideoTour = () => {
    return (
        <div className='tour-section text-light' >
            <div className='text-center'>
                <img width='80px' src={videoLogo} alt="" srcset="" />
                <div className='my-5'>
                    <h2 className='mb-4'>Video Tour in Estudiar</h2>
                    <h6>Take a tour in Estudiar and you will find the best university in the <br />state. The video will take you to every places in this university..</h6>

                </div>
            </div>

        </div>
    );
};

export default VideoTour;