import React from 'react';
import { Col } from 'react-bootstrap';

const Allservice = (props) => {
    const { name, banner, duration, price, rating, view } = props.service;
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex">
            <Col>
                <div className="card h- 50 shadow-lg border-2 ">
                    <img src={banner} className="card-img-top " height='145px' width='257' alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h4>${price}</h4>
                        <div className="d-flex justify-content-between">
                            <div>
                                <i class="fas fa-star text-warning"></i> {rating}
                            </div>
                            <div>
                                <i class="fas fa-eye text-secondary"></i> {view}
                            </div>
                            <div>
                                <i class="fas fa-clock text-danger"></i> {duration}
                            </div>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <button class="btn btn-sm btn-success"><i class="fas fa-cart-plus"></i> Admission Now</button>

                    </div>
                </div>
            </Col>
        </div>
    );
};

export default Allservice;