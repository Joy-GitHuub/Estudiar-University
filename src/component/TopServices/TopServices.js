import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceCard from '../ServiceCard/ServiceCard';

const TopServices = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        const url = `./topServices.JSON`
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='bg-dark py-5' >
            <h1 className='text-light text-center mb-4'>Top Services {services.length}</h1>
            <Container>
                <Row>
                    {
                        services?.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default TopServices;