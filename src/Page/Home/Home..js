import React from 'react';
import Banner from './Banner/Banner';
import HeroSection from './HeroSection/HeroSection';
import InfoCards from './InfoCards/InfoCards';
import Services from './Services/Services';
import AppointmentLink from './AppointmentLink/AppointmentLink'
import Testimonial from './Testimonial/Testimonial';
import SimpleContact from './SimpleContact/SimpleContact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <HeroSection></HeroSection>
            <AppointmentLink></AppointmentLink>
            <Testimonial></Testimonial>
            <SimpleContact></SimpleContact>
        </div>
    );
};

export default Home;