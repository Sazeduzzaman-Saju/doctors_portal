import React from 'react';
import PrimaryButton from '../../../comps/PrimaryButton';
import appointmentBg from '../../../assets/images/appointment.png'

const SimpleContact = () => {
    return (
        <div className='' style={{ backgroundImage: `url(${appointmentBg})`, backgroundSize: "cover" }}>
            <div className='container pb-5'>
                <div className='row'>
                    <div className='cols pt-100'>
                        <div className='text-center mb-5'>
                            <p className='fw-bold text-primary'>Contact Us</p>
                            <h1 className='text-white'>Stay connected with us</h1>
                        </div>
                    </div>
                    <div className='mx-auto bg-white p-5 mb-5 rounded-1' style={{ maxWidth: '25rem' }}>
                        <form className=''>
                            <div className="form-outline ">
                                <label className="form-label primary-color" >Your Email address</label>
                                <input type="email" id="form2Example1" className="form-control" />
                            </div>

                            <div className="form-outline ">
                                <label className="form-label primary-color" >Your Subject</label>
                                <input type="password" id="form2Example2" className="form-control" />
                            </div>
                            <div className="form-outline  ">
                                <label className="form-label primary-color" >Your Message</label>
                                <textarea name="comment " className='form-control'></textarea>
                            </div>
                            <div className="form-outline mb-3">

                            </div>

                            <div className='text-center'>
                                <PrimaryButton type="submit">Submit</PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimpleContact;