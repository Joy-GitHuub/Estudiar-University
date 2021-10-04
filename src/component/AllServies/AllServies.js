import React, { useEffect, useState } from 'react';
import Allservice from '../../component/Allservice/Allservice'




const AllServies = () => {

    const [allservice, setAllservice] = useState([]);
    useEffect(() => {
        const url = `./services.JSON`
        fetch(url)
            .then(res => res.json())
            .then(data => setAllservice(data))
    }, [])
    return (
        <div>

            <div className='container p-4'>
                <h2 className='text-center mb-5'>All Services</h2>
                <div className='row'>

                    {
                        allservice?.map(service => <Allservice service={service} key={service.id}></Allservice>)
                    }

                </div>

            </div>
        </div>
    );
};

export default AllServies;