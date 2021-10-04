import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import TopServices from '../TopServices/TopServices';
import VideoTour from '../VideoTour/VideoTour';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <TopServices></TopServices>
            <VideoTour></VideoTour>
            <Footer></Footer>
        </div>
    );
};

export default Home;