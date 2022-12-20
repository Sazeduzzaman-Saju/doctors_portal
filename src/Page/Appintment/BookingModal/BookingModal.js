import { format } from 'date-fns';
import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';


const BookingModal = ({ show, handleClose, treatment, setTreatment, selectedDate, refetch }) => {
    const { name: treatementName, slots } = treatment;
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext)

    const handleBookingSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        console.log(date, slot, name, email, phone)

        const bookings = {
            appointmentDate: date,
            treatment: treatementName,
            patient: name,
            slot,
            email,
            phone
        }

        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking Placed');
                    refetch();
                }
                else {
                    toast.error(data.message)
                    setTreatment(null);
                }
            })



    }

    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>{treatementName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleBookingSubmit} className='p-3'>
                    <input type="text"
                        defaultValue={date}
                        className='border-primary mb-4'
                        disabled />
                    <select name='slot' className="border-primary mb-4" aria-label="Default select example">

                        {
                            slots.map((slot, i) => <option
                                value={slot}
                                key={i}
                            >{slot}</option>)
                        }
                    </select>
                    <input type="text" name='name' defaultValue={user?.displayName} disabled className='border-primary mb-2'
                    />
                    <input type="email" name='email' defaultValue={user?.email} disabled className='border-primary mb-2'
                    />
                    <input type="number" name='phone' required placeholder="Your Phone Number"
                        className='border-primary mb-2'
                    />
                    <input type="submit"
                        value="Submit"
                    />
                </form>
            </Modal.Body>

        </Modal>
    );
};

export default BookingModal;