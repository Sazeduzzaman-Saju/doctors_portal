import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointmentBg from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../comps/PrimaryButton';

const AppinteLink = () => {
    return (
        <div className=' mt-5' style={{ backgroundImage: `url(${appointmentBg})`, backgroundSize: "cover", maxHeight: "40rem" }}>
            <div className='container'>
                <div className='row flex justify-content-center align-items-center'>
                    <div className='col-lg-6 col-sm-1'>
                        <div>
                            <img src={doctor} className="img-fluid" alt="" style={{ marginTop: '-8rem' }} />
                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-1'>
                        <div>
                            <p className='primary-color fw-bold'>Appointment</p>
                            <h1 className='text-white'>Make an appointment Today</h1>
                            <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <PrimaryButton>Get Started</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppinteLink;