import React from 'react';
import heroImage from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../comps/PrimaryButton';

const HeroSection = () => {
    return (
        <section>
            <div className='container pt-100 pb-100'>
                <div className='row flex justify-content-center align-items-center'>
                    <div className='col-lg-6 col-sm-1'>
                        <img src={heroImage} className='img-fluid rounded-3 shadow' alt="" />
                    </div>
                    <div className='col-lg-6 col-sm-1 p-5'>
                        <div>
                            <h1 className='fw-bold text-uppercase'>
                                Exceptional <br /><span className='text-primary'>Dental Care</span><br /> on Your Terms
                            </h1>
                            <p className='text-muted'>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                            </p>
                            <PrimaryButton>Get Started</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;