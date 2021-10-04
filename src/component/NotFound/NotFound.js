import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../header-section/istockphoto-502584005-612x612.jpg';

const NotFound = () => {
    return (
        <div className="text-center p-5">
            <img height='200px' src={notFound} alt="" />
            <br />
            <Link to="/home">
                <button className="btn btn-lg btn-danger mt-4">Back To Home</button>
            </Link>
        </div>
    );
};

export default NotFound;