import React from 'react';
import { Col, Container as div, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './About.css'
const About = () => {
    return (
        <div>

            <div className="p-5 background-img text-light">
                <Row className="d-flex align-items-center">
                    <Col lg={4} md={5} xs={12}>
                        <h4>Estudiar University</h4>
                        <h3 className='about-university'>About Our University</h3>
                    </Col>
                    <Col lg={6} md={6} xs={12} className='pt-5'>
                        <h3>About Us</h3>
                        <h6 className='pb-3'>We are one of the largest, most diverse universities in the USA with over 90,000 students in USA, and a further 30,000 studying across 180 countries for Estudiar University.</h6>
                        <h6>
                            Estudiar University was established by John Smith in 1920 for the public benefit and it is recognized globally. Throughout our great history, Estudiar has offered access to a wide range of academic opportunities. As a world leader in higher education, the University has pioneered change in the sector.</h6>
                        <Link to='*'>Read Me <i className="fas fa-long-arrow-alt-right text-light ms-2 fs-5"></i></Link>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default About;