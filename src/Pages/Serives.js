import React from 'react';
import Service from './Service';
import fluoride from '../assets/images/fluoride.png';
import cavity from '../assets/images/cavity.png';
import whiteing from '../assets/images/whitening.png';

const Serives = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            Description: '',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            Description: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whiteing',
            Description: '',
            img: whiteing
        }
    ]

    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary xl-font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)

                }
            </div>

        </div>
    );
};

export default Serives;