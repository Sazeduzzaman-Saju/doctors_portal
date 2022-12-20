import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import SingleAppointment from './SingleAppointment.js/SingleAppointment';
import './AvailableAppointment.css';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../context/AuthProvider';



const AvailableAppointment = ({ selectedDate }) => {
    const { loading } = useContext(AuthContext)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');
    const { data: appointmentOptions = [], refetch } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            .then(res => res.json())
    })
    return (
        <div>
            <div className='text-center mt-5'>
                <p className='fs-3 primary-color'>You Picked: <span className='text-warning'>{format(selectedDate, 'PP')}</span></p>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='options-container mt-5 mb-5'>
                        {
                            appointmentOptions.map(options => <SingleAppointment
                                key={options._id}
                                options={options}
                                handleShow={handleShow}
                                setTreatment={setTreatment}
                            ></SingleAppointment>)}
                    </div>

                    {
                        treatment &&
                        <BookingModal
                            show={show}
                            handleClose={handleClose}
                            treatment={treatment}
                            selectedDate={selectedDate}
                            setTreatment={setTreatment}
                            refetch={refetch}
                        ></BookingModal>
                    }
                </div>
            </div>
        </div>
    );
};

export default AvailableAppointment;