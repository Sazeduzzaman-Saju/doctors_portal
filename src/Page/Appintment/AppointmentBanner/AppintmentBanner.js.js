import React from 'react';
import { DayPicker } from 'react-day-picker';
import Chair from '../../../assets/images/chair.png';
import bannerBg from '../../../assets/images/bg.png';


const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {


    return (
        <div>
            <section id="services" className="bg-light pt-100 pb-70" style={{ backgroundImage: `url(${bannerBg})`, backgroundSize: "cover" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 ">
                            <div className='shadow w-75 p-4 p-sm-0'>
                                <DayPicker
                                    mode='single'
                                    selected={selectedDate}
                                    onSelect={setSelectedDate}
                                />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className=''>
                                <img className='img-fluid shadow-lg' src={Chair} alt="" />
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </div >
    );
};

export default AppointmentBanner;