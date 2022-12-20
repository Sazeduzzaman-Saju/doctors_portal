import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import Chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../../comps/PrimaryButton';
import bannerBg from '../../../assets/images/bg.png';

const Banner = () => {
    return (
        <section id="services" className="bg-light pt-100 pb-100" style={{ backgroundImage: `url(${bannerBg})`, backgroundSize: "cover" }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 ">
                        <h2 className="title fw-bold text-uppercase">Your New <span style={{ color: "#19d3ae", fontWeight: "bold" }}>Smile Starts</span>   Here</h2>
                        <p className=" mt-3  text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <Link to="/appointment">
                            <PrimaryButton>Get Started</PrimaryButton>
                        </Link>
                    </div>
                    <div className="col-lg-7">
                        <div className=''>
                            <img className='img-fluid shadow-lg' src={Chair} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;