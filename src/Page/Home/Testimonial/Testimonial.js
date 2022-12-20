import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import './Testimornial.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import author1 from '../../../assets/images/people1.png';
import author2 from '../../../assets/images/people2.png';
import author3 from '../../../assets/images/people3.png';
import author4 from '../../../assets/images/people1.png';
import author5 from '../../../assets/images/people2.png';
import SingleTestimonial from './SingleTestimornial/SingleTestimonial';

const Testimonial = () => {
    const testimonialData = [
        {
            id: 1,
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            authorPhoto: author1,
            authorName: 'Tommy Loafer',
            country: "Australia",
        },
        {
            id: 2,
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            authorPhoto: author2,
            authorName: 'Jimmi Nisham',
            country: "USA",
        },
        {
            id: 3,
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            authorPhoto: author3,
            authorName: 'Tonmoy Barua',
            country: "Russia",
        },
        {
            id: 4,
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            authorPhoto: author4,
            authorName: 'Jelly Hudson',
            country: "China",
        },
        {
            id: 5,
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            authorPhoto: author5,
            authorName: 'Jeson Root',
            country: "California",
        },
    ];
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        navText: ["<", ">"],
        smartSpeed: 300,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 1,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 3,
            }
        },
    };
    return (
        <div className='container mt-5 mb-5'>
            <div className='row flex justify-content-center align-items-center'>
                <div className='col-lg-6 col-sm-1 text-start'>
                    <div>
                        <p className='primary-color fw-bold'>Appointment</p>
                        <h1 className=''>Make an appointment Today</h1>
                    </div>
                </div>
                <div className='col-lg-6 col-sm-1 text-end'>
                    <div>
                        <img src={quote} className="w-25" alt="" />
                    </div>
                </div>
            </div>
            <div >
                <OwlCarousel className="slider-items owl-carousel" {...options}>
                    {testimonialData.map(testimonial => <SingleTestimonial
                        key={testimonial.id}
                        testimonial={testimonial}
                    ></SingleTestimonial>)}
                </OwlCarousel>
            </div>
        </div >
    );
};

export default Testimonial;