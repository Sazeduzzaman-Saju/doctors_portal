import React from 'react';
import Fluoride from '../../../assets/images/fluoride.png';
import Cavity from '../../../assets/images/cavity.png';
import Whitening from '../../../assets/images/whitening.png';
import SingleServices from './SingleServices/SingleServices';
import './Services.css';

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon: Fluoride,
        },
        {
            id: 2,
            title: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon: Cavity,
        },
        {
            id: 3,
            title: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon: Whitening,
        }
    ]
    return (
        <div className='container'>
            <div className='row'>
                <div className='col pt-100'>
                    <div className='text-center mb-5'>
                        <p className='fw-bold text-primary'>OUR SERVICES</p>
                        <h1>Services We Provide</h1>
                    </div>
                </div>
            </div>
            <div className='services-container'>
                {services.map(service => <SingleServices
                    key={service.id}
                    service={service}
                ></SingleServices>)}
            </div>
        </div>
    );
};

export default Services;