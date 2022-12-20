import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const SingleAppointment = ({ options, setTreatment, handleShow }) => {
    const { name, slots } = options;

    return (
        <Card className='border-0 shadow '>
            <Card.Body className='text-center p-5'>
                <Card.Title className='fw-bold text-uppercase primary-color'>{name}</Card.Title>
                <Card.Text>
                    {slots.length > 0 ? slots[0] : 'Try Another Day'}
                </Card.Text>
                <Card.Text>
                    {slots.length} {slots.length > 1 ? 'Spaces' : "Space"} Available
                </Card.Text>
                <Button className='primary-btns border-0'
                    disabled={slots.length === 0}
                    onClick={() => { handleShow(); setTreatment(options); }}>
                    Book Appointment
                </Button>
            </Card.Body>

        </Card >
    );
};

export default SingleAppointment;