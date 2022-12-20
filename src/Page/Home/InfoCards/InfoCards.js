import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import maker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard/InfoCard';
import './InfoCards.css';


const InfoCards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Opening Hour',
            description: 'Open at 8:00am to 6:00pm',
            icon: clock,
            bgClass: 'info-bg-gradient',
        },
        {
            id: 2,
            name: 'Visit Our Location',
            description: 'Brooklyn, NY 10036, United States',
            icon: maker,
            bgClass: 'info-bg-gradient2',
        },
        {
            id: 3,
            name: 'Contact Us Now',
            description: '+000 123 456789',
            icon: phone,
            bgClass: 'info-bg-gradient',
        },
    ]
    return (
        <div className='container '>
            <div className='row'>

                <div className='info-details-container'>
                    {
                        cardData.map(data => <InfoCard
                            key={data.id}
                            data={data}
                        ></InfoCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default InfoCards;