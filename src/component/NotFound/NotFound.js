import React from 'react';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notFound from '../../header-section/istockphoto-502584005-612x612.jpg';

const NotFound = () => {
    return (
        <div className="text-center p-5">
            <img height='200px' src={notFound} alt="" />
            <br />

            <Link to="/home">Back To Home</Link>

        </div>
    );
};

export default NotFound;